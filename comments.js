// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse incoming request with JSON payloads
app.use(express.json());

// Create an array to store comments
let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send('Comment created successfully');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id === id);
  if (commentIndex !== -1) {
    comments[commentIndex] = req.body;
    res.send('Comment updated successfully');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id === id);
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
    res.send('Comment deleted successfully');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server: node comments.js
// Test the server with Postman