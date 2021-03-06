const User = require('../models/userModel.js');
const Event = require('../models/eventModel.js');
const Review = require('../models/reviewModel.js');
const Tag = require('../models/tagModel.js');
const Message = require('../models/messageModel.js');

const Dummy = module.exports;

Dummy.init = function () {
  const allTagPromises = [
    Tag.createTag({ id: 1, tagName: 'kosher', restriction: true }),
    Tag.createTag({ id: 2, tagName: 'halal', restriction: true }),
    Tag.createTag({ id: 3, tagName: 'vegan', restriction: true }),
    Tag.createTag({ id: 4, tagName: 'vegetarian', restriction: true }),
    Tag.createTag({ id: 5, tagName: 'no fish or shellfish', restriction: true }),
    Tag.createTag({ id: 6, tagName: 'gluten-free', restriction: true }),
    Tag.createTag({ id: 7, tagName: 'soy- and nut-free', restriction: true }),
    Tag.createTag({ id: 8, tagName: 'dairy-free', restriction: true }),
    Tag.createTag({ id: 9, tagName: 'egg-free', restriction: true }),
    Tag.createTag({ id: 10, tagName: 'Mexican', restriction: false }),
    Tag.createTag({ id: 11, tagName: 'Italian', restriction: false }),
    Tag.createTag({ id: 12, tagName: 'French', restriction: false }),
    Tag.createTag({ id: 13, tagName: 'Spanish', restriction: false }),
    Tag.createTag({ id: 14, tagName: 'Central American', restriction: false }),
    Tag.createTag({ id: 15, tagName: 'Brazilian', restriction: false }),
    Tag.createTag({ id: 16, tagName: 'Chinese', restriction: false }),
    Tag.createTag({ id: 17, tagName: 'Korean', restriction: false }),
    Tag.createTag({ id: 18, tagName: 'Japanese', restriction: false }),
    Tag.createTag({ id: 19, tagName: 'Thai', restriction: false }),
    Tag.createTag({ id: 20, tagName: 'Vietnamese', restriction: false }),
    Tag.createTag({ id: 21, tagName: 'Filipino', restriction: false }),
    Tag.createTag({ id: 22, tagName: 'Indian', restriction: false }),
    Tag.createTag({ id: 23, tagName: 'Russian', restriction: false }),
    Tag.createTag({ id: 24, tagName: 'Mediterranean', restriction: false }),
    Tag.createTag({ id: 25, tagName: 'Ethiopian', restriction: false }),
    Tag.createTag({ id: 26, tagName: 'Carribbean', restriction: false }),
    Tag.createTag({ id: 27, tagName: 'Cajun', restriction: false }),
    Tag.createTag({ id: 28, tagName: 'Soul Food', restriction: false }),
    Tag.createTag({ id: 29, tagName: 'American Diner Food', restriction: false }),
    Tag.createTag({ id: 30, tagName: 'Barbecue', restriction: false }),
    Tag.createTag({ id: 31, tagName: 'Seafood', restriction: false }),
    Tag.createTag({ id: 32, tagName: 'Southern Food (U.S.)', restriction: false }),
    Tag.createTag({ id: 33, tagName: 'Other African', restriction: false }),
    Tag.createTag({ id: 34, tagName: 'Other European', restriction: false }),
    Tag.createTag({ id: 35, tagName: 'Other Asian', restriction: false }),
    Tag.createTag({ id: 36, tagName: 'Other South American', restriction: false }),
    Tag.createTag({ id: 37, tagName: 'Other North American', restriction: false }),
  ];

  return Promise.all(allTagPromises)
    .then(() => {
      const allUserPromises = [
        User.createUser({
          id: 1,
          userName: 'Joe',
          password: 'test',
          firstName: 'Joseph',
          lastName: 'italiano',
          email: 'joe@gmail.com',
          address: 'Roma',
          phoneNumber: '4159305687',
          userPic: 'https://avatars3.githubusercontent.com/u/12257623?v=3&s=460',
        }, [4]),
        User.createUser({
          id: 2,
          userName: 'Nizz',
          password: 'test2',
          firstName: 'Nizar',
          lastName: 'france',
          email: 'nizz@gmail.com',
          address: 'Paris',
          phoneNumber: '4159345687',
          userPic: 'https://avatars0.githubusercontent.com/u/17601607?v=3&s=460',
        }),
        User.createUser({
          id: 3,
          userName: 'Phil',
          password: 'test3',
          firstName: 'Phil',
          lastName: 'usa',
          email: 'phil@gmail.com',
          address: 'Santa',
          phoneNumber: '3259345687',
          userPic: 'https://avatars1.githubusercontent.com/u/17244224?v=3&s=460',
        }, [8]),
        User.createUser({
          id: 4,
          userName: 'Mike',
          password: 'test4',
          firstName: 'Mike',
          lastName: 'Korea',
          email: 'mike@gmail.com',
          address: 'Seoul',
          phoneNumber: '3259342787',
          userPic: 'https://avatars0.githubusercontent.com/u/14685419?v=3&s=400',
        }),
      ];

      return Promise.all(allUserPromises)
        .then(() => {
          const allEventPromises = [
            Event.createEvent({
              id: 1,
              eventName: 'Boeuf Bourguignon on fire',
              eventPic: 'http://icu.linter.fr/750/10002051/1603680841/boeuf-bourguignon.jpg',
              price: 'pay what you want',
              maxGuests: 4,
              description: 'A startling display of fire!',
              address: '604 Arizona avenue, Santa Monica',
              latitude: 34.016484,
              longitude: -118.496216,
              startDatetime: '2016-08-23T18:00:00',
              endDatetime: '2016-08-237T20:00:00',
              userId: 1,
              tags: [12],
            }),
            Event.createEvent({
              id: 2,
              eventName: 'Tacos Party',
              eventPic: 'http://mediad.publicbroadcasting.net/p/kwmu/files/201508/tacos.jpg',
              price: 5.00,
              maxGuests: 15,
              description: 'A party for tacos, by tacos',
              address: '418 Wilshire Blvd, Santa Monica, CA 90401',
              latitude: 34.019855,
              longitude: -118.497611,
              startDatetime: '2016-09-27T18:00:00',
              endDatetime: '2016-09-27T19:00:00',
              userId: 2,
              tags: [10],
            }),
            Event.createEvent({
              id: 3,
              eventName: 'Carne Asada Cookout',
              eventPic: 'http://tipsforbbq.com/Include/Images/Recipes/Carne-Asada/AndrewLLoydSriracha.1024.jpg',
              price: 0.00,
              maxGuests: 20,
              description: 'The cookout to end all cookouts',
              address: '1349 South Redondo Blvd, Los Angeles, CA 90019',
              latitude: 34.0487404,
              longitude: -118.3515677,
              startDatetime: '2016-08-19T18:00:00',
              endDatetime: '2016-08-19T20:00:00',
              userId: 2,
              tags: [10],
            }),
            Event.createEvent({
              id: 4,
              eventName: 'Vegetarian Feast',
              eventPic: 'http://clv.h-cdn.co/assets/16/02/1452527843-vegetarian-pad-tha-2-2-600x900.jpg',
              price: 7.00,
              maxGuests: 10,
              description: 'The best vegetarian food in southern California',
              address: '1289 South Redondo Blvd, Los Angeles, CA 90019',
              latitude: 34.0505127,
              longitude: -118.3491435,
              startDatetime: '2017-08-15T18:00:00',
              endDatetime: '2017-08-15T20:00:00',
              userId: 2,
              tags: [1, 5, 19],
            }),
            Event.createEvent({
              id: 5,
              eventName: 'Hot Dog Async Party (...WUT?)',
              eventPic: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2011/05/hot-dogs-chili11-480.jpg',
              price: 0.00,
              maxGuests: 20,
              description: 'PWYW for some gourmet hot dogs in Santa Monica!',
              address: '1314 10th Street Santa Monica, CA 90401',
              latitude: 34.022006,
              longitude: -118.490653,
              startDatetime: '2017-08-18T18:00:00',
              endDatetime: '2017-08-18T20:00:00',
              userId: 1,
              tags: [29],
            }),
            Event.createEvent({
              id: 6,
              eventName: 'Hot Dog Eating (No Contest)',
              eventPic: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2011/05/hot-dogs-chili11-480.jpg',
              price: 0.00,
              maxGuests: 20,
              description: 'PWYW for some gourmet hot dogs!',
              address: '1299 South Sycamore Avenue Los Angeles, CA 90019',
              latitude: 34.049940,
              longitude: -118.347645,
              startDatetime: '2017-08-18T18:00:00',
              endDatetime: '2017-08-18T20:00:00',
              userId: 1,
              tags: [29],
            }),
            Event.createEvent({
              id: 7,
              eventName: 'Biweekly Yum-a-thon',
              eventPic: 'http://clv.h-cdn.co/assets/16/02/1452527843-vegetarian-pad-tha-2-2-600x900.jpg',
              price: 7.00,
              maxGuests: 10,
              description: 'Biweekly Yum-a-thon',
              address: '1345 South Redondo Boulevard Los Angeles, CA 90019',
              latitude: 34.048887,
              longitude: -118.349243,
              startDatetime: '2016-08-13T18:00:00',
              endDatetime: '2016-08-13T20:00:00',
              userId: 2,
              tags: [4, 8, 19],
            }),
            Event.createEvent({
              id: 8,
              eventName: 'Vegan Celebration',
              eventPic: 'http://www.vegancookingwithlove.com/wp-content/uploads/2012/05/vegan_food.jpg',
              price: 12.00,
              maxGuests: 20,
              description: 'A celebration of vegan cooking in LA',
              address: '225 Lincoln Blvd, Venice, CA 90291',
              latitude: 34.0000344,
              longitude: -118.4685388,
              startDatetime: '2017-08-26T07:00:00',
              endDatetime: '2017-08-26T09:00:00',
              userId: 3,
              tags: [1, 3, 5, 8, 9],
            }),
            Event.createEvent({
              id: 9,
              eventName: 'Cajun Cookout',
              eventPic: 'http://www.decaturish.com/wp-content/uploads/2015/11/Louisiana-Bistreaux.jpg',
              price: 7.00,
              maxGuests: 10,
              description: 'Authentic Cajun Cookout with special guest chef Remy LaFlamme',
              address: '612 S Flower St, Los Angeles, CA 90017',
              latitude: 34.0478202,
              longitude: -118.2573135,
              startDatetime: '2016-08-23T18:00:00',
              endDatetime: '2016-08-23T20:00:00',
              userId: 4,
              tags: [27, 32],
            }),
            Event.createEvent({
              id: 10,
              eventName: 'Southern Hospitality',
              eventPic: 'http://media.tulsafood.com.s3.amazonaws.com/wp-content/uploads/2012/12/IMG_4909.jpg',
              price: 9.00,
              maxGuests: 5,
              description: 'Come on down for some good southern comfort food',
              address: '950-11 Tsuchiyamachō Kitatsuchiyama Kōka-shi, Shiga-ken 528-0211 Japan',
              latitude: 34.9356693,
              longitude: 136.2879953,
              startDatetime: '2017-10-14T18:00:00',
              endDatetime: '2017-10-14T20:00:00',
              userId: 1,
              tags: [32],
            }),
            Event.createEvent({
              id: 11,
              eventName: 'Peruvian To-go',
              eventPic: 'http://www.southamerica.cl/Peru/Food/lomo-saltado-peru.jpg',
              price: 15.00,
              maxGuests: 10,
              description: 'Classic dishes from the Southern Hemisphere',
              address: '1547 Council St Los Angeles, CA 90026',
              latitude: 34.0658451,
              longitude: -118.2624812,
              startDatetime: '2016-08-10T18:00:00',
              endDatetime: '2016-08-10T20:00:00',
              userId: 4,
              tags: [36],
            }),
            Event.createEvent({
              id: 12,
              eventName: 'Rosalind\'s Special Event',
              eventPic: 'https://s3-media1.fl.yelpcdn.com/bphoto/iCgWue1-hyxbrF0WJuKN-A/348s.jpg',
              price: 9.00,
              maxGuests: 35,
              description: 'Great Ethiopian food at the right price',
              address: '1044 S Fairfax Ave, Los Angeles, CA 90019',
              latitude: 34.0569019,
              longitude: -118.3664327,
              startDatetime: '2017-08-17T18:00:00',
              endDatetime: '2017-08-17T20:00:00',
              userId: 1,
              tags: [25],
            }),
            Event.createEvent({
              id: 13,
              eventName: 'Vegetarian/Mediterranean Bonanza',
              eventPic: 'https://tableagent.s3.amazonaws.com/media/crumbs/xl/115_65.jpg',
              price: 17.00,
              maxGuests: 5,
              description: 'Mediterranean food, but vegetarian',
              address: '1446 S Sherbourne Dr Los Angeles, CA 90035',
              latitude: 34.0525106,
              longitude: -118.3803333,
              startDatetime: '2017-08-07T18:00:00',
              endDatetime: '2017-08-07T20:00:00',
              userId: 1,
              tags: [1, 2, 4, 5, 24],
            }),
            Event.createEvent({
              id: 14,
              eventName: 'Southern Hospitality',
              eventPic: 'http://media.tulsafood.com.s3.amazonaws.com/wp-content/uploads/2012/12/IMG_4909.jpg',
              price: 12.00,
              maxGuests: 5,
              description: 'Come on down for some good southern comfort food',
              address: '4610 Oakwood Ave Los Angeles, CA 90004',
              latitude: 34.077494,
              longitude: -118.307300,
              startDatetime: '2017-10-14T18:00:00',
              endDatetime: '2017-10-14T20:00:00',
              userId: 3,
              tags: [32],
            }),
            Event.createEvent({
              id: 15,
              eventName: 'Okonomi-yes-please!',
              eventPic: 'https://i1.wp.com/www.thekua.com/rant/wp-content/uploads/2006/03/okonomiyaki.jpg',
              price: 15.00,
              maxGuests: 20,
              description: 'Like okonomiyaki? Let\'s cook',
              address: '2045 Beloit Avenue Los Angeles, CA 90025',
              latitude: 34.040395,
              longitude: -118.441889,
              startDatetime: '2017-10-14T18:00:00',
              endDatetime: '2017-10-14T20:00:00',
              userId: 1,
              tags: [18],
            }),
            Event.createEvent({
              id: 16,
              eventName: 'Another vegetarian joint in Hollywood',
              eventPic: 'http://www.indochinapioneer.com/blog/wp-content/uploads/2011/11/Vegetarian-restaurants-in-Vietnam-4.jpg',
              price: 6.00,
              maxGuests: 30,
              description: 'There are lots of places to eat vegetarian food in LA, but ours is the best.',
              address: '6515 Willoughby Avenue Los Angeles, CA 90038',
              latitude: 34.087158,
              longitude: -118.334777,
              startDatetime: '2017-10-11T18:00:00',
              endDatetime: '2017-10-11T20:00:00',
              userId: 1,
              tags: [1, 2, 4, 5, 20],
            }),
            Event.createEvent({
              id: 17,
              eventName: 'Dine and Dash (but pay first)',
              eventPic: 'https://img.grouponcdn.com/iam/6sz8xLnBnkTchP4Reu7m/GY-5000x3000/v1/c700x420.jpg',
              price: 5.00,
              maxGuests: 35,
              description: 'Get your eats then beat your feet.',
              address: '1145 N Ogden Dr West Hollywood, CA 90046',
              latitude: 34.092027,
              longitude: -118.3604908,
              startDatetime: '2017-10-15T18:00:00',
              endDatetime: '2017-10-15T20:00:00',
              userId: 4,
              tags: [29],
            }),
            Event.createEvent({
              id: 18,
              eventName: 'Dine and Dash (but pay first)',
              eventPic: 'https://img.grouponcdn.com/iam/6sz8xLnBnkTchP4Reu7m/GY-5000x3000/v1/c700x420.jpg',
              price: 10.00,
              maxGuests: 22,
              description: 'Hey Burbank!  Get your eats then beat your feet.',
              address: '2300 North Orchard Drive Burbank, CA 91504',
              latitude: 34.200884,
              longitude: -118.330185,
              startDatetime: '2017-10-15T18:00:00',
              endDatetime: '2017-10-15T20:00:00',
              userId: 3,
              tags: [29],
            }),
            Event.createEvent({
              id: 19,
              eventName: 'Dine and Dash (but pay first)',
              eventPic: 'https://img.grouponcdn.com/iam/6sz8xLnBnkTchP4Reu7m/GY-5000x3000/v1/c700x420.jpg',
              price: 5.00,
              maxGuests: 35,
              description: 'Hey Long Beach! Get your eats then beat your feet.',
              address: '2236 Granada Avenue Long Beach, CA 90815',
              latitude: 33.797630,
              longitude: -118.135112,
              startDatetime: '2017-10-15T18:00:00',
              endDatetime: '2017-10-15T20:00:00',
              userId: 1,
              tags: [29],
            }),
            Event.createEvent({
              id: 20,
              eventName: 'Dine and Dash (but pay first)',
              eventPic: 'https://img.grouponcdn.com/iam/6sz8xLnBnkTchP4Reu7m/GY-5000x3000/v1/c700x420.jpg',
              price: 5.00,
              maxGuests: 35,
              description: 'Hey Pasadena! Get your eats then beat your feet.',
              address: '955 North Summit Avenue Pasadena, CA 91103',
              latitude: 34.162361,
              longitude: -118.147716,
              startDatetime: '2017-10-15T18:00:00',
              endDatetime: '2017-10-15T20:00:00',
              userId: 2,
              tags: [29],
            }),
            Event.createEvent({
              id: 21,
              eventName: 'Dine and Dash (but pay first)',
              eventPic: 'https://img.grouponcdn.com/iam/6sz8xLnBnkTchP4Reu7m/GY-5000x3000/v1/c700x420.jpg',
              price: 5.00,
              maxGuests: 35,
              description: 'Hey Redondo Beach! Get your eats then beat your feet.',
              address: '306 North Gertruda Avenue Redondo Beach, CA 90277',
              latitude: 33.846733,
              longitude: -118.385825,
              startDatetime: '2017-10-15T18:00:00',
              endDatetime: '2017-10-15T20:00:00',
              userId: 4,
              tags: [29],
            }),
            Event.createEvent({
              id: 22,
              eventName: 'Joes Crab Shack',
              eventPic: 'https://s3-us-west-2.amazonaws.com/mymealmks/chilli-crab.jpg',
              price: 12.00,
              maxGuests: 15,
              description: 'Eat at Joe\'s!',
              address: '800 Wilshire Ave, Santa Monica CA',
              latitude: 34.0221524,
              longitude: -118.4945280,
              startDatetime: '2017-09-26T13:00:00',
              endDatetime: '2017-09-26T15:00:00',
              userId: 1,
              tags: [31, 37],
            }),
            Event.createEvent({
              id: 23,
              eventName: 'BBQ',
              eventPic: 'https://s3-us-west-2.amazonaws.com/mymealmks/blurb-bbq.jpg',
              price: 10.00,
              maxGuests: 50,
              description: 'Get some BBQ!',
              address: '400 Arizona Ave, Santa Monica, CA',
              latitude: 34.0177441,
              longitude: -118.4967326,
              startDatetime: '2017-09-30T13:00:00',
              endDatetime: '2017-09-30T15:00:00',
              userId: 1,
              tags: [29],
            }),
            Event.createEvent({
              id: 24,
              eventName: 'Maine Lobsta!',
              eventPic: 'https://s3-us-west-2.amazonaws.com/mymealmks/lobster.jpg',
              price: 18.00,
              maxGuests: 10,
              description: 'Seafood Night!',
              address: '1216 South Saltair Ave, Santa Monica, CA',
              latitude: 34.0450480,
              longitude: -118.4653950,
              startDatetime: '2017-10-03T12:00:00',
              endDatetime: '2017-10-03T13:00:00',
              userId: 1,
              tags: [31, 37],
            }),
            Event.createEvent({
              id: 25,
              eventName: 'Korean BBQ All the Time!',
              eventPic: 'https://pbs.twimg.com/profile_images/1398345786/set_menu_72dpi_3.jpg',
              price: 22.00,
              maxGuests: 10,
              description: 'You won\'t find better anywhere else!',
              address: '32 Alexandria Irvine, CA 92614',
              latitude: 33.681624,
              longitude: -117.819659,
              startDatetime: '2017-06-03T12:00:00',
              endDatetime: '2017-06-03T13:00:00',
              userId: 2,
              tags: [17, 30],
            }),
            Event.createEvent({
              id: 26,
              eventName: 'Korean BBQ All the Time!',
              eventPic: 'https://pbs.twimg.com/profile_images/1398345786/set_menu_72dpi_3.jpg',
              price: 22.00,
              maxGuests: 10,
              description: 'You won\'t find better anywhere else!',
              address: '3701 West 6th Street Los Angeles, CA 90020',
              latitude: 34.063710,
              longitude: -118.303050,
              startDatetime: '2017-06-03T12:00:00',
              endDatetime: '2017-06-03T13:00:00',
              userId: 1,
              tags: [17, 30],
            }),
            Event.createEvent({
              id: 27,
              eventName: 'The Midas Touch!',
              eventPic: 'http://media.vogue.com/r/h_480,w_480/2016/02/26/06-gold-food-porn.jpg',
              price: 405.00,
              maxGuests: 3,
              description: 'Literally eat gold. On all your food.',
              address: '617 S Olive St, Los Angeles, CA 90014',
              latitude: 34.047637,
              longitude: -118.254723,
              startDatetime: '2017-10-03T12:00:00',
              endDatetime: '2017-10-03T13:00:00',
              userId: 4,
              tags: [],
            }),
            Event.createEvent({
              id: 28,
              eventName: 'Better Git It in Your Soul (Food)',
              eventPic: 'http://www.trbimg.com/img-51549a92/turbine/mcknights-jpg-20130328/599/599x399',
              price: 13.00,
              maxGuests: 26,
              description: 'More like better get it in your belly amirite?',
              address: '1319 South Orange Drive Los Angeles, CA 90019',
              latitude: 34.050156,
              longitude: -118.346276,
              startDatetime: '2017-10-03T12:00:00',
              endDatetime: '2017-10-03T13:00:00',
              userId: 4,
              tags: [28],
            }),
            Event.createEvent({
              id: 29,
              eventName: 'Better Git It in Your Soul (Food)',
              eventPic: 'http://www.trbimg.com/img-51549a92/turbine/mcknights-jpg-20130328/599/599x399',
              price: 13.00,
              maxGuests: 26,
              description: 'More like better get it in your belly amirite?',
              address: '630 Evergreen Street Burbank, CA 91505',
              latitude: 34.160570,
              longitude: -118.348921,
              startDatetime: '2017-10-03T12:00:00',
              endDatetime: '2017-10-03T13:00:00',
              userId: 1,
              tags: [28],
            }),
            Event.createEvent({
              id: 30,
              eventName: 'Better Git It in Your Soul (Food)',
              eventPic: 'http://www.trbimg.com/img-51549a92/turbine/mcknights-jpg-20130328/599/599x399',
              price: 13.00,
              maxGuests: 26,
              description: 'More like better get it in your belly amirite?',
              address: '424 South San Pedro Street Los Angeles, CA 90013',
              latitude: 34.045122,
              longitude: -118.243298,
              startDatetime: '2017-10-03T12:00:00',
              endDatetime: '2017-10-03T13:00:00',
              userId: 2,
              tags: [28],
            }),
            Event.createEvent({
              id: 31,
              eventName: 'Carne Asada Cookout',
              eventPic: 'http://tipsforbbq.com/Include/Images/Recipes/Carne-Asada/AndrewLLoydSriracha.1024.jpg',
              price: 7.00,
              maxGuests: 20,
              description: 'The cookout to end all cookouts',
              address: '431 South Ynez Avenue Monterey Park, CA 91754',
              latitude: 34.057162,
              longitude: -118.129886,
              startDatetime: '2017-05-19T18:00:00',
              endDatetime: '2017-05-19T20:00:00',
              userId: 3,
              tags: [10],
            }),
            Event.createEvent({
              id: 32,
              eventName: 'Carne Asada Cookout',
              eventPic: 'http://tipsforbbq.com/Include/Images/Recipes/Carne-Asada/AndrewLLoydSriracha.1024.jpg',
              price: 7.00,
              maxGuests: 20,
              description: 'The cookout to end all cookouts',
              address: '4300-4328 139th Street Hawthorne, CA 90250',
              latitude: 33.905168,
              longitude: -118.350065,
              startDatetime: '2017-03-19T18:00:00',
              endDatetime: '2017-03-19T20:00:00',
              userId: 4,
              tags: [10],
            }),
            Event.createEvent({
              id: 33,
              eventName: 'Carne Asada Cookout',
              eventPic: 'http://tipsforbbq.com/Include/Images/Recipes/Carne-Asada/AndrewLLoydSriracha.1024.jpg',
              price: 7.00,
              maxGuests: 20,
              description: 'The cookout to end all cookouts',
              address: '1349 South Redondo Blvd, Los Angeles, CA 90019',
              latitude: 34.0487404,
              longitude: -118.3515677,
              startDatetime: '2017-04-19T18:00:00',
              endDatetime: '2017-04-19T20:00:00',
              userId: 1,
              tags: [10],
            }),
            Event.createEvent({
              id: 34,
              eventName: 'Pay What You Want, Bring What You Can Potluck',
              eventPic: 'http://tipsforbbq.com/Include/Images/Recipes/Carne-Asada/AndrewLLoydSriracha.1024.jpg',
              price: 0.00,
              maxGuests: 38,
              description: 'Tired of paying too much for food? You won\'t have to leave your wallet in El Segundo!',
              address: '419 Richmond Street El Segundo, CA 90245',
              latitude: 33.921571,
              longitude: -118.417302,
              startDatetime: '2017-04-20T18:00:00',
              endDatetime: '2017-04-20T20:00:00',
              userId: 1,
              tags: [10],
            }),
            Event.createEvent({
              id: 35,
              eventName: 'Catch of the Day',
              eventPic: 'https://realfood.tesco.com/media/images/066288-HERO-3fde41b1-e0ac-48fd-94b6-599b352e0522-0-472x310.jpg',
              price: 9.00,
              maxGuests: 24,
              description: 'Nobody does fish like we do!',
              address: '8995 State Street South Gate, CA 90280',
              latitude: 33.952416,
              longitude: -118.213147,
              startDatetime: '2017-02-20T18:00:00',
              endDatetime: '2017-02-20T20:00:00',
              userId: 4,
              tags: [26, 31],
            }),
            Event.createEvent({
              id: 36,
              eventName: 'Catch of the Day',
              eventPic: 'https://realfood.tesco.com/media/images/066288-HERO-3fde41b1-e0ac-48fd-94b6-599b352e0522-0-472x310.jpg',
              price: 9.00,
              maxGuests: 24,
              description: 'Nobody does fish like we do!',
              address: '22041 Del Valle Street Woodland Hills, CA 91364',
              latitude: 34.166880,
              longitude: -118.607376,
              startDatetime: '2017-02-20T18:00:00',
              endDatetime: '2017-02-20T20:00:00',
              userId: 2,
              tags: [26, 31],
            }),
          ];
          return Promise.all(allEventPromises)
            .then(() => {
              // create dummy messages
              const allMessagePromises = [
                Message.createMessage({
                  content: 'Hello world',
                  userId: 1,
                  eventId: 1,
                }),
                Message.createMessage({
                  content: 'Hello world',
                  userId: 1,
                  eventId: 1,
                }),
                Message.createMessage({
                  content: 'Hello world',
                  userId: 1,
                  eventId: 1,
                }),
                Message.createMessage({
                  content: 'Hello world',
                  userId: 1,
                  eventId: 1,
                }),
              ];

              return Promise.all(allMessagePromises)
                .then(() => {
                  const allGuestPromises = [
                    Event.joinEvent(3, 4),
                    Event.joinEvent(2, 3),
                    Event.joinEvent(7, 1),
                    Event.joinEvent(3, 3),
                    Event.joinEvent(5, 2),
                    Event.joinEvent(6, 2),
                    Event.joinEvent(1, 2),
                    Event.joinEvent(3, 1),
                    Event.joinEvent(4, 4),
                    Event.joinEvent(4, 1),
                    Event.joinEvent(4, 3),
                    Event.joinEvent(10, 2),
                    Event.joinEvent(11, 1),
                    Event.joinEvent(11, 2),
                    Event.joinEvent(11, 3),
                  ];
                  return Promise.all(allGuestPromises)
                    .then(() => {
                      // add dummy reviews
                      const allReviewPromises = [
                        Review.createReview({
                          content: 'Awsome cook',
                          rating: 5,
                          eventId: 2,
                          hostId: 2,
                          reviewerId: 3,
                        }),
                        Review.createReview({
                          content: 'Great cook',
                          rating: 5,
                          eventId: 3,
                          hostId: 2,
                          reviewerId: 4,
                        }),
                        Review.createReview({
                          content: 'So tasty',
                          rating: 5,
                          eventId: 7,
                          hostId: 2,
                          reviewerId: 1,
                        }),
                        Review.createReview({
                          content: 'Love it',
                          rating: 5,
                          eventId: 6,
                          hostId: 1,
                          reviewerId: 2,
                        }),
                        Review.createReview({
                          content: 'Lovely host',
                          rating: 5,
                          eventId: 3,
                          hostId: 2,
                          reviewerId: 3,
                        }),
                      ];
                      return Promise.all(allReviewPromises);
                    });
                });
            });
        });
    })
    .catch((err) => err);
};
