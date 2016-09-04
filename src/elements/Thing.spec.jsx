/* global it expect */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import { shallow } from 'enzyme';
import Thing from './Thing';

it('should say hello', () => {
  const thing = shallow(
    <Thing />
  );
  expect(thing.find('div').text()).toEqual('hello');
});
