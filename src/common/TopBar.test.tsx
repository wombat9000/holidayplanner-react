import {shallow, ShallowWrapper} from 'enzyme';
import TopBar from './TopBar';
import * as React from 'react';

describe('TopBar', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<TopBar title="someTitle"/>)
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});