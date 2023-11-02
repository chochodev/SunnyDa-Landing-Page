import { Link } from 'react-router-dom';
import '../../assets/css/components/footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div className="logo_container grid_1">
        <img src="/images/logo.svg" alt="logo" className='logo_img' />
      </div>
      <div className="company_links grid_2">
        <p className="heading">Company</p>
        <div className="links">
          <Link to='' className='link'>Home</Link>
          <Link to='' className='link'>About Us</Link>
          <Link to='' className='link'>Contact Us</Link>
        </div>
      </div>
      <div className="company_links grid_3">
        <p className="heading">Contact</p>
        <div className="links">
          <Link to='' className='link'>Instagram</Link>
          <Link to='' className='link'>Twitter</Link>
        </div>
      </div>
      <div className="newsletter_container grid_4">
        <p className="heading">Join our newsletter</p>
        <div className="newsletter_form">
          <input type="email" placeholder='Email' className="email" />
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer;