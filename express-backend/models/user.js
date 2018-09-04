module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        password: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ["username", "email"]
            }
        ]
    });

    return Users;
}