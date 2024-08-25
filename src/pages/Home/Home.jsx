
import Banner from '../../components/Header/Banner/Banner';
import Phones from '../../components/Phones/Phones';
import useGetPhones from '../../hook/useGetPhones';
const Home = () => {

    const [phones] = useGetPhones();

    return (
        <div>
           <Banner></Banner>
           <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;
