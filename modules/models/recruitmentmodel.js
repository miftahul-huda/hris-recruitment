const { Model, DataTypes } = require('sequelize');

class RecruitmentModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            recruitmentNo: DataTypes.STRING,
            title: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            description: DataTypes.STRING,
            createdBy: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN
        }, 
        { sequelize, modelName: 'Recruitment.Recruitment', tableName: 'Recruitment.Recruitment', force: force });
    }
}

module.exports = RecruitmentModel;