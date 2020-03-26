const User = require('../models/model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.emailId && !req.body.password) {
        return res.status(400).send({
            message: "User Email-id and Password can not be empty"
        });
    }

    // Create a User
    const user = new User({
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password,
        role: req.body.role
    });

    // Save User in the database
    user.save()
        .then(data => {
            res.send({
                status: "success",
                message: "User saved successfully"
            });
        }).catch(err => {
            res.status(500).send({
                status: "error",
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {

    User.find()
        .then(users => {
            res.send({
                status: "success",
                data: users
            });
        }).catch(err => {
            res.status(500).send({
                status: "error",
                message: err.message || "Some error occurred while retrieving users."
            });
        });

};

// Find a single user with a userId
exports.findOne = (req, res) => {

    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({
                status: "success",
                data: user
            });
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    status: "error",
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                status: "error",
                message: "Error retrieving user with id " + req.params.userId
            });
        });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        role: req.body.role
    }, { new: false })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    status: "error",
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({
                status: "success",
                message: "User updated successfully"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    status: "error",
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                status: "error",
                message: "Error updating user with id " + req.params.userId
            });
        });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {

    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    status: "error",
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({
                status: "success",
                message: "User deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    status: "error",
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                status: "error",
                message: "Could not delete user with id " + req.params.userId
            });
        });

};