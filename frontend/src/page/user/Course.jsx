import React, { useState, useEffect } from 'react'
import { FaCode, FaReact, FaNodeJs, FaPython, FaDatabase, FaClock, FaTrash, FaPlus } from 'react-icons/fa'
import { C_Course } from '../../api/user/C_Course'
import { CRUD_Post } from '../../api/user/CRUD_Post'

const Course = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await C_Course()
      setCourses(data)
    }
    fetchCourses()
  }, [])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    level: '',
    duration: '',
    price: '',
    description: ''
  })

  const handleAddCourse = async () => {
    if (!newCourse.title || !newCourse.instructor || !newCourse.level || !newCourse.duration || !newCourse.price || !newCourse.description) {
      alert('Vui lòng điền đầy đủ thông tin')
      return
    }

    try {
      // Tạo object data để gửi xuống API
      const courseData = {
        title: newCourse.title,
        instructor: newCourse.instructor,
        level: newCourse.level,
        duration: newCourse.duration,
        price: newCourse.price,
        description: newCourse.description
      }

      // Gọi API để lưu khóa học mới
      const response = await fetch('http://localhost:8081/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseData)
      })

      if (response.ok) {
        const savedCourse = await response.json()
        
        // Thêm icon vào course mới
        const courseWithIcon = {
          ...savedCourse,
          icon: <FaCode className="text-gray-500" />
        }

        // Cập nhật state
        setCourses([...courses, courseWithIcon])
        
        // Reset form
        setNewCourse({
          title: '',
          instructor: '',
          level: '',
          duration: '',
          price: '',
          description: ''
        })
        setShowAddForm(false)
        alert('Yêu cầu mở lớp thành công!')
      } else {
        throw new Error('Lỗi khi thêm khóa học')
      }
    } catch (error) {
      console.error('Lỗi khi thêm khóa học:', error)
      alert('Có lỗi xảy ra khi yêu cầu mở lớp. Vui lòng thử lại!')
    }
  }

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khóa học này?')) {
      try {
        const response = await fetch(`http://localhost:8081/api/courses/${id}`, {
          method: 'DELETE'
        })

        if (response.ok) {
          setCourses(courses.filter(course => course.id !== id))
          alert('Xóa khóa học thành công!')
        } else {
          throw new Error('Lỗi khi xóa khóa học')
        }
      } catch (error) {
        console.error('Lỗi khi xóa khóa học:', error)
        alert('Có lỗi xảy ra khi xóa khóa học. Vui lòng thử lại!')
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Các khóa học lập trình</h1>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
        >
          <FaPlus /> Thêm khóa học
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Thêm khóa học mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tên khóa học"
              className="border p-2 rounded"
              value={newCourse.title}
              onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
            />
            <input
              type="text" 
              placeholder="Giảng viên"
              className="border p-2 rounded"
              value={newCourse.instructor}
              onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
            />
            <input
              type="text"
              placeholder="Trình độ"
              className="border p-2 rounded"
              value={newCourse.level}
              onChange={(e) => setNewCourse({...newCourse, level: e.target.value})}
            />
            <input
              type="text"
              placeholder="Thời lượng"
              className="border p-2 rounded"
              value={newCourse.duration}
              onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
            />
            <input
              type="text"
              placeholder="Giá"
              className="border p-2 rounded"
              value={newCourse.price}
              onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
            />
            <textarea
              placeholder="Mô tả"
              className="border p-2 rounded"
              value={newCourse.description}
              onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              Hủy
            </button>
            <button
              onClick={handleAddCourse}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Yêu cầu mở lớp
            </button>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="text-3xl mr-3">
                  {course.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
              </div>
              <button 
                onClick={() => handleDeleteCourse(course.id)}
                className="text-red-500 hover:text-red-600 transition-colors duration-300"
              >
                <FaTrash />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">{course.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-700">
                <FaCode className="mr-2" />
                <span>Giảng viên: {course.instructor}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaDatabase className="mr-2" />
                <span>Trình độ: {course.level}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaClock className="mr-2" />
                <span>Thời lượng: {course.duration}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">{course.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Đăng ký
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Course