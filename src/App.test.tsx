import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {shallow, ShallowWrapper} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have Holiday as default title', () => {
    const shallowWrapper: ShallowWrapper = shallow(<App/>);

    expect(shallowWrapper.state('title')).toBe('Holiday');
});
