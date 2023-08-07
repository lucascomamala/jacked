import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
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
          value=''
          onChange={(e) => {}}
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
          }}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises
