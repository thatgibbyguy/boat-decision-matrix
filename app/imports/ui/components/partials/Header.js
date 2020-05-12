import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { AppInfoCollection } from '../../../api/collections';

export const Header = () => {
  const appInfo = useTracker(() => {
    return AppInfoCollection.findOne();
  });
  const { decisionType } = Meteor.settings.public;

  return (
    <header>
      <div className="units-row">
        <div className="unit-auto">
          <h1>{decisionType ? `The ${decisionType} ` : ''}Decision Matrix</h1>
        </div>
      </div>
    </header>
  )
}
