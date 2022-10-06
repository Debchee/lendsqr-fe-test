import logo from '../../assets/Group.svg'
import loginPic from '../../assets/logo-pic.png';
import "../../Styles/login.css";
const Login = () => {
  return (
    <>
    <div className='login-container'>
    <div className='left-login'>
      <div className='logo'>
      <img src={logo}/>
      </div>
      <div className='login-pic'>
        <img src={loginPic}/>
      </div>  
    </div>

    <div className='right-login'>

      <h2>Welcome!</h2>
      <p>Enter details to login</p>
      <div>
        <form>
          <input type="text" placeholder='Email' required/>
          <input type="text" placeholder='Password' required/>
          <h4>FORGOT PASSWORD?</h4>
          <button type='submit' className='btn'>LOG IN</button>
        </form>
      </div>
    </div>
    </div>
  
    </>
  )
}

export default Login