import Carousel from "./components/Carousel";
import Find from "./assets/FindYourNextAdventure.png"

function App() {
  return (
    <main className="h-screen w-full flex flex-col gap-8 items-center justify-center bg-[#21ACA7]">
      <img src={Find} alt="Find" height={200} width={600}/>
      <Carousel />
    </main>
  );
}

export default App;
