import React from "react";
import Chats from "./ChatList";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Chat";
import { useTheme } from "@mui/material/styles";




const GeneralApp = () => {
  const theme = useTheme();
// access our store inside component
  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      {/* Chats */}
      <Chats />

      <Box sx={{ height: '100%', width: 'calc(100vw - 500px)',
       backgroundColor: '#F0F4FA' }}>
      {/* Conversation */}
      <Conversation />
      </Box>
      {/* Contact */}
      
     
    </Stack>
  );
};

export default GeneralApp;
