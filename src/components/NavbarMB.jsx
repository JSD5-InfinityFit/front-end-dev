import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import { Grid } from '@mui/material';



const NavbarMB = () => {

    return (
        
        <div className='navbar'>
        <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
            <a href={'/'}><HomeIcon  color="secondary" sx={{ fontSize: 50 }} /></a>
            <a href={'/dashboard'}><AnalyticsIcon color="secondary" sx={{ fontSize: 50 }} /></a>
            <a href={'/activity'}><ViewListRoundedIcon color="secondary"  sx={{fontSize: 50}}/></a>
            <a href={'/profile'}><ManageAccountsIcon color="secondary"  sx={{fontSize: 50}}/></a>
            </Grid>
        </div>
    )
}

export default NavbarMB;