import React from 'react';
import { Box, Avatar } from "@mui/material";
import './StudentDetails.css';
import Typography from '@mui/joy/Typography';
import CourseCardList from '../components/CourseCardList';


function StudentDetails() {
  const student = {
    name: 'Full Name of Student',
    gpa: 1.5,
    imageUrl: '',
    CurrentLevel: 'Junior Software G3',
    
  };

  return (
    <Box sx={{ padding: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={student.imageUrl} sx={{ width: 128, height: 128, marginRight: 2 }} />
      <Box>
        <Typography variant="h4">{student.name}</Typography>
        <Typography variant="h5">{student.CurrentLevel}</Typography>
        <Typography variant="subtitle1">GPA: {student.gpa}</Typography>
      </Box>
      <Box sx={{ marginLeft: 'auto' }}>
        <div className="body">
          <div className="tabs">
            <input
              checked
              value="Courses"
              name="fav_category"
              id="courses"
              type="radio"
              className="input"
            />
            <label htmlFor="courses" className="label">Courses</label>

            <input
              value="Attendance"
              name="fav_category"
              id="attendance"
              type="radio"
              className="input"
            />
            <label htmlFor="attendance" className="label">Attendance</label>
          </div>
        </div>
      </Box>
    </Box>
   <CourseCardList/>
    
  </Box>
  );
}

export default StudentDetails;