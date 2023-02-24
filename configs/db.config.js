module.exports = {
  development: {
    host: "localhost",
    user: "root",
    password: "",
    db: "dbproduct_railway",
    port: 3307,
    dialect: "mysql",
  },
  production: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB,
    port: process.env.PORT,
    dialect: "mysql",
  }

  };
  