// import HeroLogo from "/hero.png";
import "./App.css";
import Clases from "./classe/clases";
import Footer from "./footer";
import HeroSection from "./hero/heroSection";
import MainContent from "./mainbody";
import MobileMenu from "./reuseAbleComponents/mobileMenue";

function App() {
  return (
    <>
      <div className="heroImage ">
        <MobileMenu />

        <div className="mainPadding paddingButtom">
          <HeroSection />
        </div>
      </div>
      <main>
        <div>
          <MainContent />
        </div>
        <div>
          <Clases />
        </div>
        <div>
          <Footer/>
        </div>
      </main>
    </>
  );
}

export default App;
