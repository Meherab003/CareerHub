import Banner from "./Banner";
import CategoryList from "./CategoryList";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;