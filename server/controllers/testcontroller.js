//required imports
const asyncHandler= require('express-async-handler')
const pool= require('../configDB/database')
const {createTestTable}= require('../model/testSchema')
const {verifyToken} = require('../middlewares/verfication');
// Controller function to insert data into the test table
const insertTestData = asyncHandler(async (req, res) => {
    // Extract data from request body
    const { marksObtained, totalMarks, remarks } = req.body;

    try {
        // Ensure table exists
        await createTestTable();

        // Call the verifyToken middleware function to verify the JWT token
        verifyToken(req, res, async () => {
            // Get user ID from request object
            const userId = req.userId;
            // Print token received in request headers
            console.log("Token Sent in Request Headers:");
            // Insert data into the test table
            await pool.query(
                'INSERT INTO Test (userId, dateOfTest, testNumber, marksObtained, totalMarks, remarks) VALUES (?, ?, ?, ?, ?, ?)',
                [userId, new Date(), 1, marksObtained, totalMarks, remarks]
            );

            res.status(201).json({ message: 'Test data inserted successfully' });
        });
    } catch (error) {
        console.error('Error inserting test data:', error);
        res.status(500).json({ error: 'Failed to insert test data' });
    }
});
// Controller function to fetch personalized test records after verifying token
const getPersonalizedTestRecords = async (req, res) => {
    try {
        // Verify token to get user ID
        verifyToken(req, res, async () => {
            const userId = req.userId;

            // Query to fetch personalized test records
            const query = `
                SELECT Test.*, users.username
                FROM Test
                INNER JOIN users ON Test.userId = users.id
                WHERE users.id = ?
            `;

            // Execute the query
            const [rows] = await pool.query(query, [userId]);

            // Return the test records in the response
            res.status(200).json({ testRecords: rows });
        });
    } catch (error) {
        console.error('Error fetching personalized test records:', error);
        res.status(500).json({ error: 'Failed to fetch test records' });
    }
}
module.exports = {
    insertTestData,
    getPersonalizedTestRecords
};
