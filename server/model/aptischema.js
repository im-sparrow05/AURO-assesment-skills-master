// Import required modules
const pool = require('../configDB/database');

// Function to create the uploaded_questions table
const createUploadedQuestionsTable = async () => {
    try {
        // SQL query to create the uploaded_questions table
        const query = `
            CREATE TABLE IF NOT EXISTS uploaded_questions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                question VARCHAR(255) NOT NULL,
                option_a VARCHAR(255) NOT NULL,
                option_b VARCHAR(255) NOT NULL,
                option_c VARCHAR(255) NOT NULL,
                option_d VARCHAR(255) NOT NULL,
                correct_option VARCHAR(1) NOT NULL
            )
        `;

        // Execute the SQL query
        await pool.query(query);
        
        console.log('Uploaded_questions table created successfully');
    } catch (error) {
        // Handle error
        console.error('Error creating uploaded_questions table:', error);
    }
};

// Export the createUploadedQuestionsTable function
module.exports = {
    createUploadedQuestionsTable
};
