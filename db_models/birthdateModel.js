const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
class Birthdate extends Model { };
Birthdate.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        mob: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "Birthdate"
    }
);

module.exports = Birthdate;