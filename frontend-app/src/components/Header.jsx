import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
    const user = useUser();
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm sticky top-0">
                <div className="navbar-start">
                    <button className="btn btn-ghost text-xl disabled">Click APP</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">
                            Home
                        </Link></li>
                        <li><Link to="/count">
                            Count
                        </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user.isSignedIn ?
                        (<SignedIn>
                            <UserButton />
                        </SignedIn>)
                    :<SignedOut>
                        <SignInButton />
                    </SignedOut>}

                    {/*  < div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>*/}
                </div>
            </div >
        </>
    )
}

export default Header;