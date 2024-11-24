from faker import Faker
import csv
import random

# Initialize the Faker library
fake = Faker()

# Define the number of questions to generate
num_questions = 50

# Define the structure of the dataset
def generate_aptitude_question():
    question = fake.sentence(nb_words=8)
    correct_answer = fake.word()
    options = [correct_answer] + [fake.word() for _ in range(3)]
    random.shuffle(options)  # Shuffle options for variety
    correct_option = chr(65 + options.index(correct_answer))  # Convert index to 'A', 'B', 'C', or 'D'
    
    return {
        "Question": question,
        "Option1": options[0],
        "Option2": options[1],
        "Option3": options[2],
        "Option4": options[3],
        "CorrectOption": correct_option
    }

# Generate questions and save to CSV
with open("aptitude_questions.csv", mode="w", newline="", encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=["Question", "Option1", "Option2", "Option3", "Option4", "CorrectOption"])
    writer.writeheader()
    for _ in range(num_questions):
        writer.writerow(generate_aptitude_question())

print("Aptitude questions have been generated and saved to aptitude_questions.csv")
