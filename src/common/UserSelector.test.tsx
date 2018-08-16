import {shallow, ShallowWrapper} from 'enzyme';
import {AppUser} from '../models';
import {UserSelector} from './UserSelector';
import * as React from 'react';

describe('UserSelector', () => {
    let outer: ShallowWrapper<any>;
    const handlerMock: (user: AppUser) => {} = jest.fn();

    beforeEach(() => {
        outer = shallow(<UserSelector setUserHandler={handlerMock}/>);
    });

    it('should match snapshot', () => {
        expect(outer).toMatchSnapshot();
    });

    describe('inside context', () => {
        let InnerContext: (user: AppUser | undefined) => React.ReactElement<void>;

        beforeEach(() => {
            const contextChild: React.ReactNode = outer.props().children;
            InnerContext = contextChild as (user: AppUser | undefined) => React.ReactElement<void>;
        });

        describe('user is present', () => {
            let wrapper: ShallowWrapper<any>;

            beforeEach(() => {
                wrapper = shallow(InnerContext({displayName: 'wombat'}));
            });

            it('should match snapshot', () => {
                expect(wrapper).toMatchSnapshot();
            });

            it('should use username as selected value', () => {
                const select = wrapper.find('[data-qa="select"]');
                const prop = select.prop('value');
                expect(prop).toBe('wombat');
            });

            it('should wire handler into selector', () => {
                const prop = wrapper.find('[data-qa="select"]').prop('onChange');
                const onChangeHandler = prop as (event: any) => void;

                onChangeHandler({target: {value: 'newName'}});

                expect(handlerMock).toHaveBeenCalledWith({displayName: 'newName'});
            });
        });

        describe('user is absent', () => {
            let wrapper: ShallowWrapper<any>;

            beforeEach(() => {
                wrapper = shallow(InnerContext(undefined));
            });

            it('should match snapshot', () => {
                expect(wrapper).toMatchSnapshot();
            });

            it('should use emptystring if user is undefined', () => {
                const select = wrapper.find('[data-qa="select"]');
                const prop = select.prop('value');
                expect(prop).toBe('');
            });
        });
    });
});

/*
// Component.js
const Component = props => (
    <MyContext.Consumer>
        {(context) => (
            <Foo
                bar={props.bar}
                baz={context.baz}
            />
        )}
    </MyContext.Consumer>
);

// Component.test.js
const outer = shallow(<Component bar="bar" />);
const Children = outer.props().children;
const wrapper = shallow(<Children baz="baz" />);

expect(wrapper.find(Foo)).toHaveLength(1);
expect(wrapper.find(Foo)).props().bar).toBe('bar');
expect(wrapper.find(Foo)).props().baz).toBe('baz');
*/