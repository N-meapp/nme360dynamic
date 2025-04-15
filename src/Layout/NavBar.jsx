import Logo from "../Components/Navbar/Logo";
import NavHandler from "../Components/Navbar/NavHandler";

export default function NavBar(){
    return(
        <>
        <div className="w-full h-auto pt-7 px-7 flex justify-between fixed z-50">
            <Logo />
            <NavHandler />
        </div>
        </>
    )
}