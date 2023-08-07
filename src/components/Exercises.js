import { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box 
      id="exercises"
      sx={{mt: { lg: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack 
        direction='row' 
        sx={{ gap: {xs: '50px', lg: '110px'}}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {exercises.map( (exercise, idx) => (
          <ExerciseCard key='idx' exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises;
