import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    try {

        console.log(req.headers.authorization);

        const authHeader = req.headers.authorization;

        const token = authHeader.split(" ")[1];

        console.log("TOKEN =>", token);

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        req.user = decoded;

        next();

    } catch (error) {

        console.log(error);

        return res.status(401).json({
            success: false,
            message: error.message,
        });

    }
};