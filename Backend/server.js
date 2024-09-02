const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'surya@1234',
    database: 'internativeSchool'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        process.exit(1); // Exit the process if the connection fails
    } else {
        console.log('Connected to MySQL database.');
    }
});

// API Route to handle user registration
app.post('/register', async (req, res) => {
    const { name, email, password, father_name, mother_name, date_of_birth, phone, aadhar_card, pan_card } = req.body;

    try {
        // Validate required fields
        if (!name || !email || !password || !date_of_birth || !phone) {
            return res.status(400).send('Missing required fields');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // SQL query to insert user
        const sql = `INSERT INTO students (name, email, password, father_name, mother_name, date_of_birth, phone, aadhar_card, pan_card)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(sql, [name, email, hashedPassword, father_name, mother_name, date_of_birth, phone, aadhar_card, pan_card], (err, result) => {
            if (err) {
                console.error('Error inserting user into database:', err);
                return res.status(500).send('Server error');
            }
            res.status(200).send('User registered successfully');
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send('Server error');
    }
});

//admin
//adminlogin
 // Admin login route
 app.post('/adminlogin', (req, res) => {
    const { user, password } = req.body;
    console.log('Received login attempt:', { user, password }); // Log input
  
    const sql = `SELECT * FROM user1 WHERE user = ? AND password = ?`;
    db.query(sql, [user ,password], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Server error');
      }
  
      if (results.length === 0) {
        console.log('User not found:', user);
        return res.status(400).send('User not found');
      }
  
    
      const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });
      console.log('Login successful for user:', user.user);
      res.send({ token });
    });
  });


//const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Access Denied: No Token Provided!');
  
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
      if (err) return res.status(401).send('Invalid Token');
      req.user = decoded;
      next();
  });
};

module.exports = verifyToken;


//
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     // In a real application, you'd verify credentials here
//     if (username === 'user' && password === 'pass') {
//         res.json({ message: 'Login successful!' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });


// Get 100 students
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students LIMIT 100';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Search student by phone or email
app.get('/api/students/search', (req, res) => {
    const query = req.query.query;
    const sql = 'SELECT * FROM students WHERE phone = ? OR email = ?';
    db.query(sql, [query, query], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

// Edit student details
app.put('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const sql = 'UPDATE students SET ? WHERE id = ?';
    db.query(sql, [updatedData, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Student updated successfully' });
    });
});




// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
