import { useEffect, useState } from 'react';
import '../../assets/css/components/navbar.css';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => setOpenNav(false);

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [openNav]);

  return (
    <>
    <div id='navbar'>
      <div className='logo_container'>
        <img src='/images/logo.svg' alt='logo' className='logo_img' />
      </div>
      <button className='menu_button' onClick={()=>setOpenNav(!openNav)}>
        {!openNav? <RiMenu4Fill className='icon'/>:
        <RiCloseFill className='icon'/>}
      </button>
      <nav className="nav_links">
        <Link to='hero' smooth={true} offset={-100} duration={500} className='link'>Home</Link>
        <Link to='section_3' smooth={true} offset={-80} duration={500} className='link'>About</Link>
        <Link to='' className='link'>Contact Us</Link>
      </nav>

      {openNav && <div className={`small_nav_container ${openNav? 'open':''}`}>
        <div className="small_nav">
          {/* <div className="header">
            <img src='./src/assets/logo.svg' alt='logo' className='logo_img' />
          </div> */}
          <nav className="links">
            <Link to='hero' smooth={true} offset={-100} duration={500} className='link' onClick={()=>setOpenNav(false)}>Home</Link>
            <Link to='section_3' smooth={true} offset={-80} duration={500} className='link' onClick={()=>setOpenNav(false)}>About</Link>
            <Link to='' className='link' onClick={()=>setOpenNav(false)}>Contact Us</Link>
          </nav>
        </div>
      </div>}
    </div>
    {openNav && <div className='navbar_background' onClick={()=>setOpenNav(false)}></div>}
    </>
  )
}

export default Navbar;