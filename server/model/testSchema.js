// Import required modules
const pool = require('../configDB/database');

// Function to create the Test table
const createTestTable = async () => {
    try {
        // SQL query to create the Test table
        const query = `
            CREATE TABLE IF NOT EXISTS Test (
                id INT AUTO_INCREMENT PRIMARY KEY,
                userId INT NOT NULL,
                FOREIGN KEY (userId) REFERENCES users(id),
                dateOfTest DATE NOT NULL,
                testNumber INT NOT NULL,
                marksObtained INT NOT NULL,
                totalMarks INT NOT NULL,
                remarks VARCHAR(255)
            )
        `;

        // Execute the SQL query
        await pool.query(query);
        
        console.log('Test table created successfully');
    } catch (error) {
        // Handle error
        console.error('Error creating Test table:', error);
    }
};

// Export the createTestTable function
module.exports = {
    createTestTable
};
