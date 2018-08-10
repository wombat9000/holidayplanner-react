import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import TopBar from './common/TopBar';

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'Holiday'
        };
    }

    public render() {
        return (
            <div className="App">
                <CssBaseline/>
                <TopBar title={this.state.title}/>
            </div>
        );
    }
}

interface State {
    title: string;
    user?: AppUser;
}

interface AppUser {
    displayName: string;
}

export default App;
