import React from "react";
import ButtonDefault from "../components/ButtonDefault";
import ButtonDesigned from "../components/ButtonDesigned";
import { Navbar } from "@material-tailwind/react";
import placeholder from "../images/placeholder.webp";
import Marquee from "../components/Marquee";

export default function Home() {
	return (
		<div class="flex w-full items-center flex-col">
			<section class="flex  justify-center w-full bg-black md:p-10">
				<div class="flex flex-col h-[400px] max-w-[1140px] w-full ">
					<div class="text-white text-6xl max-w-[80%]">
						Miami Code - Experts in Web Development
					</div>
					<div>
						<ButtonDefault />
						<ButtonDesigned page="#section2" title="Read More ↓" />
					</div>
					<Marquee />
				</div>
			</section>

			<section
				id="section2"
				class="flex w-full justify-center bg-graybg pt-6"
			>
				<div class="grid grid-cols-3 gap-6 w-full max-w-[1140px] justify-evenly pb-5">
					<div class="flex flex-col text-white bg-blue1 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							Web Development
						</div>
						<div class="pt-10 text-xl  font-bold">01</div>
						<div class="pt-10 text-xl ">
						With innovative design and cutting-edge technology, we deliver bespoke solutions
						 tailored to your needs. Trust us to elevate your online presence to new heights.
						  Simply put, we're the best in the business.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white bg-blue2 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">Web Design</div>
						<div class="pt-10 text-xl  font-bold">02</div>
						<div class="pt-10 text-xl ">
						Our team combines creativity with technical finesse to deliver bespoke designs
						 that captivate and engage. With our team, you'll get tailored solutions that 
						 align with your vision and goals. 
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white bg-blue1 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
						Website Maintenance
						</div>
						<div class="pt-10 text-xl  font-bold">03</div>
						<div class="pt-10 text-xl ">
						Our team ensures your website stays secure and optimized for peak performance.
						 With proactive monitoring and swift resolution of any issues, we keep your online presence
						  running smoothly, allowing you to focus on your business.
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
			<section class="flex w-full justify-center items-center bg-gray-100">
				<div class=" grid grid-cols-3 gap-4 w-full max-w-[1140px] justify-center items-center py-20">
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
