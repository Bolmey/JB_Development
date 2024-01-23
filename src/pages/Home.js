import React from "react";
import ButtonDefault from "../components/ButtonDefault";
import { Navbar } from "@material-tailwind/react";


export default function Home() {
	return (
		<div class="flex w-full items-center flex-col">
			<section class="flex  justify-center w-full bg-black md:p-10">
				<div class="flex flex-col h-[400px] max-w-[1140px] w-full ">
					<div class="text-white text-6xl max-w-[80%]">
						Miami Code - Expert Web Development and Software
						Solutions
					</div>
					<div>
					<ButtonDefault />
					</div>
					
				</div>
			</section>

			<section class="flex w-full justify-center bg-gray-500">
				<div class="flex flex-wrap w-full max-w-[1140px] justify-evenly pb-5">
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue-500 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							Web Development
						</div>
						<div class="pt-10 text-xl  font-bold">01</div>
						<div class="pt-10 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="flex justify-end pt-14">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue-500 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold">Web Development</div>
						<div class="pt-3 text-xl  font-bold">01</div>
						<div class="pt-5 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="pt-10">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue-500 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold">Web Development</div>
						<div class="pt-3 text-xl  font-bold">01</div>
						<div class="pt-5 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your
							expectations.!!!
						</div>
						<div class="pt-10">
							<ButtonDefault />
						</div>
					</div>
				</div>
			</section>
			<section class="flex w-full justify-center bg-gray-500">
				<div class="flex flex-row w-full max-w-[1140px] justify-evenly pb-5 text-white">
					<div class="flex flex-col w-1/2">
						<div>Solutions that drive your business forward</div>
						<div>
							Miami Code is a team of highly skilled web
							developers and designers dedicated to delivering
							custom web solutions and software development
							services. We have extensive experience in developing
							web and mobile applications tailored to your unique
							business needs. Let us help you take your business
							to new heights with our cutting-edge technology
							solutions.
						</div>
						<div class="pt-10">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex w-1/2">
						<div>Image</div>
					</div>
				</div>
			</section>
			<section></section>
		</div>
	);
}
