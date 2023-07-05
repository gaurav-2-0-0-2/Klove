import About from "./component/About";
import Body from "./component/Body";
import Navbar from "./component/Navbar";
import Overview from "./component/Overview";
import { Nunito } from 'next/font/google';

const nunito = Nunito({ 
    subsets: ['latin'], 
    weight: ['400', '700'],
    variable: '--font-nunito'
});

 export default function Home(props) {

  return (
    <div className={`${nunito.variable} font-sans2`}>
      <Navbar/>
      <Body/>
      <Overview/>
      <About/>
    </div>
  )



}

