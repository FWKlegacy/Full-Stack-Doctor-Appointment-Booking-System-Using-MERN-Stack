import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecilialityMenu from "../components/SpecilialityMenu";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecilialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
