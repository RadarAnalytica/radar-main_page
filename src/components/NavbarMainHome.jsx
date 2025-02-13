import RadarAnaliticaMedium from "../pages/images/RadarAnaliticaMedium.svg";
import '../App.css';

const NavbarMainHome = () => {
  return (
    <div className='page-header'>
      <div className='wide_container page-container mobile-container'>
        <img
          src={RadarAnaliticaMedium}
          alt='logo'
          // onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
      </div>

    </div>
  );
};
export default NavbarMainHome;
