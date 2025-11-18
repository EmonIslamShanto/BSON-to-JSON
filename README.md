# BSON to JSON Converter

A simple web application that converts BSON (Binary JSON) files to JSON format. Built with Express.js and designed for easy deployment on Vercel.

## Features

- 📤 Upload BSON files through a web interface
- 🔄 Automatic conversion from BSON to JSON
- 📊 Support for multiple BSON documents in a single file
- 🚀 Simple and lightweight

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Multer** - File upload handling
- **BSON** - BSON serialization/deserialization

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd "BSON to JSON"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. Visit the homepage
2. Click "Choose File" and select your BSON file
3. Click "Upload & Convert"
4. The converted JSON will be displayed in your browser

## API Endpoints

### `GET /`
Returns the HTML form for uploading BSON files.

### `POST /upload`
Uploads and converts a BSON file to JSON.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data with a file field named `bsonFile`

**Response:**
- Content-Type: `application/json`
- Body: JSON array containing the converted documents

## Project Structure

```
.
├── app.js              # Main application file
├── package.json        # Project dependencies
├── uploads/            # Temporary upload directory
└── README.md          # Project documentation
```

## Deployment on Vercel

This project is configured for deployment on Vercel.

### Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy via GitHub

1. Push your code to GitHub
2. Import your repository in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will automatically detect the configuration and deploy

### Environment Variables

No environment variables are required for basic functionality.

## Development

Start the development server with auto-reload:

```bash
npm run dev
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue in the repository.
