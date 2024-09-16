import { Carousel } from './Component/Carousel';
import {slides} from './Component/carouselData.json';
import Navbar from './Component/Navbar'
import Top_Picks from './Component/Top_Picks';
import Top_video from './Component/Top_video';
import './index.css'
function App() {
  return (
    <>
    <div className="">
    <Navbar />
    <Carousel data={slides} />
    <Top_Picks/>
    <Top_video/>
    </div>
    </>
  );
}

export default App;