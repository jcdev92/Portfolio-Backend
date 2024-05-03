const database = require("../../utils/database");
const { DataTypes } = require("sequelize");

const Contact = database.define(
  "Contact",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "contacts", // Nombre de la tabla en la base de datos
    timestamps: true, // Para incluir createdAt y updatedAt automáticamente
  }
);

module.exports = Contact;
