import { Box, IconButton, Stack, Typography } from
  '@mui/material'
import { CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { ChatList } from '../../data/index.jsx';
import ChatElement from '../../components/ChatElement.jsx';

const Chats = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      position: "relative", width: 320, height: "100%",
      backgroundColor: "#F8FAFF" ,
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
    }}>
      <Stack p={1} spacing={2} sx={{ height: "70vh" }}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Typography variant='h5'>
            Chats
          </Typography>
          
        </Stack>

        <Stack sx={{ width: "100%" }}>
         
        </Stack>


        <Stack className='scrollbar' spacing={2} direction='column' sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>


          <Stack spacing={2.4}>

            
          </Stack>

        </Stack>
      </Stack>

    </Box>
  )
}

export default Chats