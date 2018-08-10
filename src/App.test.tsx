import * as React from 'react';
import App from './App';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import {UserSelect} from './user-select/UserSelect';
import {AppUser} from './models';
import {MemoryRouter} from 'react-router';

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

xdescribe('Routing', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<MemoryRouter><App/></MemoryRouter>);
    });

    describe('Default', () => {
        it('should update user state', () => {
            const userSelect = wrapper.find(UserSelect);
            const eventHandler: (user: AppUser) => void = userSelect.prop('onUserSelect');

            const someUser: AppUser = {
                displayName: 'The Wombat'
            };

            eventHandler(someUser);
            wrapper.update();
            expect(wrapper.find('h1.greeting').exists()).toBeTruthy();
        });
    });
});