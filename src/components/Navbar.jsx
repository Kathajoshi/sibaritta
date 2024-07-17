
import logo from '../assets/logo.svg'

export default function Navbar() {
    return (
        <div className="fixed top-8 h-20 px-16 flex gap-0 justify-between items-center flex-row w-full max-md:flex-wrap max-md:max-w-full z-10">
            <div className="flex flex-col text-xs leading-5 text-center self-center text-white uppercase tracking-[2px]">
                <img
                    loading="lazy"
                    src={logo}
                    className="self-center aspect-[7.14] w-[200px]"
                />
                <div className="mt-1.5">Eleva tus experiencias</div>
            </div>
            <div className="flex gap-8 justify-center items-center self-center text-sm font-semibold text-stone-300  max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto hover:text-yellow-500">Inicio</div>
                <div className="self-stretch my-auto hover:text-yellow-500">¿Quiénes somos?</div>
                <div className="self-stretch my-auto hover:text-yellow-500">Sibaritta Business</div>
                <div className="self-stretch my-auto hover:text-yellow-500">FAQ</div>
                <div className="justify-center self-stretch px-5 py-1.5 rounded-xl bg-stone-300 text-zinc-700 hover:bg-yellow-500 max-md:px-5">
                    Iniciar sesión
                </div>
            </div>
        </div>
    )
}
