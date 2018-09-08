module.exports = function(sequelize, DataTypes) {
    const Runs = sequelize.define("Run", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        distance: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    return Runs;
}