const { Model, DataTypes } = require('sequelize');

class InterviewAssessmentGroupTemplateItemModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            interviewAssessmentGroupTemplateID: DataTypes.INTEGER,
            assessmentDescription: DataTypes.TEXT,
            assessmentValues: DataTypes.TEXT
        }, 
        { sequelize, modelName: 'Recruitment.InterviewAssessmentGroupTemplateItem', tableName: 'Recruitment.InterviewAssessmentGroupTemplateItem', force: force });
    }
}

module.exports = InterviewAssessmentGroupTemplateItemModel;