import {AppBar, Toolbar, Typography} from '@material-ui/core';
import * as React from 'react';
import './TopBar.css';
import {AppUser} from '../models';
import {UserSelector} from './UserSelector';

class TopBar extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="TopBar">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className="flex">
                            {this.props.title}
                        </Typography>
                        <UserSelector setUserHandler={this.props.setUserHandler}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

interface Props {
    title: string;
    setUserHandler: (user: AppUser) => void;
}

export default TopBar;