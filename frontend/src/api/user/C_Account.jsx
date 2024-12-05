export const C_Account = async (data) => {
  try {
    // Validate input data
    if (!data.username || !data.password || !data.email) {
      throw new Error('Vui lòng nhập đầy đủ thông tin đăng ký')
    }

    if (data.username.length < 3 || !/^[a-zA-Z0-9]+$/.test(data.username)) {
      throw new Error('Tên đăng nhập phải có ít nhất 3 ký tự và không chứa ký tự đặc biệt')
    }

    if (data.password.length < 6) {
      throw new Error('Mật khẩu phải có ít nhất 6 ký tự')
    }

    const response = await fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Origin': 'http://localhost:1903'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        email: data.email,
        isActive: true,
        isDeleted: false
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Đăng ký thất bại!')
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Lỗi đăng ký:', error.message)
    throw error
  }
}

