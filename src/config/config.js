require("dotenv").config();

// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     dialectOptions: {
//       prependSearchPath: true,
//     },
//   },
// };

module.exports = {
  development: {
    username: "postgres.ziedcmpqgaesrhgxeqpu",
    password: "rc3MeU29wE&6e^%j",
    database: "postgres",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    dialect: "postgres",
    dialectOptions: {
      prependSearchPath: true,
    },
  },
};
