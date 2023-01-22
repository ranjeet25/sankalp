import Container from "react-bootstrap/Container";
import "../../Assets/CSS/style.css";
import hero from "../../Assets/images/hero-img.png";
import About from "./About";

import Navbar from "../Navbar";

function Hero() {
  return (
    <div>
      <Navbar></Navbar>

      <Container className="main_container">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={hero}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                GRIEVANCE SYSTEM
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex flex-col justify-center  lg:flex-row">
                <button className=" inline-flex text-white bg-[#8338ec] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  File a Grievance
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <About></About>
    </div>
  );
}

export default Hero;
