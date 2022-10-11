import './header.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Header = () => {
    return (
    <div className='header'>   
        <div className='header-title'>
            <AcUnitIcon />
            DRCHEY CRYPTO
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    Our Services
                </li>
                <li>
                    Technologies
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Sponsors
                </li>
            </ul>
        </div>
        <div className='header-menu'>
            Menu
        </div>
    </div>
  )
}

export default Header