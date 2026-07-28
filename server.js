const express = require('express');
const path = require('path');
const app = express();

// Use Render's assigned port, or default to 3000
const PORT = process.env.PORT || 3000;

// Serve all static files (CSS, JS, images) from the current directory
app.use(express.static(path.join(__dirname)));

// This is the critical fix for the 404 errors. 
// Any route that isn't a static file will serve dashboard.html, 
// allowing the frontend router to handle the URL without crashing.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Admin Dashboard running on port ${PORT}`);
    console.log(`🌐 Ready for production deployment on Render.`);
});