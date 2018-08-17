import {shallow, ShallowWrapper} from 'enzyme';
import TopBar from './TopBar';
import * as React from 'react';
import {AppUser} from '../models';
import {UserSelector} from './UserSelector';

describe('TopBar', () => {

    let wrapper: ShallowWrapper;
    const handlerMock: (user: AppUser) => void = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TopBar title="someTitle" setUserHandler={handlerMock}/>);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should pass setUserHandler to userSelector', () => {
        const selector = wrapper.find(UserSelector);
        const handler: (user: AppUser) => void = selector.prop('setUserHandler');
        const someUser = {displayName: 'someDisplayName'};
        handler(someUser);

        expect(handlerMock).toHaveBeenCalledWith(someUser);
    });
});