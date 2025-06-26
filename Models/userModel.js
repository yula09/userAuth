const db = require('../Config/db');


//create new user tabke if not exists
const createUserTable = async () => {
    try {
        await db.none(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
               name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(10) DEFAULT 'user',
                is_verified BOOLEAN DEFAULT false,
                verification_token TEXT,
                reset_token TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Users table created!!!');
    } catch (error) {
        console.error('Error creating users table:', error);
    }
};


module.exports = {
    createUserTable
};
