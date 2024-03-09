import React, { useState } from 'react';
import { FormControl, Input, FormLabel, Button, IconButton, Paper, Tooltip, Grid } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SortIcon from "@mui/icons-material/Sort";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { styled } from '@mui/material/styles';

const FilterPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  borderRadius: "20px",
  width: "80%",
  margin: "30px auto",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

function Filter() {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState(''); // Initialize as empty string instead of null

  const handleSortBy = (type) => {
    setSortBy(prevSortBy => (prevSortBy === type ? `${type}_desc` : type));
  };

  const clearFilters = () => {
    setSearchText('');
    setSortBy(''); // Reset to empty string
  };

  return (
    <FilterPaper elevation={3}>
      <FormControl variant="outlined" size="small" sx={{ width: "300px" }}>
        <FormLabel>Search</FormLabel>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter student name"
          endAdornment={<IconButton onClick={() => setSearchText('')}><FilterListOffIcon /></IconButton>}
        />
      </FormControl>
      <Tooltip title="Sort by GPA" placement="bottom">
        <IconButton onClick={() => handleSortBy('gpa')} color={sortBy.includes('gpa') ? 'primary' : 'default'}>
          <SortIcon />
          {sortBy === 'gpa' && <ArrowUpwardIcon />}
          {sortBy === 'gpa_desc' && <ArrowDownwardIcon />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Clear Filters" placement="bottom">
        <IconButton onClick={clearFilters}>
          <FilterListOffIcon />
        </IconButton>
      </Tooltip>
    </FilterPaper>
  );
}

export default Filter;
