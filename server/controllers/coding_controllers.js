const asyncHandler= require('express-async-handler')
const pool= require('../configDB/database')
const {createUploadCodingQuestionTable}= require('../model/coding_schema')
// Function to get a single coding question
const getCodingQuestion = asyncHandler(async (_req, res) => {
    try {
      // Query the database to get a single coding question
      const [row] = await pool.query('SELECT * FROM coding_problems ORDER BY RAND() LIMIT 1');
      
      // Send the single coding question as response
      res.status(200).json(row[0]); // Assuming the query returns an array with a single row
    } catch (error) {
      // Handle database errors
      console.error('Error fetching coding question:', error);
      res.status(500).json({ error: 'Failed to fetch coding question' });
    }
  });
  // Function to insert a coding question uploaded by the user
const insertUploadedCodingQuestion = asyncHandler(async (req, res) => {
  const { questionTitle, questionText, topic, constraints, exampleInput, exampleOutput, difficulty } = req.body;

  try {
      await createUploadCodingQuestionTable(); // Ensure table exists

      // Insert the uploaded coding question into the database
      await pool.query(
          'INSERT INTO upload_coding_question (question_title, question_text, topic, constraints, example_input, example_output, difficulty) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [questionTitle, questionText, topic, constraints, exampleInput, exampleOutput, difficulty]
      );

      res.status(201).json({ message: 'Coding question uploaded successfully' });
  } catch (error) {
      // Handle database errors
      console.error('Error uploading coding question:', error);
      res.status(500).json({ error: 'Failed to upload coding question' });
  }
});
// Function to get a single coding question
const getuploadedCodingQuestion = asyncHandler(async (req, res) => {
  try {
    // Query the database to get a single coding question
    const [row] = await pool.query('SELECT * FROM upload_coding_question ORDER BY RAND() LIMIT 1');
    
    // Send the single coding question as response
    res.status(200).json(row[0]); // Assuming the query returns an array with a single row
  } catch (error) {
    // Handle database errors
    console.error('Error fetching coding question:', error);
    res.status(500).json({ error: 'Failed to fetch coding question' });
  }
});

module.exports= {
    getCodingQuestion,
    insertUploadedCodingQuestion,
    getuploadedCodingQuestion
}  