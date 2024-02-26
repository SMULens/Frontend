import React from 'react'
import StudentCard from './StudentCard';

function StudentCardList() {
    const students = [
        { id: 1, name: 'John Doe', cohort: 'January 2024', gpa: 3.8, cgpa: 3.9 },
        { id: 2, name: 'Jane Smith', cohort: 'February 2024', gpa: 3.7, cgpa: 3.8 },
        // Add more student data as needed
      ];
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} {...student} /> // Render StudentCard for each student
      ))}
    </div>
  )
}

export default StudentCardList
