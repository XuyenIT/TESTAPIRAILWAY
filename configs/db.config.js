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
    user: "root",
    password: "",
    db: "dbproduct_railway",
    port: 3307,
    dialect: "mysql",
  }

  };
  