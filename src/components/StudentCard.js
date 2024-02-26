import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

function StudentCard() {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: '100%', // Make the card horizontally wider
        maxWidth: 600, // Limit maximum width for better responsiveness
        margin: '20px auto', // Add margin-top and center horizontally
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src=""
          srcSet=""
          loading="lazy"
          alt="Picture of Student"
        />
      </AspectRatio>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography level="title-lg" id="card-description">
            Full Name of Student
          </Typography>
          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: 'text.tertiary' }}
            >
              Cohort:
            </Link>{" "}
            January 2024
          </Typography>
          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: 'text.tertiary' }}
            >
              GPA:
            </Link>{" "}
            3.8
          </Typography>
          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: 'text.tertiary' }}
            >
              CGPA:
            </Link>{" "}
            3.9
          </Typography>
        </div>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none', alignSelf: 'flex-end' }} // Align the chip to the right
        >
          See Details
        </Chip>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
