const bcrypt = require('bcryptjs');

const Event = require('../../models/event');
const User = require('../../models/user');
const Company = require('../../models/company');



module.exports = {
  events: async () => {
    try {
      const events = await Event.find()
      .select(`title description date creator atendees`)
      .populate(`creator atendees`)
      .lean();
      return events;
      } catch (err) {
        throw err;
      }
    }, 
  

  company: async () => {
    try {
      const companies = await Company.find()
      .select(`title description`)
      .lean();
      return companies
    } catch (err) {
      throw err;
    }
  },

  user: async () => {
    try {
      const users = await User.find()
      .select(`email createdEvents`)
      .populate(`createdEvents`)
      .lean()
      return users;
    } catch (err) {
      throw err;
    }
  },

    createEvent: async args => {
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: new Date(args.eventInput.date),
          creator: '5d8c82e8ab4ce41830470128'
        });
        let createdEvent;
        try {
          const result = await event.save();
          createdEvent = {
            ...result._doc,
            _id: result._doc._id.toString(),
            date: new Date(event._doc.date).toISOString(),
            creator: user.bind(this, result._doc.creator)
          };
          const creator = await User.findById('5d8c82e8ab4ce41830470128');
    
          if (!creator) {
            throw new Error('User not found.');
          }
          creator.createdEvents.push(event);
          await creator.save();
    
          return createdEvent;
        } catch (err) {
          throw err;
        }
      },

      createCompany: async args => {
        try {
          const existingCompany = await Company.findOne({ title: args.companyInput.title});
          if(existingCompany) {
              throw new Error('company is already listed');
          }
          const company = new Company({
            title: args.companyInput.title,
            description: args.companyInput.description,
          });
          let atendees;
          try{
            const result = await company.save();
            atendees = {
              ...result._doc,
              _id: result._doc._id.toString(),
            };
            const atendee = await Event.findById('5d8c8392cd55e736fcefdf33');

            if (!atendee) {
              throw new Error('event not found');
            }
            atendee.atendees.push(company);
            await atendee.save();
            return atendees;
          } catch(err) {
            throw err;
          }
          
        } catch(err) {
            throw err;
        }
      },

      createUser: async args => {
          try {
              const existingUser = await User.findOne({ email: args.userInput.email});
              if(existingUser) {
                  throw new Error('user already exists');
              }
              const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

              const user = new User({
                  email: args.userInput.email,
                  password: hashedPassword
              });

              const result = await user.save();

              return {...result._doc, password: null, _id:result._id};
          } catch (err) {
              throw err;
          }
      }
};