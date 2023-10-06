import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSide/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSide from "../../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useState } from "react";

const Home = () => {
    const news = useLoaderData();
    const [cards, setCards] = useState(3);

    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className="md:col-span-2 ">
                    <h2 className="text-lg font-semibold">Dragon News Home</h2>
                    {
                        news.slice(0, cards).map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                    <div className={`mx-auto text-center mb-4 ${cards === news.length && 'hidden'}`}>
                        <button onClick={() => setCards(news?.length)} className="btn btn-primary">See all</button>
                    </div>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;