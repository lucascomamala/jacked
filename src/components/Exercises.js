import { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indeOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indeOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indeOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart, setExercises]);

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
        {currentExercises.map( (exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises;
