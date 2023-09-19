import Layout from '../Layout.jsx';
import ActivityList from '../components/ActivityList.jsx';
import Activitycard from '../components/Activitycard.jsx';
const Home = () => {

  return (
    <Layout>
      <ActivityList/>
      <Activitycard/>
    </Layout>
  )
}

export default Home
