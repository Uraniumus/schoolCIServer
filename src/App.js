import './App.css';
import BuildHistory from './pages/BuildHistory';
import Start from './pages/Start';
import Settings from './pages/Settings';

import React, { useState } from 'react';

import SettingsContext from './context';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom"

// function App() {
//   return (
//     //  <Start/>
//      <BuildHistory/>
//     // <Settings/>
//   );
// }

// export default App;

// class App extends Component {
//   render() {
  function App(){
    //const { isSettingsApplied } = useContext(SettingsContext);
    const [context, setContext] = useState(false);
    const content = context ? BuildHistory : Start;
    const history = useHistory();
    return(
    //const { history } = this.props

    // return (
      <SettingsContext.Provider value={[context, setContext]}>
      <div className="App">
        <Switch>          
          <Route history={history} path='/settings' component={Settings} />
          <Route history={history} path='/' component={content} />
          <Redirect from='/' to='/'/>
        </Switch>
      </div>
      </SettingsContext.Provider>
          )
        }
//     );
//   }
// }

export default withRouter(App)

