import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
import react, { useState } from 'react';

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 20,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    height: 48,
    // padding: '0 30px',

    "&.MuiButton-root": {
      // background: 'orange important'
    },
  },
});

function SelectLabels() {


  const classes = useStyles();
  const [user, setUser] = useState(0)

  const handleChange = (e) => {
    console.warn(e.target.value)
    setUser(e.target.value)
  }

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user}
          label=""
          onChange={handleChange}
        >
          <MenuItem value={0}>Select</MenuItem>
          <MenuItem value={1}>Portal user</MenuItem>
          <MenuItem value={2}>Law firm admin</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default SelectLabels;
