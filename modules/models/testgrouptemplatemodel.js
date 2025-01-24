const { Model, DataTypes } = require('sequelize');

class TestGroupTemplateModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            testGroupTemplateTitle: DataTypes.STRING
        }, 
        { sequelize, modelName: 'Recruitment.TestGroupTemplate', tableName: 'Recruitment.TestGroupTemplate', force: force });
    }
}

module.exports = TestGroupTemplateModel;