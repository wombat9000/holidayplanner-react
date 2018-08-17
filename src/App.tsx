import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import TopBar from './common/TopBar';
import {AppUser} from './models';
import {UserContext} from './UserContext';
import {PlanningOverview} from './planning-overview/PlanningOverview';

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
                    <TopBar title={this.state.title} setUserHandler={this.setUser}/>
                    {this.state.user ? <PlanningOverview/> : null}
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
