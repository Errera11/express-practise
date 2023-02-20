const User = require("./User");
const fileService = require('./fileService');

const getAll = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (e) {
        return e.message;
    }
}

const getOne = async (id) => {
    try {
        if(!id) {
            return 'Id is undefined';
        }
        const user = await User.findById(id);
        return user;
    } catch (e) {
        return e.message;
    }
}

const postUser = async (user) => {
    try {
        const fileName = fileService.saveFile(user.photo);
        console.log(user);
        const newUser = await User.create({...user, photo: fileName});
        return newUser;
    } catch(e) {
        return e.message;
    }
}

const putUser = async (user) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true});
        return updatedUser;
    } catch (e) {
        return e.message;
    }
}

const deleteUser = async (id) => {
    try {
        if(!id) {
            return 'Id is undefined';
        }
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    } catch (e) {
        return e.message;
    }
}

module.exports = {getAll, getOne, postUser, putUser, deleteUser};