import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-slate-200 p-2 mt-2 mb-2">
            <button className="btn btn-secondary mr-2"> Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link  className="mr-10" to='/'>I can be a React component, multiple React components, or just some text......</Link>
                <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;