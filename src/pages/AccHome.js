import React from 'react'
import StudentCardList from '../components/StudentCardList'
import Filter from '../components/Filter'
import { Container, Grid, Typography } from "@mui/material";
function AccHome() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Directory
      </Typography>
      <Filter/>
      <StudentCardList/>
    </Container>
  )
}

export default AccHome
