// Import required modules
const pool = require('../configDB/database');
const { createUploadedQuestionsTable}= require('../model/aptischema')
const asyncHandler = require('express-async-handler');

// Function to get a single aptitude question
const getAptitudeQuestion = asyncHandler(async (req, res) => {
  try {
    // Query the database to get a single aptitude question
    const [row] = await pool.query('SELECT * FROM aptitude_questions ORDER BY RAND() LIMIT 1');
    
    // Send the single aptitude question as response
    res.status(200).json(row[0]); // Assuming the query returns an array with a single row
  } catch (error) {
    // Handle database errors
    console.error('Error fetching aptitude question:', error);
    res.status(500).json({ error: 'Failed to fetch aptitude question' });
  }
});
// Function to insert a question uploaded by the user
const insertUploadedQuestion = asyncHandler(async (req, res) => {
    const { question, optionA, optionB, optionC, optionD, correctOption } = req.body;
  
    try {
     await createUploadedQuestionsTable()
      // Insert the uploaded question into the database
      await pool.query('INSERT INTO uploaded_questions (question, option_a, option_b, option_c, option_d, correct_option) VALUES (?, ?, ?, ?, ?, ?)', [question, optionA, optionB, optionC, optionD, correctOption]);
  
      res.status(201).json({ message: 'Question uploaded successfully' });
    } catch (error) {
      // Handle database errors
      console.error('Error uploading question:', error);
      res.status(500).json({ error: 'Failed to upload question' });
    }
  });
  const getuploadedQuestion = asyncHandler(async (req, res) => {
    try {
      // Query the database to get a single uploaded_questions question
      const [row] = await pool.query('SELECT * FROM uploaded_questions ORDER BY RAND() LIMIT 1');
      
      // Send the single aptitude question as response
      res.status(200).json(row[0]); // Assuming the query returns an array with a single row
    } catch (error) {
      // Handle database errors
      console.error('Error fetching aptitude question:', error);
      res.status(500).json({ error: 'Failed to fetch aptitude question' });
    }
  });
// Controller function to check the answer
const checkAnswer = asyncHandler(async (req, res) => {
  // Extract the question ID and answer from the request body
  const { questionId, providedAnswer } = req.body;

  try {
    // Query the database to retrieve the correct option for the given question ID
    const [row] = await pool.query('SELECT correct_option FROM aptitude_questions WHERE id = ?', [questionId]);

    // Check if the row exists and contains a correct option
    if (row && row[0] && row[0].correct_option) {
      // Extract the correct option from the database response
      const correctOption = row[0].correct_option;

      // Compare the provided answer with the correct option
      const isCorrect = providedAnswer === correctOption;

      // Return a response indicating whether the answer is correct or not
      res.status(200).json({ isCorrect });
    } else {
      // Handle the case where the question ID is invalid or the correct option is not found
      res.status(404).json({ error: 'Question not found or correct option not available' });
    }
  } catch (error) {
    // Handle database errors
    console.error('Error checking answer:', error);
    res.status(500).json({ error: 'Failed to check answer' });
  }
});

// Export the getAptitudeQuestion function
module.exports = {
  getAptitudeQuestion,
  insertUploadedQuestion,
  getuploadedQuestion,
  checkAnswer
};
