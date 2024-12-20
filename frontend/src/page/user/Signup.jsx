import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { C_Account } from '../../api/user/C_Account'
import emailjs from 'emailjs-com' // Thêm thư viện EmailJS (cài đặt bằng npm install emailjs-com)

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [verificationCode, setVerificationCode] = useState('')

  // Hàm tạo mã xác thực
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  // Hàm gửi email mã xác thực
  const sendVerificationEmail = async (email, code) => {
    try {
      await emailjs.send(
        'taovietduc', // Thay bằng service ID từ EmailJS
        'template_77efk1x', // Thay bằng template ID từ EmailJS
        {
          to_email: email,
          verification_code: code
        },
        '1adByH6e2T5bm6Msy' // Thay bằng user ID từ EmailJS
      )
      alert('Mã xác thực đã được gửi đến email của bạn.')
    } catch (error) {
      console.error('Lỗi khi gửi email:', error)
      alert('Không thể gửi mã xác thực. Vui lòng thử lại.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const code = generateVerificationCode()
      setVerificationCode(code)

      // Gửi mã xác thực qua email
      await sendVerificationEmail(formData.email, code)

      // Đăng ký tài khoản
      const response = await C_Account(formData)

      if (response.status === 'success') {
        navigate('/')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div>
          <h1 className="text-center text-4xl font-bold text-blue-600">Code4Life</h1>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Tạo tài khoản mới
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Nhanh chóng và dễ dàng.
          </p>
        </div>

        {/* Signup Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                type="text"
                name="username"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tên đăng nhập"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-sm text-gray-600 text-center">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Đăng ký
            </button>
          </div>

          <div className="text-center">
            <a href="/" className="text-sm text-blue-600 hover:text-blue-500">
              Bạn đã có tài khoản?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
