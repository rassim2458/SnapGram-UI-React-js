import {  Box, Stack} from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";

import Footer from './Footer.jsx';
import Message from './Message.jsx';
import Headerr from './Headerr.jsx';

const Conversation = () => {
    const theme = useTheme();
  return (
    <Stack height={'100%'} maxHeight={'70vh'} width={'auto'}>

        {/* Chat header */}
       <Headerr />
        {/* Msg */}
        <Box className='scrollbar' width={"100%"} sx={{flexGrow:1, height:'100%', overflowY:'scroll'}}>
        <Message />
        </Box>
        {/* Chat footer */}
       <Footer/>
    </Stack>
  )
}

export default Conversation