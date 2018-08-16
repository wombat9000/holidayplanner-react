import * as React from 'react';
import {UserContext} from '../UserContext';
import {MenuItem, Select} from '@material-ui/core';
import {AppUser} from '../models';

export const UserSelector = (props: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setUserHandler({displayName: event.target.value});
    };

    return (
        <UserContext.Consumer>
            {user => {
                const currentUserName = user ? user.displayName : '';
                return (
                    <Select
                        data-qa={'select'}
                        value={currentUserName}
                        onChange={handleChange}
                        className="flex-right">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Wombat">Wombat</MenuItem>
                        <MenuItem value="Moose">Moose</MenuItem>
                    </Select>
                );
            }}
        </UserContext.Consumer>
    );
};

interface Props {
    setUserHandler: (user: AppUser) => void;
}
