import { Meteor } from 'meteor/meteor';

const { decisionType } = Meteor.settings.public;

Meteor.startup(() => {
  console.log(`Starting the ${decisionType} Decision Matrix`)
});
