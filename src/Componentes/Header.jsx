import logo from "../assets/hero.png"

function Header(){
    return(
        <div>
            <div className="flex justify-between px-6 mt-5">
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded font-bold">
                {"<"}
                </button>
                <img src={logo} alt="logotipo do spotter" className="ml-3 w-10"/>
            </div>
            <div>
                <p className="px ml-6 py-1 font-bold">
                alameda 
                </p>
            </div>
        </div>
    );
}

export default Header;
