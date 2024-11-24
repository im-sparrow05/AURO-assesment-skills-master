import os
import csv
import mysql.connector
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Function to connect to MySQL database
# Return the database connection object, which contains the following properties:
        # - host: the database host address or IP address
        # - user: the username used to authenticate the connection
        # - password: the password used to authenticate the connection
        # - database: the name of the database to connect to
def connect_to_database():
    try:
        return mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_DATABASE")
        )
    except mysql.connector.Error as error:
        print(f"Error: {error}")
        return None
# Function to create table in MySQL database
def create_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS aptitude_questions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            question_text TEXT,
            option_a VARCHAR(255),
            option_b VARCHAR(255),
            option_c VARCHAR(255),
            option_d VARCHAR(255),
            correct_option VARCHAR(1)
        )
    """)

# Function to insert data from CSV file into MySQL table
def insert_data_from_csv(filename, cursor):
    with open(filename, 'r', encoding='utf-8-sig') as file:  # Handling UTF-8 BOM
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            cursor.execute("""
                INSERT INTO aptitude_questions (question_text, option_a, option_b, option_c, option_d, correct_option) 
                VALUES (%s, %s, %s, %s, %s, %s)
            """, (row['Question'], row['Option1'], row['Option2'], row['Option3'], row['Option4'], row['CorrectOption']))

# Main function
def main():
    # CSV file containing the dat
    csv_filename = 'aptitude_questions.csv'

    # Connect to the MySQL database
    conn = connect_to_database()
    cursor = conn.cursor()

    # Create table if it doesn't exist
    create_table(cursor)

    # Insert data from CSV file into MySQL table
    insert_data_from_csv(csv_filename, cursor)

    # Commit the transaction
    conn.commit()

    # Close the cursor and connection
    cursor.close()
    conn.close()

    print("Data inserted successfully.")

if __name__ == "__main__":
    main()
