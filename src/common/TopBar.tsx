import {AppBar, Toolbar, Typography} from '@material-ui/core';
import * as React from 'react';


class TopBar extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="title" color="inherit">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
        );
    }
}

interface Props {
    title: string;
}

export default TopBar;
