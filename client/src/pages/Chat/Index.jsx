import React from "react";
import Chats from "./ChatList";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Chat";
import { useTheme } from "@mui/material/styles";




const GeneralApp = () => {
  const theme = useTheme();
// access our store inside component
  return (
    <div className="fixed top-20 right-3">
    <Stack direction='row' sx={{ width: '90%' }}>
      {/* Chats */}
      <Chats />

      <Box sx={{ height: '100%', width: 'calc(100vw - 500px)',
       backgroundColor: '#F0F4FA' }}>
      {/* Conversation */}
      <Conversation />
      </Box>
      {/* Contact */}
      
     
    </Stack></div>
  );
};

export default GeneralApp;
