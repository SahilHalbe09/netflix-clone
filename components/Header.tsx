import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

function Header() {
	const [isScrolled, setisScrolled] = useState(false);

	const { logout } = useAuth();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setisScrolled(true);
			} else {
				setisScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && "bg-[#141414]"}`}>
			{/* LHS */}
			<div className="flex items-center space-x-2 md:space-x-10">
				<img src="https://rb.gy/ulxxee" alt="logo" width={100} height={100} className="object-contain cursor-pointer" />

				<ul className="hidden space-x-4 md:flex">
					<li className="headerLink">Home</li>
					<li className="headerLink">TV Shows</li>
					<li className="headerLink">New & Popular</li>
					<li className="headerLink">My List</li>
				</ul>
			</div>

			{/* RHS */}
			<div className="flex space-x-4 text-sm font-light item-center">
				<SearchIcon className="hidden w-6 h-6 sm:inline" />
				<p className="hidden lg:inline">Kids</p>
				<button className="flex transition duration-100 hover:text-slate-300" onClick={logout}>
					logout
				</button>
				<BellIcon className="w-6 h-6" />
				<img src="https://rb.gy/g1pwyx" alt="" className="rounded cursor-pointer" />
			</div>
		</header>
	);
}

export default Header;
