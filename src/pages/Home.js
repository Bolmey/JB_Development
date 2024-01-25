import React from "react";
import ButtonDefault from "../components/ButtonDefault";
import ButtonDesigned from "../components/ButtonDesigned";
import { Navbar } from "@material-tailwind/react";
import placeholder from "../images/placeholder.webp";
import Marquee from "../components/Marquee";

export default function Home() {
	return (
		<div class="flex w-full items-center flex-col">
			<section class="flex justify-center item-center w-full bg-black md:p-10">
				<div class="flex flex-col md:flex-row h-[400px] max-w-[1140px] w-full">
					<div class="flex flex-col w-full md:w-3/5 ">
						<div class="text-white text-3xl md:text-5xl max-w-[80%]">
							Miami Code - Expert Web Development and Software
							Solutions
						</div>
						<div>
							<ButtonDefault />
							<ButtonDesigned
								page="#section2"
								title="Read More ↓"
							/>
						</div>
						<div class="md:w-1/2">
							<Marquee />
						</div>
					</div>
					<div class="w-full md:w-2/5">image</div>
				</div>
			</section>

			<section
				id="section2"
				class="flex w-full justify-center bg-graybg pt-6 px-6 md:px-0"
			>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1140px] justify-evenly pb-5">
					<div class="flex flex-col text-white bg-blue1 p-10 md:p-5">
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
					<div class="flex flex-col text-white bg-blue2 p-10 md:p-5">
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
					<div class="flex flex-col text-white bg-blue1 p-10 md:p-5">
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
				</div>
			</section>
			<section class="flex w-full justify-center items-center bg-graybg py-5 px-5 md:px-0">
				<div class="flex flex-col-reverse md:flex-row w-full max-w-[1140px] justify-evenly pb-5 text-white">
					<div class="flex flex-col w-full md:w-1/2 justify-center">
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
					<div class="flex justify-center w-full md:w-1/2">
						<div class="flex justify-center w-5/6">
							<img class="w-full h-auto" src={placeholder} />
						</div>
					</div>
				</div>
			</section>
			<section class="flex w-full justify-center items-center bg-gray-100">
				<div class=" grid grid-cols-0 md:grid-cols-3 gap-4 w-full max-w-[1140px] justify-center items-center py-20">
					<div class="flex flex-col justify-center items-center text-center px-5 py-10 border-2 rounded-2xl bg-white">
						<div>image</div>
						<div class="text-3xl bold pt-5">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
					</div>
					<div class="flex flex-col justify-center items-center text-center px-5 py-10 border-2 rounded-2xl bg-white">
						<div>image</div>
						<div class="text-3xl bold pt-5">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
					</div>{" "}
					<div class="flex flex-col justify-center items-center text-center px-5 py-10 border-2 rounded-2xl bg-white">
						<div>image</div>
						<div class="text-3xl bold pt-5">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
