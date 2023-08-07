import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name}) => {

  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: { xs: '20px', lg: '100px' }}} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
          gap: {xs: '0', lg: '0 110px'},
          flexDirection: { lg: 'row' },
        }}  
      >
        {exerciseVideos.slice(0, 6).map((item, idx) => (
          <a
            key={idx}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} loading='lazy' />
            <Box>
              <Typography variant='h5' color='#000'>{item.video.title}</Typography>
              <Typography variant='subtitle2' color='#b7b7b7'>{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
