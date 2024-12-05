export const CRUD_User = async () => {
  const response = await fetch('http://localhost:8081/api/auth/users')
  const data = await response.json()
  return data
}

export const CRUD_User_By_Id = async (id) => {
  const response = await fetch(`http://localhost:8081/api/auth/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
