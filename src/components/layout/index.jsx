/* eslint-disable */
import Navbar from '../navbar/index';
import Footer from '../footer/index';
import '../../assets/css/components/main_layout.css';


const MainLayout = ({ children }) => {
  return (
    <div id='main_layout'>
      <Navbar />
      { children } 
      <Footer />
    </div>
  )
}

export default MainLayout;