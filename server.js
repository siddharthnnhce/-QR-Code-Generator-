import express from 'express';
import qr from 'qr-image';

const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Endpoint to generate QR code
app.post('/generate-qr', (req, res) => {
    const url = req.body.URL;
    const qr_svg = qr.image(url);
    
    res.setHeader('Content-Type', 'image/png');
    qr_svg.pipe(res);
});

// Start the server
const PORT = 3000; // Change this to your preferred port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
