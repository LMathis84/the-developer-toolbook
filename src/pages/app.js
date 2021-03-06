import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';

import PrivateRoute from '../components/Routes/PrivateRoute';
import HomepageGrid from '../components/Grid/HomepageGrid';

import AutoSuggestion from '../components/AutoSuggestion/AutoSuggestion';
import SelfConfidence from '../components/SelfConfidence/SelfConfidence';
import Faith from '../components/Faith/Faith';
import PublicRoute from '../components/Routes/PublicRoute';
import MiracleEquation from '../components/MiracleEquation/MiracleEquation';
import MiracleMorning from '../components/MiracleMorning/MiracleMorning';
import SelfAnalysis from '../components/SelfAnalysis/SelfAnalysis';

const App = () => (
    <Layout>
        <Router>
            {/* <div> */}
                {/*<Route path="/" render={(props) => <IndexPage auth={auth} {...props} />} />*/}
                <PublicRoute path="/" exact component={HomepageGrid} />
                <PrivateRoute path="/app/auto-suggestion" component={AutoSuggestion} />
                <PrivateRoute path="/app/miracle-equation" component={MiracleEquation} />
                <PrivateRoute path="/app/miracle-morning" component={MiracleMorning} />
                <PrivateRoute path="/app/self-analysis" component={SelfAnalysis} />
                <PrivateRoute path="/app/faith" component={Faith} />
                <PrivateRoute path="/app/self-confidence" component={SelfConfidence} />
                
            {/* </div> */}
        </Router>
    </Layout>
)

export default App;