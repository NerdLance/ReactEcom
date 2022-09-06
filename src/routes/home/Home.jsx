import { Outlet } from 'react-router-dom'

import Directories from '../../components/directories/Directories'

const Home = () => {
  return (
    <div>
        <Outlet />
        <Directories />
    </div>
  );
}

export default Home;
