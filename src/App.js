import './App.css';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/LoginForm' element={<LoginForm/>}></Route>
        <Route path='/SignUpForm' element={<SignUpForm/>}></Route>
      </Routes>  
    </div>
  );
}

export default App;
