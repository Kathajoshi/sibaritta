
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);
  return (
    <div className='flex flex-col w-full max-w-[1642px] bg-neutral-800 max-md:max-w-full overflow-hidden'>
      <Navbar />
      <Home />
    </div>


  )
}
