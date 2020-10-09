import React from 'react';
import {AppLayout} from './common/page/layout/AppLayout';
import {Router} from "react-router-dom";
import { createBrowserHistory } from "history";
import {MovieContract} from "collard_admin_models";


function App() {
    const history = createBrowserHistory();
    const contract:MovieContract = {

    }
    return (
        <div className="App">
            <Router history={history}>
                <AppLayout>
                    <div>xd</div>
                </AppLayout>
            </Router>
        </div>
    );
}

export default App;
