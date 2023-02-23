const { DataTypes } = require("sequelize");

const ProductModel = (sequelize) => {
  return sequelize.define("Product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 30],
          msg: "Chieu dai tu 5 den 30 ky tu",
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        max: {
          args: 2000,
          msg: "Max Price is 2000",
        },
        min: {
          args: 10,
          msg: "Min Price is 10",
        },
      },
    },
    cate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: "Chieu dai tu 3 den 30 ky tu",
        },
      },
    },
  },
  {
    timestamps: true,
    tableName: "products",
  }
  );
};
module.exports = ProductModel