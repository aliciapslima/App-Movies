import Banner from "./components/Banner";
import Card from "./components/Card";
import Conteiner from "./components/Conteiner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from  './json/db.json';

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Conteiner>
      <h2>Geografia</h2>
      <section className="cards">
        { videos.map((video) => <Card id={video.id} key={video.id} />)}
      </section>
      </Conteiner>
      <Footer />
    </>
    );
}

export default App;
