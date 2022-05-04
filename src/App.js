import logo from './logo.svg';
import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import PracticeContainer from './components/PracticeContainer';




function App() {
  return (
   <Provider store={store}>
    <div className="App">
      {/*<ItemContainer cake/>
      <ItemContainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <PracticeContainer/>*/}
      <UserContainer/>
    </div>
  </Provider>
  );
}

export default App;
