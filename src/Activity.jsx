import React from 'react'
import Layout from './Layout.jsx'
import Form from './Form'
import ActivityCard from './components/Activitycard.jsx'
import Exercise_List from './Exercise_List.jsx'


const Activity = () => {

    return (
        <Layout>
            <h1>Activity Page</h1>
            {/* <Exercise_List/> */}
            {/* <Form/> */}
            <ActivityCard/>
            
        </Layout>
    )
}

export default Activity