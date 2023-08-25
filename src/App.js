import logo from './logo.svg';
// import './App.css';
import LoginScreen from './Pages/Login';

function App() {
  var data = {
    name: 'Usama Zafar',
    age: 24
  }
  const data2 = 'Data 2'
  return (
    <div className="App">
      <LoginScreen newdata={data}/>
    </div>
  );
}

export default App;
