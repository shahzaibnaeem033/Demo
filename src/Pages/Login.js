import './Login.scss'
import { Grid } from '@mui/material';
import SelectLabels from '../Components/SelectLogin';
import InputFields from '../Components/InputField';
import SubmitBtn from '../Components/SbmtBtn';
import loginImg from '../Assets/Images/login-logo.svg'
import { useState } from 'react';

function LoginScreen(props) {

  // State
  const [age, setAge] = useState(props.newdata.age)
  console.log("age", age)

  function increment(){
    setAge(age+1)
  }
  return (
    <div className="container">
      <Grid container columnSpacing={{ xs: 1, sm: 2, }} className='innerSection'>

        <Grid item xs={12} md={6} className='colLeft' >
          <img src={loginImg} className='loginImg' />
          <h1>Welcome to<br></br>
            Corporate Counsel</h1>
            
          <p className='ptxt'>Let’s get you all set up so you can verify
            your personal account and begin setting up<br></br>
            your profile.</p>
          <p className='ptxt2'>© corporatecounsel-2023</p>
        </Grid>

        <Grid item xs={12} md={6} className='colRight'>
          <h1>Login</h1>
          <h1>{age}</h1>
          <button onClick={increment}>Increase</button>
          <p>Have an account? Please login.</p>
          <p className='txt2'>Login as</p>
          <SelectLabels />
          <InputFields />
          <SubmitBtn />
          <p className='frgt'>Forgot Password</p>
        </Grid>

      </Grid>
    </div>
  )
}
export default LoginScreen;