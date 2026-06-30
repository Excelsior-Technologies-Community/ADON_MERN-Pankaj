import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    try {



        const authHeader = req.headers.authorization;

        const token = authHeader.split(" ")[1];



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