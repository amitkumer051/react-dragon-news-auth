import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCalendar } from 'react-icons/ci';
import moment from 'moment';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">All Category</h2>
            <div className="mb-4">
                {
                    categories?.map(category => <Link
                        className="block px-8 py-3 hover:bg-slate-300 rounded-md hover:text-black font-medium text-gray-500"
                        to={`/category/${category.id}`}
                        key={category.id}
                    >{category.name}</Link>)
                }
            </div>
            <div className="space-y-4  mb-4">
                <img src={img1} alt="" />
                <h2 className="text-base font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex items-center ">
                    <p className="font-semibold">Sports</p>
                    <div className="flex items-center ml-6 gap-1 ">
                        <CiCalendar className="text-xl"></CiCalendar>
                        <p>{moment().format("MMM D YYYY")}</p>
                    </div>
                </div>
            </div>
            <div className="space-y-4 mb-4">
                <img src={img2} alt="" />
                <h2 className="text-base font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex items-center  ">
                    <p className="font-semibold">Sports</p>
                    <div className="flex items-center ml-6 gap-1 ">
                        <CiCalendar className="text-xl"></CiCalendar>
                        <p>{moment().format("MMM D YYYY")}</p>
                    </div>
                </div>
            </div>
            <div className="space-y-4 mb-4">
                <img src={img3} alt="" />
                <h2 className="text-base font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex items-center  ">
                    <p className="font-semibold">Sports</p>
                    <div className="flex items-center ml-6 gap-1 ">
                        <CiCalendar className="text-xl"></CiCalendar>
                        <p>{moment().format("MMM D YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;