import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bg-blue-900 text-white">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl h-auto"><img src="https://interactivecares-courses.com/wp-content/uploads/2021/03/IC-logo-Telda.png" alt="" className="w-36"/></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><Link to="/class">Class</Link></li>
                        <li><button className="btn btn-accent rounded px-5">Log in</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;