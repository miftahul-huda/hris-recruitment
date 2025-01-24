const { Model, DataTypes } = require('sequelize');

class JobOpeningModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            recruitmentNo: DataTypes.STRING,
            jobOpeningNo: DataType.STRING,
            title: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            companyDescription: DataTypes.TEXT,
            openPositionDescription: DataTypes.TEXT,
            openPositionRequirement: DataTypes.TEXT,
            benefit: DataTypes.TEXT,
            contactInfo: DataTypes.TEXT,
            createdBy: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN
        }, 
        { sequelize, modelName: 'Recruitment.JobOpening', tableName: 'Recruitment.JobOpening', force: force });
    }
}

module.exports = JobOpeningModel;