import React from 'react';
import { Meteor } from 'meteor/meteor';

export const Header = () => {
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
