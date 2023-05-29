module.exports = (sequelize, DataTypes) => {
  const FAQ = sequelize.define(
    'FAQ',
    {
      type: {
        type: DataTypes.ENUM('general', 'technical'),
        allowNull: false,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'faqs',
      underscored: true,
      timestamps: true,
    }
  );

  return FAQ;
};
