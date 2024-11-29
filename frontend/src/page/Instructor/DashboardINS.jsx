import React, { useState } from 'react'
import { FaGraduationCap, FaUsers, FaBook, FaChalkboardTeacher } from 'react-icons/fa'

const DashboardINS = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Lập trình React.js',
      students: [
        { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', progress: 60 },
        { id: 2, name: 'Trần Thị B', email: 'tranthib@gmail.com', progress: 45 }
      ],
      subjects: [
        { id: 1, name: 'React Cơ Bản', duration: '10h' },
        { id: 2, name: 'React Hooks', duration: '8h' },
        { id: 3, name: 'React Router', duration: '6h' }
      ],
      totalStudents: 2,
      totalSubjects: 3
    },
    {
      id: 2,
      title: 'Node.js Backend',
      students: [
        { id: 3, name: 'Lê Văn C', email: 'levanc@gmail.com', progress: 75 },
        { id: 4, name: 'Phạm Thị D', email: 'phamthid@gmail.com', progress: 30 }
      ],
      subjects: [
        { id: 1, name: 'Node.js Basics', duration: '12h' },
        { id: 2, name: 'Express.js', duration: '10h' },
        { id: 3, name: 'MongoDB', duration: '8h' }
      ],
      totalStudents: 2,
      totalSubjects: 3
    }
  ])

  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCourse, setSelectedCourse] = useState(null)

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <div key={course.id} 
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => {
                  setSelectedCourse(course)
                  setActiveTab('details')
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <FaGraduationCap className="text-3xl text-blue-500" />
                  <span className="text-sm text-gray-500">Khóa học #{course.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <div className="flex justify-between text-gray-600">
                  <span>Học viên: {course.totalStudents}</span>
                  <span>Môn học: {course.totalSubjects}</span>
                </div>
              </div>
            ))}
          </div>
        )
      
      case 'details':
        return selectedCourse && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">{selectedCourse.title}</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaUsers className="text-blue-500" />
                Danh sách học viên
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left">Họ tên</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Tiến độ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCourse.students.map(student => (
                      <tr key={student.id} className="border-b">
                        <td className="px-6 py-4">{student.name}</td>
                        <td className="px-6 py-4">{student.email}</td>
                        <td className="px-6 py-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{width: `${student.progress}%`}}></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaBook className="text-blue-500" />
                Danh sách môn học
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedCourse.subjects.map(subject => (
                  <div key={subject.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{subject.name}</h4>
                    <p className="text-gray-600">Thời lượng: {subject.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <FaChalkboardTeacher className="text-blue-500" />
            Quản lý khóa học
          </h1>
          {selectedCourse && (
            <button 
              onClick={() => {
                setSelectedCourse(null)
                setActiveTab('overview')
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Quay lại
            </button>
          )}
        </div>
        
        {renderContent()}
      </div>
    </div>
  )
}

export default DashboardINS