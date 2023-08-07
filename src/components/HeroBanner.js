import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { xs: '70px', lg: '212px' }, ml: { sm: '50px' } }}
      position='relative'
      p='20px'
    >
      <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
        Jacked Fitness club
      </Typography>
      <Typography fontWeight='700' mb='23px' mt='30px' sx={{ fontSize: { xs: '40px', lg: '44px' }}}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight='600' color='#ff2625' sx={{ opacity: 0.1, display: {xs: 'none', lg: 'block'} }} fontSize='200px'>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
