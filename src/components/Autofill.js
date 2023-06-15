import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@mui/material/IconButton'

export default function Autofill({productList, setProductsToDisplay}) {
  const defaultProps = {
    options: productList,
    getOptionLabel: (option) => option.title,
  };

  const [value, setValue] = React.useState(null);
  

  const handleClick = () =>{
    let displayArray =[];
    console.log("search value", value);
    displayArray.push(value)
    setProductsToDisplay(displayArray);
  }

  return (
    <Stack spacing={1} sx={{ width: 300, margin:'20px auto' }}>

       <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} 
          label="Mobile Phone" 
          variant="standard" 
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end" onClick ={handleClick}>
              <IconButton >
                <SearchIcon />
               </IconButton>
              </InputAdornment>
            )
          }}
          />
        )}
      />
    </Stack>
  );
}

