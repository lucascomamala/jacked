import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='40px'>
      <Stack gap='10px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='subtitle2' color='#b7b7b7'>© 2023 All rights reserved</Typography>
      </Stack>
    </Box>
  )
}

export default Footer;
