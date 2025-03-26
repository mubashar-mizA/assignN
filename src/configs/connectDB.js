import mongoose from "mongoose"

const ConnectDB = async () => {
    try {
        const DB_OPT = {
            dbName: 'contact'
        }
        mongoose.connect(process.env.DB_URL, DB_OPT)
        console.log()
    } catch (error) {
        console.log('Error in connecting to db', error)
    }
}

export default ConnectDB