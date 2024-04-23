import Banner from "./components/Banner";
import Conteiner from "./components/Conteiner";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Conteiner>
        <h1>Hello World!</h1>
        <p>Welcome to the app.</p>
      </Conteiner>
      <Footer />
    </>
    );
}

export default App;
