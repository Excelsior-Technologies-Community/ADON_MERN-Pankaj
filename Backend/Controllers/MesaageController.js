import db from "../Config/db.js";

export const createMessage = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // validation 

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "PLease fill all required fields "
            })
        }

        await db.promise().query(`INSERT INTO messages (name,email,phone,subject,message) VALUES (? ,? ,? ,?,?)`, [name, email, phone, subject, message]);

        res.status(201).json({
            success: true,
            message: "MEssage sent succesfully"
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const getMessage = async (req, res) => {
    try {
        const [messages] = await db.promise().query("SELECT * FROM messages ORDER BY createdAt DESC ")

        res.status(200).json({
            success: true,
            count: messages.length,
            data: messages

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


export const getMessageBYId = async (req, res) => {
    try {
        const { id } = req.params;
        const [message] = await db.promise().query("SELECT * FROM messages WHERE id = ?  ", [id]);

        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found",
            });
        }

        res.status(200).json({
            success: true,
            message
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;

        await db.promise().query("DELETE FROM messages WHERE id = ?", [id]);

        res.status(201).json({
            success: true,
            message: " message succefully deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const marksAsRead = async (req, res) => {
    try {
        const { id } = req.params;

        await db.promise().query("UPDATE  messages SET is_read=true WHERE id = ? ", [id]);

        res.status(200).json({
            success: true,
            message: "Message mark as read"
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}