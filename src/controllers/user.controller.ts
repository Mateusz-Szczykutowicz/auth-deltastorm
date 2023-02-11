import { userControllerI } from "../interfaces/user.interface";

const userController: userControllerI = {
    login: (req, res) => {
        res.status(200).json({ message: "Success", status: 200 });
    },
};

export default userController;
