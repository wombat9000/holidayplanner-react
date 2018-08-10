import * as React from 'react';
import App from './App';
import {shallow, ShallowWrapper} from 'enzyme';


describe('App', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('default state', () => {
        it('should have Holiday as default title', () => {
            expect(wrapper.state('title')).toBe('Holiday');
        });

        it('should have no user by default', () => {
            expect(wrapper.state('user')).toBeUndefined();
        });
    });
});
