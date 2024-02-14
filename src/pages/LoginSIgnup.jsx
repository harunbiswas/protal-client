import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

export default function LoginSignup() {
  return (
    <div className='login-signup'>
      <form className='form'>
        <div className='form-wrp'>
          <div className='form-group'>
            <label htmlFor='fName'>First Name</label>
            <input type='text' placeholder='Frist Name' id='fName' />
          </div>
          <div className='form-group'>
            <label htmlFor='lName'>Last Name</label>
            <input type='text' placeholder='Last Name' id='lName' />
          </div>
        </div>
        <div className='form-wrp'>
          <div className='form-group'>
            <label htmlFor='email'>email</label>
            <input type='Email' placeholder='example#domain.com' id='email' />
          </div>
        </div>{' '}
        <div className='form-wrp'>
          <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input type='passwrod' placeholder='Password' id='password' />
            <button>{<BsEyeSlashFill /> || <BsEyeFill />}</button>
          </div>
        </div>
      </form>
    </div>
  )
}
