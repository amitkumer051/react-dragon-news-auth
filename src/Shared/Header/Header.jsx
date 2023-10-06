import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='mx-auto mt-3' src={logo} alt="" />
            <p className='text-gray-500 text-sm'>Journalism Without Fear or Favour</p>
            <p className='text-base'>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;