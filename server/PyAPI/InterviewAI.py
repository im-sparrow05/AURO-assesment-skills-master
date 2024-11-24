from flask import Flask, request, jsonify
import langchain

app = Flask(__name__)

# Initialize Langchain question database
question_db = langchain

# Add some sample questions to the database
question_db.add("Tell me about a challenging project you worked on.")
question_db.add("What are your strengths and weaknesses?")
# Add more questions as needed

@app.route('/generate_questions', methods=['POST'])
def generate_questions():
    # Get resume data from request
    resume_data = request.json.get('resume_data')

    # Parse resume data (Example: You might use a library like PyMuPDF to parse PDFs)
    parsed_data = parse_resume_data(resume_data)

    # Get additional questions from Langchain question database
    additional_questions = get_additional_questions()

    # Return questions to frontend
    return jsonify({'interview_questions': additional_questions})

def parse_resume_data(resume_data):
    # Implement resume parsing logic here
    # Example: Extract relevant information from the resume_data
    parsed_data = {
        'name': 'John Doe',
        'education': 'Bachelor\'s degree in Computer Science',
        'experience': 'Software Engineer at ABC Inc. (2018 - Present)',
        'skills': 'Proficient in Python, Java, and JavaScript',
        # Add more parsed data as needed
    }
    return parsed_data

def get_additional_questions():
    # Retrieve additional questions from Langchain question database
    additional_questions = question_db.get_random_questions(5)  # Example: Get 5 random questions
    return additional_questions

if __name__ == '__main__':
    app.run(debug=True)
