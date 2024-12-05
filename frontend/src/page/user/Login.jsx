import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password) {
      alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu')
      return
    }

    if (username.length < 3 || !/^[a-zA-Z0-9]+$/.test(username)) {
      alert('Tên đăng nhập phải có ít nhất 3 ký tự và không chứa ký tự đặc biệt')
      return
    }

    if (password.length < 6) {
      alert('Mật khẩu phải có ít nhất 6 ký tự')
      return
    }
  
    try {
      // Hardcoded credentials
      const validAccounts = [
        { username: 'taovietduc193', password: '1234567' },
        { username: 'taovietduc194', password: '1234567' },
        { username: 'taovietduc195', password: '1234567' },
        { username: 'taovietduc196', password: '1234567' },
        { username: 'taovietduc197', password: '1234567' },
        { username: 'taovietduc198', password: '1234567' },
        { username: 'taovietduc199', password: '1234567' },
        { username: 'taovietduc200', password: '1234567' },
        { username: 'taovietduc201', password: '1234567' },
        { username: 'taovietduc202', password: '1234567' }
      ]

      const isValidLogin = validAccounts.some(
        account => account.username === username && account.password === password
      )

      if (isValidLogin) {
        // Login successful
        navigate('/user/home')
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!')
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error)
      alert('Lỗi kết nối máy chủ! Vui lòng thử lại sau.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-4xl font-bold text-blue-600">Code4Life</h1>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Đăng nhập vào Code4Life
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Kết nối với bạn bè và thế giới xung quanh bạn trên Code4Life.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mật khẩu" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Đăng nhập
            </button>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Quên mật khẩu?
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => navigate('/signup')}
            >
              Tạo tài khoản mới
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
