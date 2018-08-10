import {shallow, ShallowWrapper} from 'enzyme';
import {UserSelector} from './UserSelect';
import * as React from 'react';
import {AppUser} from '../models';

beforeEach(() => {
    jest.resetModules();
});

const getSelectorWithContext = (context = {}) => {
    jest.doMock('./../UserContext.tsx', () => {
        return {
            UserContext: {
                Consumer: (props: any) => props.children(context)
            }
        };
    });

    return require('./UserSelect').UserSelect;
};

xdescribe('UserSelect', () => {
    let wrapper: ShallowWrapper;
    const spy = jest.fn();

    const theWombat: AppUser = {
        displayName: 'The Wombat'
    };

    beforeEach(() => {
        const UserSelect = getSelectorWithContext();
        wrapper = shallow(<UserSelect onUserSelect={spy}/>, {context: {user: undefined}});
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should show selectors when no user is set', () => {
        const selector = wrapper.find(UserSelector);
        selector.simulate('click');
        expect(spy).toHaveBeenCalledWith(theWombat);
    });
});