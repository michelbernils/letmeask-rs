import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Home} from './pages/Home';
import {NewRoom} from './pages/NewRoom';
import {Room} from './pages/Room';



import { AuthContextsProvider } from './contexts/AuthContexts'


function App() {


  return (
      <BrowserRouter>
          <AuthContextsProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
            </Switch>
          </AuthContextsProvider>
      </BrowserRouter>
  );
}

export default App;
