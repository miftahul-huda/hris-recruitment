const { Model, DataTypes } = require('sequelize');

class RecruitmentStepTemplateItemModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            recruitmentStepTemplateNo: DataTypes.STRING,
            recruitmentStepTemplateItemTitle: DataTypes.STRING,
            stepType: DataTypes.STRING, //Interview, Test, Administrative Submission
            interviewAssessmentGroupTemplateID: DataTypes.STRING,
            testGroupTemplateID: DataTypes.STRING,
            administrativeSubmissionGroupTemplateID: DataTypes.STRING,
            createdBy: DataTypes.STRING 
        }, 
        { sequelize, modelName: 'Recruitment.RecruitmentStepTemplateItem', tableName: 'Recruitment.RecruitmentStepTemplateItem', force: force });
    }
}

module.exports = RecruitmentStepTemplateItemModel;