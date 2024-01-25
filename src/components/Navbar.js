import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#section3"
					className="flex items-centerhover:text-blue-500 transition-colors"
				>
					Pages
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Account
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Blocks
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Docs
				</a>
			</Typography>
		</ul>
	);
}

export default function NavbarSimple() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<Navbar className="mx-auto border-none  bg-graybg px-6 py-3">
			<div className="flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="#"
					variant="h6"
					className="mr-none cursor-pointer py-1.5"
				>
					JB Dev
				</Typography>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}

// import { useState, useEffect } from "react";

// export default function Navbar() {
// 	const [showMobileMenu, setShowMobileMenu] = useState(false);

// 	return (
// 		<nav className="bg-white w-full border-black dark:black">
// 			<div class="max-w-[1140px] flex flex-wrap items-center justify-between mx-auto p-4">
// 				<a href="/" class="flex items-center">
// 					<img
// 						src="https://flowbite.com/docs/images/logo.svg"
// 						class="h-8 mr-3"
// 						alt="logo"
// 					/>
// 					<span class="self-left text-2xl font-semibold whitespace-nowrap text-black dark:text-black">
// 						JB Dev
// 					</span>
// 				</a>
// 				<button
// 					data-collapse-toggle="navbar-default"
// 					type="button"
// 					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// 					aria-controls="navbar-default"
// 					aria-expanded="false"
// 				>
// 					<span class="sr-only">Open main menu</span>
// 					<svg
// 						class="w-5 h-5"
// 						aria-hidden="true"
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 17 14"
// 					>
// 						<path
// 							stroke="currentColor"
// 							strokeLineCap="round"
// 							strokeLineJoin="round"
// 							strokeWidth="2"
// 							d="M1 1h15M1 7h15M1 13h15"
// 						/>
// 					</svg>
// 				</button>
// 				<div
// 					class="hidden w-full md:block md:w-auto"
// 					id="navbar-default"
// 				>
// 					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-black md:dark:bg-white dark:border-white">
// 						<li>
// 							<a
// 								href="/"
// 								class="block py-2 pl-3 pr-4 text-white rounded md:bg-white md:text-white md:p-0 dark:text-white md:dark:text-white"
// 								aria-current="page"
// 							>
// 								Home
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#section2"
// 								class="block py-2 pl-3 pr-4 text-white bg-white rounded hover:bg-black md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
// 							>
// 								About
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#section3"
// 								class="block py-2 pl-3 pr-4 text-white bg-white rounded hover:bg-black md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
// 							>
// 								Projects
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#section4"
// 								class="block py-2 pl-3 pr-4 text-white bg-white rounded hover:bg-black md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
// 							>
// 								Contact
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }
