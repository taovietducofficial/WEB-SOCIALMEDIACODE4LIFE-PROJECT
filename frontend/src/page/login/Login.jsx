import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Code4Life</h1>
        <form>
          <div className='form-group'>
            <label>Email hoặc số điện thoại</label>
            <input 
              type="text" 
              placeholder='Email hoặc số điện thoại' 
            />
          </div>
          <div className='form-group'>
            <label>Mật khẩu</label>
            <input 
              type="password" 
              placeholder='Mật khẩu'
            />
          </div>
          <button type='submit'>Đăng nhập</button>
          <a href="#" style={{color: '#0f5c05', textDecoration: 'none', display: 'block', marginBottom: '20px'}}>
            Quên mật khẩu?
          </a>
          <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #dadde1'}} />
          <button 
            type='button'
            style={{
              background: '#42b72a',
              fontSize: '17px',
              padding: '14px 16px',
              width: 'auto',
              display: 'inline-block'
            }}
          >
            Tạo tài khoản mới
          </button>
        </form>
      </div>
    </div>
  )
}
