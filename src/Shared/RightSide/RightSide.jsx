import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { } from 'react-icons/ai';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSide = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Login With</h2>
            <div className='mb-10'>
                <div className='text-center mx-auto mb-2'>
                    <button className='w-full flex btn btn-outline gap-1'><FcGoogle></FcGoogle> google</button>
                </div>
                <div className='text-center mx-auto'>
                    <button className='w-full flex btn btn-outline gap-1'><AiFillGithub></AiFillGithub> Git Hub</button>
                </div>
            </div>
            <div className='mb-10'>
                <h2 className="text-2xl font-semibold mb-4 ">Find Us on</h2>
                <div>
                    <a className='flex items-center gap-3 p-3 rounded-t-md border text-lg' href=""><FaFacebook></FaFacebook> Facebook</a>
                </div>
                <div>
                    <a className='flex items-center gap-3 p-3 border-x text-lg' href=""><FaTwitter></FaTwitter> Twitter</a>
                </div>
                <div>
                    <a className='flex items-center gap-3 p-3 border rounded-b-md text-lg' href=""><FaInstagram></FaInstagram> Instagram</a>
                </div>
            </div>
            <div className='mb-10 space-y-4'>
                <h2 className="text-2xl font-semibold mb-4 ">Q-Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                </div>
                <div>
                    <img src={qZone2} alt="" />
                </div>
                <div>
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>

    );
};

export default RightSide;