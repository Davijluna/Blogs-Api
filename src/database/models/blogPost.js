const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
   id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
   },
   title:DataTypes.STRING,
   content:DataTypes.STRING,
   userId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Users',
      key:'id'
      },
   },
   published:{
    type:DataTypes.DATE,
  },
  updated:{
    type:DataTypes.DATE,
  },
  },
  {timestemps:false}
  );

  BlogPost.associate = function(models){
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }

  return BlogPost;
};

module.exports = BlogPost;