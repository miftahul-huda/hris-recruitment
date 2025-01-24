const { Model, DataTypes } = require('sequelize');

class InterviewAssessmentGroupModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            jobOpeningNo: DataType.STRING,
            interviewAssessmentNo: DataType.STRING,
            interviewAssessmentGroupTitle: DataTypes.STRING
        }, 
        { sequelize, modelName: 'Recruitment.InterviewAssessmentGroup', tableName: 'Recruitment.InterviewAssessmentGroup', force: force });
    }
}

module.exports = InterviewAssessmentGroupModel;