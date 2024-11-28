import React from 'react'

export const Login = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h1 className='text-4xl font-bold text-center text-blue-600 mb-8'>Code4Life</h1>
        <form className='space-y-6'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Email hoặc số điện thoại
            </label>
            <input 
              type="text"
              placeholder='Email hoặc số điện thoại'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Mật khẩu
            </label>
            <input 
              type="password"
              placeholder='Mật khẩu'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
          </div>
          <button 
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200'
          >
            Đăng nhập
          </button>
          <a 
            href="#" 
            className='block text-green-700 hover:text-green-800 text-center'
          >
            Quên mật khẩu?
          </a>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center'>
              <span className='px-2 bg-white text-sm text-gray-500'>hoặc</span>
            </div>
          </div>
          <button 
            type='button'
            className='w-auto mx-auto px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 text-lg font-semibold'
          >
            Tạo tài khoản mới
          </button>
        </form>
      </div>
    </div>
  )
}
