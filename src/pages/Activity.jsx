import React from 'react'
import Layout from '../Layout.jsx'
import ActivityForm from '../components/ActivityForm.jsx'

//This wraper is needed to use the date-time picker in the ActivityForm
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';


const Activity = () => {

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout>
            <ActivityForm />
        </Layout>
    </LocalizationProvider>

    )
}

export default Activity