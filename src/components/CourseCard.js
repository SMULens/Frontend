import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

function CourseCard({course}) {
  return (
    <Card
    size="lg"
    variant="plain"
    orientation="horizontal"
    sx={{
      textAlign: 'center',
      maxWidth: '100%',
      width: '70%', 
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
      marginBottom: '20px'
     
    }}
  >
    <CardOverflow
      variant="solid"
      color="primary"
      sx={{
        flex: '0 0 200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: 'var(--Card-padding)',
        
      }}
    >
      <Typography fontSize="xl3" fontWeight="l" textColor="#fff">
        {course.name}
      </Typography>
     
    </CardOverflow>
    <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
      
      
      <CardContent>
        <Typography level="title-lg">Informations</Typography>
        <Typography fontSize="sm" sx={{ mt: 0.5 }}>
        Midterm: {course.MidtermGrade}
        </Typography>
        <Typography fontSize="sm" sx={{ mt: 0.5 }}>
         Final: {course.FinalGrade}
        </Typography>
        <Typography fontSize="sm" sx={{ mt: 0.5 }}>
         Number of absences: {course.absences}
        </Typography>
      </CardContent>
      {course.retakes === 0 ? (
      <Button
        variant="outlined"
        color="inherit"
        disabled
        sx={{
          '--variant-borderWidth': '2px',
          borderRadius: 40,
          borderColor: 'inherit.500',
          mx: 'auto',
          border: '1px solid #000', // Add this line to add a border
          cursor: 'default', 
          color: 'darkgrey'
        }}
      >
        Retakes: {course.retakes}
      </Button>
      ) : (
        <Button
        variant="outlined"
        color="danger"
        sx={{
          '--variant-borderWidth': '2px',
          borderRadius: 40,
          borderColor: 'danger.500',
          mx: 'auto',
          color: 'red'
        }}
      >
        Retakes: {course.retakes}
      </Button>
    )}
    </CardContent>
  </Card>
  )
}

export default CourseCard
