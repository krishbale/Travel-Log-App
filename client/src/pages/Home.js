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
          
        { data.username===undefined ? <Typography> Please Login  </Typography> : <Typography>{data.username}</Typography>}
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The Lightening Hotel
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Striking our service at Lightening speed

            </Typography>
            <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://cdn.stocksnap.io/img-thumbs/280h/OLTZXDAPWT.jpg"
                    alt="random"
                  />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
           <Button variant="contained">Book Now</Button>
              <Button variant="outlined">Contact us</Button>
            </Stack>
          </Container>
        </Box>
       
        
        
        
    
   

  
  
  

    </>
   
    
  )
}

export default HomeLayout