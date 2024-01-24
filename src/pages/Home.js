import React from "react";
import ButtonDefault from "../components/ButtonDefault";
import { Navbar } from "@material-tailwind/react";
import placeholder from "../images/placeholder.webp";

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

			<section class="flex w-full justify-center bg-graybg">
				<div class="flex flex-wrap w-full max-w-[1140px] justify-evenly pb-5">
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue1 mt-5 p-10 md:p-5">
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
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue2 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">Web Design</div>
						<div class="pt-10 text-xl  font-bold">02</div>
						<div class="pt-10 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue1 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							Software Solutions
						</div>
						<div class="pt-10 text-xl  font-bold">03</div>
						<div class="pt-10 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue2 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							E-commerce Development
						</div>
						<div class="pt-10 text-xl  font-bold">04</div>
						<div class="pt-10 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue1 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							SEO Optimization
						</div>
						<div class="pt-10 text-xl  font-bold">05</div>
						<div class="pt-10 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue2 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							Website Maintenance
						</div>
						<div class="pt-10 text-xl  font-bold">06</div>
						<div class="pt-10 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
				</div>
			</section>
			<section class="flex w-full justify-center items-center bg-graybg py-10">
				<div class="flex flex-row w-full max-w-[1140px] justify-evenly pb-5 text-white">
					<div class="flex flex-col w-1/2 justify-center">
						<div class="text-4xl font-bold md:w-4/5 pt-10">
							Solutions that drive your business forward
						</div>
						<div class="text-xl pt-10">
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
					<div class="flex justify-center w-1/2">
						<div class="flex justify-center w-5/6">
							<img class="w-full h-auto" src={placeholder} />
						</div>
					</div>
				</div>
			</section>
			<section class="flex w-full justify-center items-center">
				<div class=" grid grid-cols-4 divide-x w-full max-w-[1140px] justify-center items-center py-20">
					<div class="flex flex-col justify-center items-center px-5">
						<div class="text-5xl ">000+</div>
						<div clas="text-4xl">Projects completed</div>
					</div>
					<div class="flex flex-col justify-center items-center px-5">
						<div class="text-5xl">000</div>
						<div clas="text-4xl">Happy clients</div>
					</div>
					<div class="flex flex-col justify-center items-center px-5">
						<div class="text-5xl">00+</div>
						<div clas="text-4xl">Awards received</div>
					</div>
					<div class="flex flex-col justify-center items-center px-5">
						<div class="text-5xl">02</div>
						<div clas="text-4xl">Team members</div>
					</div>
				</div>
			</section>
		</div>
	);
}
