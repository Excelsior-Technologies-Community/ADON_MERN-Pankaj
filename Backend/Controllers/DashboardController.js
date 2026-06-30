import db from "../Config/db.js";


export const getDashBoard = async (req, res) => {
    try {
        const [[users]] = await db.promise().query("SELECT COUNT(*) AS totalUsers FROM users");

        const [[projects]] = await db.promise().query("SELECT COUNT(*) AS totalProjects FROM projects");

        const [[services]] = await db.promise().query("SELECT COUNT(*) AS totalServices FROM services")

        const [recentMessages] = await db.promise().query(`
    SELECT id, name, subject, is_read
    FROM messages
    ORDER BY createdAt DESC
    LIMIT 5
`);
        // Recent Projects
        const [recentProjects] = await db.promise().query(`
      SELECT
      id,
      title,
      category,
      client,
      heroImage,
      createdAt
      FROM projects
      ORDER BY createdAt DESC
      LIMIT 5
    `);
        res.status(200).json({
            success: true,

            stats: {
                totalUsers: users.totalUsers,
                totalProjects: projects.totalProjects,
                totalServices: services.totalServices,
                // totalMessages: messages.totalMessages,
            },

            recentProjects, recentMessages
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}