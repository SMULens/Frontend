import React from 'react'
import StudentCard from './StudentCard';

function StudentCardList() {
    const students = [
        { id: 1, name: 'John Doe', currentLevel: 'Junior Software Engineering G3', gpa: 1.5, cgpa: 1 },
        { id: 2, name: 'Jane Smith', currentLevel: 'Freshman F2', gpa: 2.0, cgpa: 1.5 },
        
      ];
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id}  student={student} /> // Render StudentCard for each student
      ))}
    </div>
  )
}

export default StudentCardList
