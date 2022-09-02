

function Landing() {
  return (
    <main className='landing'>
      <h1>Welcome to MyDood, my dude!</h1>
      <div className='container'>
        <form className='login-form'>
          <input type='text' placeholder='enter your email'/>
          <input type='password' placeholder='enter your password'/>
          <button>Login</button>
        </form>

        <form className='register-form'>
          <input type='text' placeholder='enter your email'/>
          <input type='password' placeholder='enter your password'/>
          <button>Register</button>
        </form>
      </div>
    </main>
  )
}

export default Landing