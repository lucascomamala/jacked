import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);
      
      const searchedExercises = exercisesData.filter( exercise => 
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' mb='50px' textAlign='center' sx={{ fontSize: { xs: '30px', lg: '44px'}}}>
        Awesome exercises you <br /> should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: {xs: '350px', lg: '1170px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type='text'
        />
        <Button className="search-btn" 
          sx={{ 
            bgcolor: '#ff2625', 
            color: '#fff', 
            textTransform: 'none', 
            width: {xs: '80px', lg: '175px'}, 
            fontSize: {xs: '14px', lg: '20px'},
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises;
