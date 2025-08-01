require("dotenv").config();

const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

const { userDBConnection } = require("./Database.js");

userDBConnection;

const submitInformation = require("./Account.js");

const { User } = require("./Database.js");

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/contactus", submitInformation);

app.get("/AllUsers", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: users
        });
    } catch (error) {
        console.error("Error fetching users:", error);      
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

app.get('/user/:name', async (req, res) => {
  try {
    const name = req.params.name; // ✅ Fix: extract 'name' from params
    const user = await User.findOne({ Name: name }); // Assuming your DB field is 'Name'

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user: user,
    });
  } catch (error) {
    console.error('Error fetching user:', error); // Optional: helpful log
    res.status(500).json({ message: "Error fetching user", error });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
