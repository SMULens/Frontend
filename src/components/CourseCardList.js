import React from 'react'
import CourseCard from './CourseCard'
import { Box, Avatar } from "@mui/material";

function CourseCardList() {
    const courses = [
        { name: 'Differential', MidtermGrade: '30',  FinalGrade:'40', retakes:2, absences:8 },
        { name: 'Physics',  MidtermGrade: '30',  FinalGrade:'40' ,retakes:0, absences:10 },
        { name: 'Computer Science',  MidtermGrade: '30',  FinalGrade:'40', retakes:3, absences:12 }
        
    ]
  return (
    <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {courses.map((course, index) => (
         <CourseCard course={course}/>
      ))}
    </Box> 
  )
}

export default CourseCardList
