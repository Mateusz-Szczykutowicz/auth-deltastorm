import { userControllerI } from "../interfaces/user.interface";

const userController: userControllerI = {
    login: (req, res) => {
        const headers = req.headers;
        const params = req.params;
        const query = req.query;
        const body = req.body;
        const cookies = req.cookies;

        res.status(200).json({
            message: "Success",
            status: 200,
            request: { headers, params, query, body, cookies },
        });
    },
};

export default userController;
