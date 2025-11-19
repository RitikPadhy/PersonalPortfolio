const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer(); // Middleware to handle form-data

// Enable CORS to allow requests from your frontend
app.use(cors());

// Define the /send endpoint to receive form submissions
app.post("/send", upload.none(), (req, res) => {
  console.log("Received Form Data:", req.body); // Log received form data

  // Send a response back to the client
  res.json({
    message: "Form submitted successfully!",
    receivedData: req.body,
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
