const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello from EC2 Docker Deployment!');
});

// Health check endpoint used for error handling in the pipeline
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
