export const CRUD_User = async () => {
  const response = await fetch('http://localhost:8081/api/auth/users')
  const data = await response.json()
  return data
}

