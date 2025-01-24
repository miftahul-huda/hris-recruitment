const { Model, DataTypes } = require('sequelize');

class RecruitmentStepModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            recruitmentStepTemplateNo: DataTypes.STRING,
            recruitmentStepTemplateTitle: DataTypes.STRING,
            createdBy: DataTypes.STRING 
        }, 
        { sequelize, modelName: 'Recruitment.RecruitmentStepTemplate', tableName: 'Recruitment.RecruitmentStepTemplate', force: force });
    }
}

module.exports = RecruitmentStepModel;