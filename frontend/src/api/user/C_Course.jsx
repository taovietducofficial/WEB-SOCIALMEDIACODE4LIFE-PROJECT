export const C_Course = async () => {
  const response = await fetch('http://localhost:8081/api/courses')
  const data = await response.json()
  return data
}