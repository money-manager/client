import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from '../index';

enzyme.configure({ adapter: new Adapter() });

const props = {
  initPage: jest.fn(),
  cleanPage: jest.fn(),
};

const wrapper = enzyme.shallow(<Main {...props} />);

describe('<Main />', () => {
  it(`should render: 1 <div />`, () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
