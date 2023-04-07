import React  from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
             Travel Diary
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
              
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to='/login'>
              <Button  variant="contained"> START PLANNING</Button>
              </Link>
             
             : 
             <Typography 
             component="h6"
              variant="h6"
              align="center"
              color="text.secondary"
              gutterBottom
             > Welcome {data.username}

             </Typography>
             }
             <Link style={{paddingLeft: 1, textDecoration: 'none'}} to='/view'>
              <Button   component="h6"
             
           
              sx={{ my: 0.1, mx: 1 }}  variant="outlined">Explore</Button>
              </Link>
              
            </Stack>
            <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '9%',
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