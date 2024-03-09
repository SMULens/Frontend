import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import SchoolIcon from '@mui/icons-material/School'; 
import GradeIcon from '@mui/icons-material/Grade';

function StudentCard({student}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '20px auto',
        '&:hover': { boxShadow: 'md', borderColor: 'primary.dark' },
        backgroundColor: '#FBFAF5', 
        borderRadius: '16px', 
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90, borderRadius: '8px', overflow: 'hidden' }}>
        <img
          src="student-placeholder.jpg" 
          loading="lazy"
          alt="Picture of Student"
        />
      </AspectRatio>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2 }}>
        <div>
          <Typography level="h6" id="card-description" sx={{ fontWeight: 'bold' }}>
            {student.name}
          </Typography>
          <Typography level="body2" aria-describedby="card-description" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SchoolIcon fontSize="small" /> {student.currentLevel}
          </Typography>
          <Typography level="body2" aria-describedby="card-description" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <GradeIcon fontSize="small" />GPA:{student.gpa}
          </Typography>
          <Typography level="body2" aria-describedby="card-description" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <GradeIcon fontSize="small" /> CGPA: {student.cgpa}
          </Typography>
        </div>
        <Link to={`/studentCourses/${student.id}`} style={{ textDecoration: 'none',alignSelf: 'flex-end', }}>
          <Chip
            variant="solid"
            color="primary"
            size="sm"
            sx={{  cursor: 'pointer' }}
          >
            See Details
          </Chip>
        </Link>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
