import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Users } from "./collections/users";

Meteor.startup(() => {
  if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    //SMS.twilio = Meteor.settings['twilio']; // please provide your own twilio details in api/private/settings.json file
  }

  if (Users.collection.find().count() > 0) {
    return;
  }
 
  Accounts.createUserWithPhone({
    phone: '+912540000001',
    profile: {
      name: 'Mitesh Agarwal',
      picture: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+912540000002',
    profile: {
      name: 'Medhawi Pathak',
      picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+912540000003',
    profile: {
      name: 'Vasudha Amrit',
      picture: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+912540000004',
    profile: {
      name: 'Kumkum Pathak',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+912540000005',
    profile: {
      name: 'Prashant Pathak',
      picture: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  });
});