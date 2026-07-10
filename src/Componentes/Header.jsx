import logo from "../assets/hero.png"

function Header(){
    return(
        <div>
            <div className="flex justify-between px-6 mt-5">
                <button className="px-4 py-1 rounded font-bold text-2xl">
                {"<"}
                </button>
                <img src={logo} alt="logotipo do spotter" className="ml-3 w-10"/>
            </div>
            <div className="flex items-baseline">
                <span className="px ml-6 py-1 font-bold text-[#2A6A90]">
                    Campus:
                </span>
                <span className="px ml-1.5 py-1">
                    Alameda
                </span>
                
                
            </div>
        </div>
    );
}

export default Header;
