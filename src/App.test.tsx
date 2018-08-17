import * as React from 'react';
import App from './App';
import {shallow, ShallowWrapper} from 'enzyme';
import {PlanningOverview} from './planning-overview/PlanningOverview';

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

        it('should not show planning page while no user is selected', () => {
            expect(wrapper.find(PlanningOverview).exists()).toBeFalsy();
        });
    });

    describe('a user is selected', () => {
        beforeEach(() => {
            wrapper.setState({user: {displayName: 'wombat'}});
        });

        it('should show planning page', () => {
            expect(wrapper.find(PlanningOverview).exists()).toBeTruthy();
        });
    });
});