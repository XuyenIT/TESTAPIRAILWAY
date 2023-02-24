const {Sequelize} = require("sequelize");
const env = process.env.NODE_ENV || "development";
console.log('env', env)
const config = require("../configs/db.config")[env];
const ProductModel = require("./product.model");

console.log("config",config)
// process.env.NODE_ENV


const sequelize = new Sequelize(config.db,config.user,config.password,{
    host:config.host,
    dialect:config.dialect,
    port:config.port,
});
const Product = ProductModel(sequelize);
module.exports = {
    Product,
    sequelize
}
