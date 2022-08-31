const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
        } ,
    displayName: DataTypes.STRING,
    // email: {
    //   type:DataTypes.STRING,
    //   unique: true
    // },
      email:DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
  },
  { timestamps: false }
  );

  User.associate = function (models) {
    User.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'blogPosts',
    });
  }

  return User;
};

module.exports = User;