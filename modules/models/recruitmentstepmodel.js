const { Model, DataTypes } = require('sequelize');

class RecruitmentStepModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            jobOpeningNo: DataTypes.STRING,
            recruitmentStepTitle: DataTypes.STRING,
            stepType: DataTypes.STRING, //Interview, Test, Administrative Submission
            poc: DataTypes.STRING, //Person in Charge for the step
            interviewAssessmentGroup: DataTypes.STRING,
            testGroup: DataTypes.STRING,
            administrativeSubmissionGroup: DataTypes.STRING,
            createdBy: DataTypes.STRING 
        }, 
        { sequelize, modelName: 'Recruitment.RecruitmentStep', tableName: 'Recruitment.RecruitmentStep', force: force });
    }
}

module.exports = RecruitmentStepModel;