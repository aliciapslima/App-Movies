import Category, { categories, filterCategory } from "../../components/Category";

import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Conteiner>
        {
          categories.map((category, index) => 
          <Category category={category}>
            {
              filterCategory(index).map((video) => <Card id={video.id} key={video.id} />
              )}
          </Category>
        )}        
      </Conteiner>
      <Footer />
    </>
    );
}

export default Home;
