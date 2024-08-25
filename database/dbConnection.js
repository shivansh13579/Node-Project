const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGOOSE_URL);
    if (connection) {
      console.log(
        `Database connected successfully /n --Database: ${connection.name} /n --Host: ${connection.host}`
      );
    }
  } catch (error) {
    console.log(`Database connected error: ${error.message}`);
  }
};

module.exports = dbConnection;
