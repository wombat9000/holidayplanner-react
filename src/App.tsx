import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import TopBar from './common/TopBar';
import {Route, Switch} from 'react-router';
import {UserSelect} from './user-select/UserSelect';
import {AppUser} from './models';
import {UserContext} from './UserContext';

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'Holiday',
        };

        this.setUser = this.setUser.bind(this);
    }

    private setUser(user: AppUser): void {
        this.setState({
            user: user
        });
    }

    public render() {
        return (
            <div className="App">
                <UserContext.Provider value={this.state.user}>
                    <CssBaseline/>
                    <TopBar title={this.state.title}/>
                    <Switch>
                        <Route render={() => (<UserSelect onUserSelect={this.setUser}/>)}/>
                    </Switch>
                </UserContext.Provider>
            </div>
        );
    }
}

interface State {
    title: string;
    user?: AppUser;
}

export default App;
