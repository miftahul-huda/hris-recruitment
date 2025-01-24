const { Model, DataTypes } = require('sequelize');

class TestGroupTemplateItemModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            testGroupTemplateTitle: DataTypes.STRING
        }, 
        { sequelize, modelName: 'Recruitment.TestGroupTemplateItem', tableName: 'Recruitment.TestGroupTemplateItem', force: force });
    }
}

module.exports = TestGroupTemplateItemModel;