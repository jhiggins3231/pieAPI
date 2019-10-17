module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('workout', {
        nameOfWorkout: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        result: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Workout;
}


///PAGE IS WORKING CORRECTLY.
