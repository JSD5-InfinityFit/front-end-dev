import Layout from '../Layout.jsx';
import ActivityList from '../components/ActivityList.jsx';
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSocialLogin } from '../utils/auth.js';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const providers = ["google", "facebook", "github"]; 
      for (const provider of providers) {
        try {
          const res = await handleSocialLogin(provider);
          const { token } = res;
          if (token ) {
            navigate("/activity");
            return; 
          } else {
            const idtoken = localStorage.getItem("token");
            if (idtoken) {
              navigate("/activity");
            } else {
              navigate("/");
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    checkLoginStatus();
  }, [navigate]);

  return (
    <Layout>
      Now Loading ...
    </Layout>
  )
}

export default Home
