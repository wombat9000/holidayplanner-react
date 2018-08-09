import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import logo from './logo.svg';


class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {title: 'Holiday'};
    }

    public render() {
        return (
            <div className="App">
                <CssBaseline/>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="title" color="inherit">
                            {this.state.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        );
    }
}

interface AppState {
    title: string
}

export default App;
