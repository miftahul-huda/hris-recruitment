const { Model, DataTypes } = require('sequelize');

class InterviewAssessmentGroupTemplateModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            interviewAssessmentGroupTemplateTitle: DataTypes.STRING
        }, 
        { sequelize, modelName: 'Recruitment.InterviewAssessmentGroupTemplate', tableName: 'Recruitment.InterviewAssessmentGroupTemplate', force: force });
    }
}

module.exports = InterviewAssessmentGroupTemplateModel;