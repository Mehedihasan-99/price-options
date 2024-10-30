import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu, IoClose } from "react-icons/io5";


const NavBar = () => {
    
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/profile/:username", name: "Profile" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
    ];

    return (
        <div className="container mx-auto">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open ? <IoMenu></IoMenu> : <IoClose></IoClose>
                }
            </div>
            <ul className={`md:flex gap-10 text-left p-2 mx-4 md:mx-0 absolute md:static duration-1000 text-xs bg-yellow-500 text-white ${open ? '-top-60' : 'top-16'}`}>
                {routes.map(route => <Link key={route.id}  route={route}></Link>)}
            </ul>
        </div>
    );
};

export default NavBar;