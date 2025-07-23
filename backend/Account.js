require("dotenv").config();
const {User} = require("./Database.js");
const submitInformation = async (req, res) => {
    try {
        const { name, email, phone, collegeName, collegeAddress, branch, passedOutYear } = req.body;
        // Create a new user document
        const newUser = new User({
            Name: name,
            Email: email,
            Phone: phone,
            collegeName: collegeName,
            collegeAddress: collegeAddress,
            Branch: branch,
            passedOutYear: passedOutYear 
        });
        // Save the user to the database
        await newUser.save();
        res.status(201).json(
            {
                success : true,
                message : `Thank you ${newUser.Name} for contacting us!`,
                data : {
                    Name: newUser.name,
                    Email: newUser.email,
                    Phone: newUser.phone,
                    collegeName: newUser.collegeName,
                    collegeAddress: newUser.collegeAddress,
                    Branch: newUser.branch,
                    passedOutYear: newUser.passedOutYear
                }
            }
        );
    } catch (error) {
        console.error("Error submitting information:", error);
        res.status(500).json(
            {
                success: false,
                message: "Internal server error"
            }
        );
    }
}

module.exports = submitInformation;