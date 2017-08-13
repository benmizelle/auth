const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // Checks for an existing user name to prevent duplicates
    User.findOne({ email: email}, function(err, existingUser) {
        if (err) { return bext(err); }

        // If user exists, return error 422 (un-processable entity)
        if (existingUser) {
            return res.status(422).send({ error: 'Email already in use' });
        }

        // If a user with the provided email does NOT exist, create and save new user
        const user = new User({
           email: email,
           password: password
        });

        user.save(function(err) {
            if (err) { return next(err); }

            // Respond to request indicating the user was successfully created
            res.json({ success: true });
        });

    });
}