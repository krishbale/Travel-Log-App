import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch} from '../utils/hooks';
import { Box, Button, CardMedia, Container, Stack, Typography } from '@mui/material'

function HomeLayout  () {
  const history = useNavigate()
    const { data } = useFetch('/api/getdata')
   
  return (
    <>
  
  
    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
         
          
        
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Travel With LOG 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Build, organize, and map your itineraries in a free travel app designed for vacations & road trips

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            { data.username===undefined ? 
              <Button href='/login' variant="contained">START PLANNING</Button>
             : 
             <Typography></Typography>}
              <Button variant="outlined"> Welcome {data.username}</Button>
            </Stack>
            <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://cdn.stocksnap.io/img-thumbs/280h/OLTZXDAPWT.jpg"
                    alt="random"
                  />
          
          </Container>
        </Box>
       
        
        
        
    
   

  
  
  

    </>
   
    
  )
}

export default HomeLayout