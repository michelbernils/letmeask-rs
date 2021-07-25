import { BrowserRouter, Route } from 'react-router-dom';


import {Home} from './pages/Home';
import {NewRoom} from './pages/NewRoom';



import { AuthContextsProvider } from './contexts/AuthContexts'


function App() {


  return (
      <BrowserRouter>
          <AuthContextsProvider>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
          </AuthContextsProvider>
      </BrowserRouter>
  );
}

export default App;
