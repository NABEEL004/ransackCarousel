import Chinatown from "../assets/Chinatown.webp";
import FortCanning from "../assets/FortCanning.jpg";
import LittleIndia from "../assets/LittleIndia.jpg";
import MarinaBay from "../assets/MarinaBay.webp";
import Sentosa from "../assets/Sentosa.jpg";
import Somerset from "../assets/Somerset.webp";
import Grass from "../assets/grassBorder.png";
import Overhead from "../assets/Overhead.png";

const InnerBackground = ({ index }: { index: number }) => {
  const backgroundImage = [
    Chinatown,
    LittleIndia,
    MarinaBay,
    Sentosa,
    FortCanning,
    Somerset,
  ];

  return (
    <div className="w-full h-screen">
      <img src={Grass} alt="grass" className="fixed bottom-0 z-50" />
      <img src={Overhead} alt="overhead" className="fixed top-0 z-50" />
      <div
        className={`flex absolute h-[35rem] top-0 left-0 overflow-x-scroll transition-transform duration-1000 ease-in-out`}
        style={{
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        {backgroundImage.map((image, index) => (
          <div
            key={index}
            className="w-screen h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="h-full w-full bg-white bg-opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnerBackground;
