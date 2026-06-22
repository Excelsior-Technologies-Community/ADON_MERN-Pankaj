import bcrypt from "bcryptjs";
import db from "../Config/db.js";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const [user] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);

        if (user.length > 0) {
            return res.status(400).json({
                success: false,
                message: "email alredy exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.promise().query(
            `INSERT INTO users (name ,email,password) VALUES (? ,? ,?)`, [name, email, hashedPassword]
        );

        res.status(201).json({
            success: true,
            message: "User registerd succefully "
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    };
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [user] = await db.promise().query("SELECT * FROM users WHERE email = ? ", [email]);

        if (!user.length) {
            return res.status(404).json({
                success: false,
                message: "Usser not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user[0].password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                messagfe: "Invlid credentials",
            });
        }

        const token = jwt.sign(
            {
                id: user[0].id,
                role: user[0].role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user[0].id,
                name: user[0].name,
                email: user[0].email,
                role: user[0].role,
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })

    }
}