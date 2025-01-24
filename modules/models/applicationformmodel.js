const { Model, DataTypes } = require('sequelize');

class ApplicationFormModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            jobOpeningNo: DataTypes.STRING,
            generatedUrl: DataTypes.TEXT,
            formJson: DataTypes.TEXT,
            createdBy: DataTypes.STRING 
        }, 
        { sequelize, modelName: 'Recruitment.ApplicationForm', tableName: 'Recruitment.ApplicationForm', force: force });
    }
}

module.exports = ApplicationFormModel;