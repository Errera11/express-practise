const userService = require('./userService');
const {debugLog} = require("express-fileupload/lib/utilities");


const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e.message);
    }
}

const getOne = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) {
            res.status(400).json('Id is undefined');
        }
        const user = await userService.getOne(id);
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e.message);
    }
}

const postUser = async (req, res) => {
    try {
        const {name} = req.body;
        const photo = req.files.photo;
        console.log(req.files);
        const user = await userService.postUser({name, photo});
        res.status(200).json(user);
    } catch(e) {
        console.log(req.files);
        res.status(500).json(e.message);
    }
}

const putUser = async (req, res) => {
    try {
        const updatedUser = await userService.putUser(req.body);
        res.json(updatedUser);
    } catch (e) {
        res.status(500).json(e.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) {
            res.status(400).json('Id is undefined');
        }
        const deletedUser = await userService.deleteUser(id);
        res.status(200).json(deletedUser);
    } catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports = {getAll, getOne, postUser, putUser, deleteUser};