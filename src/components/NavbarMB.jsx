import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import { Grid } from '@mui/material';



const NavbarMB = () => {
   const payotu = purple[500];

    return (
        
        <div className='navbar'>
        <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
            <a href={'/'}><HomeIcon color="payutu"  sx={{fontSize: 50}}/></a>
            <a href={'/dashboard/:id'}><AnalyticsIcon color="secondary" sx={{ fontSize: 50 }} /></a>
            <a href={'/activity'}><ViewListRoundedIcon color="secondary"  sx={{fontSize: 50}}/></a>
            <a href={'/profile'}><ManageAccountsIcon color="secondary"  sx={{fontSize: 50}}/></a>

            </Grid>
        </div>

        // <div className="navbar">
        //     <a href={'/'}><img src="https://cdn-icons-png.flaticon.com/128/9385/9385212.png" className="w-12 bg-red-500 rounded-3xl hover:scale-110 hover:bg-sky-200" alt="home logo" /></a>
        //     <a href={'/user/:id'}><img src={AnalyticsIcon} className="w-12 bg-blue-500 rounded-2xl hover:scale-110 hover:bg-sky-200" alt="dashboard" /></a>
        //     <a href={'/activity'}><img src="https://cdn-icons-png.flaticon.com/128/8888/8888175.png" className="w-12 bg-green-500 rounded-2xl hover:scale-110 hover:bg-sky-200" alt="activity logo" /></a>
        //     <a href={'/profile'}><img src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png" className="w-12 bg-indigo-500 rounded-3xl hover:scale-110 hover:bg-sky-200" alt="profile logo" /></a>
        // </div>
    )
}

export default NavbarMB;