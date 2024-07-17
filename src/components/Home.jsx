import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import arrow from '../assets/arrow.svg'

import GastronomiaBg from '../assets/GastronomíaBg.png';
import DrinksCatasBg from '../assets/DrinksCatasBg.png';
import ServicioConciergeBg from '../assets/ServicioConciergeBg.png';
import VuelosprivadosBg from '../assets/VuelosprivadosBg.png';

import GastronomíaHero from '../assets/GastronomíaHero.png'
import DrinksCatasHero from '../assets/DrinksCatasHero.png'
import ServicioConciergeHero from '../assets/ServicioConciergeHero.png'
import VuelosprivadosHero from '../assets/VuelosprivadosHero.png'

import GastronomíaIcan from '../assets/GastronomíaIcan.svg'
import DrinksCatasIcan from '../assets/DrinksCatasIcan.svg'
import BienestarIcan from '../assets/BienestarIcan.svg'
import VuelosprivadosIcan from '../assets/VuelosprivadosIcan.svg'

const backgroundImages = [
    GastronomiaBg,
    DrinksCatasBg,
    ServicioConciergeBg,
    VuelosprivadosBg,
];
const buttonsData = [
    {
        title: 'Gastronomía',
        image: GastronomíaIcan,
    },
    {
        title: 'Drinks & Catas',
        image: DrinksCatasIcan,
    },
    {
        title: 'Bienestar',
        image: BienestarIcan,
    },
    {
        title: 'Vuelos privados',
        image: VuelosprivadosIcan,
    },
];

const herosData = [
    {
        content: 'Descubre la variedad gastronómica que ofrecemos',
        image: GastronomíaHero,
    },
    {
        content: 'Descubre la variedad de Catas que ofrecemos',
        image: DrinksCatasHero,
    },
    {
        content: 'Hacemos realidad cada solicitud especial que tengas para tus eventos privados',
        image: ServicioConciergeHero,
    },
    {
        content: 'Descubre la variedad de vuelos que ofrecemos',
        image: VuelosprivadosHero,
    },
];

export default function Home() {
    const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);
    const [heroData, setHeroData] = useState(herosData[0]);
    const [animate, setAnimate] = useState(false);
    const [direction, setDirection] = useState('right');

    const handleButtonClick = (index) => {
        setAnimate(true);
        setDirection('right');
        setTimeout(() => {
            setBackgroundImage(backgroundImages[index]);
            setHeroData(herosData[index]);
            setAnimate(false);
            setDirection('left');
        }, 800);
        AOS.refresh();
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
        });
        AOS.refresh();
    }, [backgroundImage, heroData]);


    return (
        <div
            className="relative w-full flex flex-col justify-center items-center px-16 h-[750px]"
        >
            <div
                key={backgroundImage}
                className={`absolute w-full h-full ${animate ? 'animate' : ''}`}
                data-aos={animate ? `slide-${direction}` : null}
                data-aos-duration="800"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.4,
                }}
            />

            <div className='relative w-full flex flex-row justify-between items-center mt-48'>
                <div
                    data-aos={animate ? "slide-right" : null}
                    data-aos-duration="800"
                    className='w-[70%] flex flex-row justify-center pl-40 items-center gap-5'
                >
                    <img
                        loading="lazy"
                        srcSet={heroData.image}
                        className={`object-cover inset-0 w-[200px]`}
                    />
                    <div className="text-4xl font-extrabold text-stone-300 w-[400px]">
                        <span className="">{heroData.content}</span>
                    </div>

                </div>
                <div className="flex flex-col w-[20%] gap-y-10 justify-end items-end self-center max-md:hidden">
                    <div className="w-[10px] h-[10px] rounded-full bg-zinc-300 cursor-pointer " />
                    <div className="w-[10px] h-[10px] rounded-full bg-zinc-300 cursor-pointer bg-opacity-20" />
                    <div className="w-[10px] h-[10px] rounded-full bg-zinc-300 cursor-pointer bg-opacity-20" />
                    <div className="w-[10px] h-[10px] rounded-full bg-zinc-300 cursor-pointer bg-opacity-20" />
                </div>
            </div>

            <div className="relative flex flex-col self-center mt-20 w-[70%] justify-center items-center max-w-[1335px] max-md:mt-10 max-md:max-w-full">
                <div className="grid grid-cols-4 gap-5 w-full">
                    {buttonsData?.map((data, i) => (
                        <button
                            key={i}
                            className="flex grow gap-3 justify-center items-center px-16 py-14 w-full text-xs font-bold whitespace-nowrap rounded-2xl border border-solid hover:bg-black/40 border-stone-300 text-stone-300"
                            onClick={() => handleButtonClick(i)}
                        >
                            <img
                                loading="lazy"
                                src={data.image}
                                className="shrink-0 self-stretch my-auto aspect-[1.22] w-[30px]"
                            />
                            <div className="self-stretch my-auto">{data.title}</div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative flex gap-1 justify-center self-end mt-6 text-base font-bold text-center text-zinc-100">
                <div className="my-auto">Ver experiencias</div>
                <img
                    loading="lazy"
                    src={arrow}
                    className="shrink-0 aspect-square w-[20px]"
                />
            </div>
        </div>
    )
}
