import React, { useState } from 'react';
import { FormControl, Input, FormLabel, Button } from "@mui/joy";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SortIcon from "@mui/icons-material/Sort";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { IconButton, Paper } from "@mui/material";

function Filter() {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState(null); // null = no sorting, 'gpa' = sort by GPA ascending, 'gpa_desc' = sort by GPA descending

  const handleSortBy = (type) => {
    if (type === sortBy) {
      // If the same sorting type is clicked again, toggle between ascending and descending
      setSortBy(type === 'gpa' ? 'gpa_desc' : 'gpa');
    } else {
      // If a different sorting type is clicked, default to ascending order
      setSortBy('gpa');
    }
  };

  const clearFilters = () => {
    setSearchText('');
    setSortBy(null);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "20px",
        width: "70%",
        margin: "60px auto",
        height: "75px",
        backgroundColor: "#FBFAF5",
        paddingLeft: "35px",
        paddingRight: "20px",
      }}
      component={"div"}
    >
      <FormControl size="md" sx={{ width: "350px", marginRight: "80px" }}>
        <FormLabel size="sm">Search</FormLabel>
        <Input 
          size="sm" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          placeholder="Enter student name"
        />
      </FormControl>
      <div>
        <FormLabel size="sm " sx={{ marginBottom: "8px" }}>
          Sort by GPA
        </FormLabel>
        <IconButton onClick={() => handleSortBy('gpa')} color={sortBy === 'gpa' ? 'success' : 'neutral'}>
          <SortIcon />
          {sortBy === 'gpa' && <ArrowUpwardIcon />}
          {sortBy === 'gpa_desc' && <ArrowDownwardIcon />}
        </IconButton>
      </div>
      
      <IconButton onClick={clearFilters}>
        <FilterListOffIcon />
      </IconButton>
    </Paper>
  )
}

export default Filter;
