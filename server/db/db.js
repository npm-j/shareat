const path = require('path');
const Sequelize = require('sequelize');
const env = 'development';
const config = require('../../sqlConfig.js')[env];
const dummy = require('./dummy');

const sequelize = new Sequelize(config.database, config.user, config.password, config.connection);

// console.log('config obj = ', config, 'user=', config.user, 'password=', config.password);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully');
  })
  .catch(() => {
    console.log('Unable to connect to the database');
  });


const User = sequelize.define('User', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        msg: 'Must be a valid email address',
      },
    },
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
  },
  phoneNumber: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  userPic: {
    type: Sequelize.STRING,
    validate: {
      isUrl: {
        msg: 'Must be a valid URL',
      },
    },
  },
  avgRating: {
    type: Sequelize.DECIMAL(5, 4),
  },
});

const Event = sequelize.define('Event', {
  eventName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  eventPic: {
    type: Sequelize.STRING,
    validate: {
      isUrl: {
        msg: 'Must be a valid URL',
      },
    },
  },
  description: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL(6, 2),
  },
  maxGuests: {
    type: Sequelize.INTEGER,
  },
  attending: {
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.DECIMAL(10, 7),
    allowNull: false,
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 7),
    allowNull: false,
  },
  startDatetime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endDatetime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

const Tag = sequelize.define('Tag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  tagName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  restriction: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

const Review = sequelize.define('Review', {
  content: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
      min: 1,
    },
  },
});

const UsersEvent = sequelize.define('UsersEvent', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  eventId: {
    type: Sequelize.INTEGER,
  },
  role: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['guest', 'host']],
    },
  },
  wasReviewed: {
    type: Sequelize.BOOLEAN,
  },
});

const Message = sequelize.define('Message', {
  content: {
    type: Sequelize.STRING,
  },
  userName: {
    type: Sequelize.STRING,
  },
});

/** ********MANY TO MANY RELATIONSHIPS**********/
// join tables: events_dishes, users_tags, users_events, events_tags

User.belongsToMany(Event, { through: 'UsersEvent', foreignKey: 'userId' });
Event.belongsToMany(User, { through: 'UsersEvent', foreignKey: 'eventId' });

User.belongsToMany(Tag, { through: 'UsersTags', foreignKey: 'userId' });
Tag.belongsToMany(User, { through: 'UsersTags', foreignKey: 'tagId' });

Event.belongsToMany(Tag, { through: 'TagsEvents', foreignKey: 'eventId' });
Tag.belongsToMany(Event, { through: 'TagsEvents', foreignKey: 'tagId' });

/** ********ONE TO MANY RELATIONSHIPS**********/
// one in many: (1:many) users:dishes, events:reviews, users:reviews (two times)

Review.belongsTo(Event, { as: 'event', foreignKey: 'eventId' });
Event.hasMany(Review, { foreignKey: 'eventId' });

Review.belongsTo(User, { as: 'host', foreignKey: 'hostId' });
User.hasMany(Review, { foreignKey: 'hostId' });

Review.belongsTo(User, { as: 'reviewer', foreignKey: 'reviewerId' });
User.hasMany(Review, { foreignKey: 'reviewerId' });

Message.belongsTo(Event, { as: 'event', foreignKey: 'eventId' });
Event.hasMany(Message, { foreignKey: 'eventId' });

User.hasMany(Message, { foreignKey: 'userId' });
Message.belongsTo(User, { as: 'user', foreignKey: 'userId' });


sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Created tables from schema');
    // dummy.init();
  });

exports.User = User;
exports.Event = Event;
exports.Tag = Tag;
exports.Review = Review;
exports.UsersEvent = UsersEvent;
exports.sequelize = Sequelize;
exports.Message = Message;
