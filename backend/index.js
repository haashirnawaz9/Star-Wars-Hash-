const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserModel = require('./models/Model');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true,
}));

// Function to generate a JWT token
const generateToken = (username) => {
    return jwt.sign({ username }, "jwttoken", { expiresIn: '1h' });
};

// Debugging utility
const logRequestDetails = (req) => {
    console.log('Request body:', req.body);
};

app.post("/register", async (req, res) => {
    logRequestDetails(req);
    const { name, username, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.json({ status: false, message: "Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({ name, username, password: hashedPassword });
        
        const token = generateToken(username);
        return res.json({ status: true, token });
    } catch (err) {
        console.error('Error during registration:', err);
        return res.status(500).json({ status: false, message: "Registration failed", error: err.message });
    }
});

app.post("/login", async (req, res) => {
    logRequestDetails(req);
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.json({ status: false, message: "User is not registered" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({ status: false, message: "Wrong password" });
        }

        const token = generateToken(user.username);
        return res.json({ status: true, message: "Login successfully", token });
    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ status: false, message: "Login failed", error: err.message });
    }
});

mongoose.connect("mongodb+srv://haashirnawaz9:Skywalker007@cluster0.sx14wtv.mongodb.net/users")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(3001, () => console.log('Server is working on http://localhost:3001'));
