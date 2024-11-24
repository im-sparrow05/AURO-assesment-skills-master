// Import required modules
const pool = require('../configDB/database');

// Function to create the upload_coding_question table
const createUploadCodingQuestionTable = async () => {
    try {
        // SQL query to create the upload_coding_question table
        const query = `
            CREATE TABLE IF NOT EXISTS upload_coding_question (
                id INT AUTO_INCREMENT PRIMARY KEY,
                question_title TEXT NOT NULL,
                question_text TEXT NOT NULL,
                topic VARCHAR(255),
                constraints TEXT,
                example_input TEXT,
                example_output TEXT,
                difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        // Execute the SQL query
        await pool.query(query);
        
        console.log('upload_coding_question table created successfully');
    } catch (error) {
        // Handle error
        console.error('Error creating upload_coding_question table:', error);
    }
};

// Export the createUploadCodingQuestionTable function
module.exports = {
    createUploadCodingQuestionTable
};
