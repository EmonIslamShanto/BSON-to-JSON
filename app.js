// app.js
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { BSON } = require("bson");

const app = express();
const port = 3000;

const upload = multer({ dest: "uploads/" });

// Function to parse multiple BSON documents from a file
function parseBSONFile(buffer) {
  const docs = [];
  let offset = 0;

  while (offset < buffer.length) {
    // Read the size of the document (first 4 bytes is an int32)
    const size = buffer.readInt32LE(offset);

    // Slice the document out of the buffer
    const docBuffer = buffer.slice(offset, offset + size);

    // Deserialize one document
    const doc = BSON.deserialize(docBuffer);

    docs.push(doc);

    // Move offset forward
    offset += size;
  }

  return docs;
}

app.post("/upload", upload.single("bsonFile"), (req, res) => {
  try {
    const bsonFilePath = req.file.path;

    // Read BSON file
    const bsonData = fs.readFileSync(bsonFilePath);

    // Parse BSON (multiple docs)
    const jsonData = parseBSONFile(bsonData);

    // Convert to JSON string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Remove uploaded file
    fs.unlinkSync(bsonFilePath);

    // Send JSON response
    res.setHeader("Content-Type", "application/json");
    res.send(jsonString);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error converting BSON to JSON");
  }
});

app.get("/", (req, res) => {
  res.send(`
    <h2>BSON to JSON Converter</h2>
    <form method="post" action="/upload" enctype="multipart/form-data">
      <input type="file" name="bsonFile" />
      <button type="submit">Upload & Convert</button>
    </form>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
