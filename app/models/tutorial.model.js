// const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", { //syntax for creating new MODEL (database table)
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Tutorial;
};

//new db table that has title, description, published values
//we do not need any require() or imports() as we are exporting this framework into our ./models/index.js