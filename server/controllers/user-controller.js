const { User } = require('../models');

const createUser = async({ body }, res) => {
    const user = await User.create(body);

    if (!user) {
        return res.status(400).json({ message: 'Something went wrong.  A new user was not created.'})
    }

    const token = signToken(user);
    res.json({ token, user });
}

const getUser = async (req, res) => {
    const { user, username, id } = req.params;
    const searchedUser = await User.findOne({
        $or: [
            { _id: user ? user._id : id}, 
            { username: username }
        ],
    })

    !searchedUser ? res.status(400).json({ message: 'Cannot find the requested user.'})
        : res.json(searchedUser)
};

const login = async ({ body }, res) => {
    console.log(body);
    const user = await User.findOne({ 
        $or: [{ username: body.username }, { email: body.email }]
    });

    if (!user) {
        return res.status(400).json({ message: "The user does not exist in the database." });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
        return res.status(400).json({ message: "The password for the requested account is incorrect."})
    }

    const token = signToken(user);
    res.json({ token, user })
}

module.exports = { 
    getUser, 
    login,
    createUser
 };