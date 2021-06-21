import './Login.css';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const userName = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (userName === '' || password === '') {
      alert('Please fill out all fields');
      return;
    }

    alert(`User name: ${userName}, password: ${password}`);
  };

  const clearForm = () => {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  };

  return (
    <div className='flex-container'>
      <div className='content'>
        <form className='login-form' onSubmit={onSubmit}>
          <h1>Account Login</h1>
          <label className='login-label' for='email'>
            Email:
          </label>
          <input
            className='login-field'
            id='email'
            type='email'
            name='email'
            placeholder='email@email.com'
          ></input>
          <br />
          <label className='login-label' for='password'>
            Password:
          </label>
          <input
            className='login-field'
            id='password'
            type='password'
            name='password'
          ></input>
          <br />
          <input style={{ marginTop: '1em' }} type='submit' value='Login' />
        </form>
      </div>
    </div>
  );
};

export default Login;
