const { User } = require('../models');

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

module.exports = { getUser };