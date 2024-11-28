import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Đăng ký thành công!')
        navigate('/login')
      } else {
        const data = await response.json()
        alert(data.message || 'Đăng ký thất bại')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Có lỗi xảy ra khi đăng ký')
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
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Họ"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tên"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email hoặc số điện thoại"
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
                placeholder="Mật khẩu mới"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày sinh</label>
              <input
                type="date"
                name="birthDate"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Giới tính</label>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-blue-500">
                  <span>Nam</span>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    className="text-blue-600"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex-1 flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-blue-500">
                  <span>Nữ</span>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    className="text-blue-600"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex-1 flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-blue-500">
                  <span>Khác</span>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="other" 
                    className="text-blue-600"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />
                </label>
              </div>
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
            <a href="/login" className="text-sm text-blue-600 hover:text-blue-500">
              Bạn đã có tài khoản?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup