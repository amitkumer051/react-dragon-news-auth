/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="card card-compact  bg-base-100 mt-4 mb-6">
            <figure><img src={image_url} alt="" /></figure>
            <div className="">
                <h2 className="card-title text-justify mt-2">{title}</h2>
                <div className="text-justify">
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-semibold">Read More...</Link></p> : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;