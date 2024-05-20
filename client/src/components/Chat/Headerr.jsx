import { Avatar, Box, Typography, IconButton, Divider, Stack, } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone} from 'phosphor-react'
import React from 'react';


import StyledBadge from '../StyledBadge';


const Headerr = () => {
    
    return (
        <Box p={2} sx={{ width: '100%', backgroundColor: '#F8FAFF' , boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}>
            <Stack alignItems={'center'} direction='row' justifyContent={'space-between'}
                sx={{ width: '100%', height: '100%' }}>
                <Stack direction={'row'} spacing={2}>
                    <Box>
                        <StyledBadge overlap="circular"
                            anchorOrigin={{ // position
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            variant="dot">
                            <Avatar />
                        </StyledBadge>

                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>
                            rassim
                        </Typography>
                        <Typography variant='caption'>
                            Online
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={3}>
                    
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton >
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Headerr