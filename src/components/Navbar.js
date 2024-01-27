import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import devdynaNavLogo from "../images/devdynaNavLogo.png";

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
		<Navbar className="flex flex-col items-center border-none bg-graybg px-6 pt-3 pb-2">
			<div className="flex items-center w-full max-w-[1140px] justify-between text-blue-gray-900">
				<img class="max-h-10" src={devdynaNavLogo} />

				{/* COMENTED THIS OUT FOR THE PICTURE \/ */}

				{/* <Typography
					as="a"
					href="#"
					variant="h6"
					className="mr-none cursor-pointer py-1.5"
				>
					DEVDYNA
				</Typography> */}

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
