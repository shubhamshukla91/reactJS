// import logo from './logo.svg';
import './App.css';
// import LifecycleA from './components/LifecycleA';
// import LifecycleB from './components/LifecycleB';
// import LifecycleC from './components/LifecycleC';
// import Context from './contexts/Context';
import { UserContextProvider } from "./contextapi/UserContext";
import {Parent} from "./contextapi/Example3"



function App() {
  return (
    <div className="App">
    {/* <LifecycleA></LifecycleA>
    <LifecycleB></LifecycleB>
    <LifecycleC></LifecycleC> */}
    {/* <Context></Context> */}
    <UserContextProvider><Parent/></UserContextProvider>
    </div>
  );
}

export default App;