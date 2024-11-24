import os
import csv
import mysql.connector
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Function to connect to MySQL database
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
    try:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS coding_problems (
                id INT AUTO_INCREMENT PRIMARY KEY,
                Statement TEXT,
                Example TEXT,
                `Constraint` TEXT,
                Topic VARCHAR(255),
                Level VARCHAR(255)
            )
        """)
        print("Table created successfully.")
    except mysql.connector.Error as error:
        print(f"Error creating table: {error}")

# Function to insert data from CSV file into MySQL table
def insert_data_from_csv(filename, cursor):
    try:
        with open(filename, 'r', encoding='utf-8-sig') as file:  # Handling UTF-8 BOM
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                cursor.execute("""
                    INSERT INTO coding_problems (Statement, Example, `Constraint`, Topic, Level) 
                    VALUES (%s, %s, %s, %s, %s)
                """, (row['Statement'], row['Example'], row['Constraint'], row['Topic'], row['Level']))
        print("Data inserted successfully.")
    except mysql.connector.Error as error:
        print(f"Error inserting data: {error}")

# Main function
def main():
    # CSV file containing the data
    csv_filename = 'frontcode\coding_problems.csv'

    # Connect to the MySQL database
    conn = connect_to_database()
    if conn is None:
        print("Failed to connect to the database.")
        return
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

if __name__ == "__main__":
    main()
