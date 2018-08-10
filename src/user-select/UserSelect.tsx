import * as React from 'react';
import {AppUser} from '../models';
import {Button} from '@material-ui/core';
import {UserContext} from '../UserContext';
import {Link} from 'react-router-dom';

const users: string[] = ['Wombat', 'Hedgehog', 'Moose'];

interface Props {
    onUserSelect: (user: AppUser) => void;
}

interface SelectorProps {
    displayName: string;
    handler: () => void;
}

export const UserSelector = (props: SelectorProps) => (
    <Button variant={'contained'} onClick={props.handler}>{props.displayName}</Button>
);

export const UserSelect = (props: Props) => {
    const selectUser = (name: string) => () => props.onUserSelect({displayName: name});
    const selectors = users.map((it, index: number) => <UserSelector key={index}
                                                                     displayName={it}
                                                                     handler={selectUser(it)}/>);

    return (
        <div>
            <UserContext.Consumer>
                {user => user ?
                    (<div>
                        <h1>Welcome {user.displayName}</h1>
                        <Link to={'/the-holiday'}>Go to Holiday</Link>
                    </div>) :
                    (<div>
                        <h1>UserSelect</h1>
                        {selectors}
                    </div>)
                }
            </UserContext.Consumer>
        </div>
    );
};
