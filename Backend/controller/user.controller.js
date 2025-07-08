import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';

const register = async (req, res) => {
    try {
        let { firstName, lastName, email, password, mobile } = req.body;
        password = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username: firstName + lastName,
            email,
            password,
            mobile,
        });

        const userData = await newUser.save();
        console.log(userData);
        res.status(200).json({
            data: userData,
            message: "User register successfully",
            status: true,
        });
    } catch (err) {
        res
            .status(500)
            .json({ data: null, message: err.message, status: false });
    }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email });
        console.log(userData);

        if (!userData) {
            return res.status(404).json({
                data: null,
                message: "User not found",
                status: false
            })
        }

        const matchPassword = await bcrypt.compare(password, userData.password);
        console.log(matchPassword);

        res.status(200).json({
            data: userData,
            message: "User login successfully!",
            status: true
        })
    }
    catch (err) {
        res.status(500).json({ data: null, message: err.message, status: false });
    }
}


const getAllUser = async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).json({
            data: userData,
            message: "User data get successfully",
            status: true,
        });
    } catch (err) {
        res
            .status(500)
            .json({ data: null, message: err.message, status: false });
    }
};

const userDelete = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        const userData = await User.findById({ _id: Object(id) });
        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ data: null, message: "User does't exists", status: false });
        }
        const userDel = await User.deleteOne({ _id: Object(id) });
        res.status(200).json({
            data: userDel,
            message: "User deleted successfully",
            status: true,
        });
    } catch (err) {
        res
            .status(500)
            .json({ data: null, message: err.message, status: false });
    }
};

export { register, userLogin, getAllUser, userDelete };