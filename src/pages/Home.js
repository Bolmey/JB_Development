import React from "react";
import ButtonDefault from "../components/ButtonDefault";
import ButtonDesigned from "../components/ButtonDesigned";
import { Navbar } from "@material-tailwind/react";
import placeholder from "../images/placeholder.webp";
import Marquee from "../components/Marquee";

import Lottie from "lottie-react";
import HeroLottie from "../lotties/HeroLottie.json";
import bulb from "../lotties/bulb.json";
import graph from "../lotties/graph.json";
import rocket from "../lotties/rocket.json";

export default function Home() {
	return (
		<div class="flex w-full items-center flex-col">
			<section
				id="section1"
				class="flex justify-center item-center text-center md:text-start w-full md:px-10 bg-offwhite"
			>
				<div class="flex flex-col md:flex-row max-w-[1140px] w-full">
					<div class="flex flex-col justify-center w-full md:w-1/2 py-10 md:py-20">
						<div class="bold text-3xl md:text-5xl md:w-4/5">
							Miami Code - Experts in Web Development
						</div>
						<div class="pt-10 text-xl  md:w-4/5">
							With innovative design and cutting-edge technology,
							we deliver bespoke solutions tailored to your needs.
						</div>
						<div class="pt-10">
							<ButtonDesigned
								page="#section2"
								title="Read More ↓"
							/>
						</div>
					</div>
					<div class="w-full md:w-1/2">
						<div class="w-full">
							<Lottie animationData={HeroLottie} />
						</div>
					</div>
				</div>
			</section>

			<section
				id="section2"
				class="flex w-full justify-center items-center bg-offwhite"
			>
				<div class="grid grid-cols-0 md:grid-cols-3 gap-4 w-full max-w-[1140px] justify-center items-center px-2 md:px-0 py-5 md:py-20 ">
					<div class="flex flex-col justify-center  text-center md:text-start px-10 py-10 border-2 rounded-2xl bg-white">
						<div class="text-3xl">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
						<div class="pt-10">
							<ButtonDesigned
								page="#section3"
								title="Read More ↓"
							/>
						</div>
					</div>
					<div class="flex flex-col justify-center text-center md:text-start px-10 py-10 border-2 rounded-2xl bg-white">
						<div class="text-3xl">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
						<div class="pt-10">
							<ButtonDesigned
								page="#section4"
								title="Read More ↓"
							/>
						</div>
					</div>
					<div class="flex flex-col justify-center text-center md:text-start px-10 py-10 border-2 rounded-2xl bg-white">
						<div class="text-3xl">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
						<div class="pt-10">
							<ButtonDesigned
								page="#section5"
								title="Read More ↓"
							/>
						</div>
					</div>
				</div>
			</section>

			<section
				id="section3"
				class="flex w-full justify-center items-center bg-offwhite2 py-5 md:py-10 px-5 md:px-0"
			>
				<div class="flex flex-col-reverse md:flex-row w-full max-w-[1140px] text-center md:text-start justify-evenly pb-5">
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
					</div>
					<div class="flex justify-center md:justify-end w-full md:w-1/2">
						<div class="flex w-5/6">
							<img class="w-full h-auto" src={placeholder} />
						</div>
					</div>
				</div>
			</section>

			<section
				id="section4"
				class="flex w-full justify-center items-center bg-offwhite2 py-5 md:py-10 px-5 md:px-0"
			>
				<div class="flex flex-col-reverse  md:flex-row-reverse w-full max-w-[1140px] text-center md:text-start justify-evenly pb-5">
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
					</div>
					<div class="flex  justify-center md:justify-start w-full md:w-1/2">
						<div class="flex  w-5/6">
							<img class="w-full h-auto" src={placeholder} />
						</div>
					</div>
				</div>
			</section>

			<section
				id="section5"
				class="flex w-full justify-center items-center bg-offwhite"
			>
				<div class=" grid grid-cols-0 md:grid-cols-3 gap-4 w-full max-w-[1140px] justify-center items-center px-2 md:px-0 py-5 md:py-20">
					<div class="flex flex-col justify-center items-center text-center px-5 py-10 border-2 rounded-2xl bg-white">
						<div class="w-full">
							<Lottie class="h-28" animationData={bulb} />
						</div>
						<div class="text-3xl bold pt-5">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
					</div>
					<div class="flex flex-col justify-center items-center text-center px-5 py-10 border-2 rounded-2xl bg-white">
						<div class="w-full">
							<Lottie class="h-28" animationData={graph} />
						</div>
						<div class="text-3xl bold pt-5">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
					</div>{" "}
					<div class="flex flex-col justify-center items-center text-center px-5 py-10 border-2 rounded-2xl bg-white">
						<div class="w-full">
							<Lottie class="h-28" animationData={rocket} />
						</div>
						<div class="text-3xl bold pt-5">Succcess Oriented</div>
						<div class="text-xl pt-5">
							We are a success-oritented company that looks to
							provide the best quality services to our clients
						</div>
					</div>
				</div>
			</section>

			<section
				id="section6"
				class="flex w-full justify-center items-center bg-offwhite"
			>
				<div class="flex flex-col max-w-[1140px] w-full">
					<div>CONTACT</div>
					<div>FORM</div>
				</div>
			</section>

			{/* <section
				id="section9"
				class="flex w-full justify-center bg-graybg pt-6 px-6 md:px-0"
			>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1140px] justify-evenly pb-5">
					<div class="flex flex-col text-white bg-blue1 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">
							Web Development
						</div>
						<div class="pt-10 text-xl  font-bold">01</div>
						<div class="pt-10 text-xl ">
							With innovative design and cutting-edge technology,
							we deliver bespoke solutions tailored to your needs.
							Trust us to elevate your online presence to new
							heights. Simply put, we're the best in the business.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
					<div class="flex flex-col text-white bg-blue2 p-10 md:p-5">
						<div class="text-2xl font-bold pt-5">Web Design</div>
						<div class="pt-10 text-xl  font-bold">02</div>
						<div class="pt-10 text-xl ">
							Our team combines creativity with technical finesse
							to deliver bespoke designs that captivate and
							engage. With our team, you'll get tailored solutions
							that align with your vision and goals.
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
							Our team ensures your website stays secure and
							optimized for peak performance. With proactive
							monitoring and swift resolution of any issues, we
							keep your online presence running smoothly, allowing
							you to focus on your business.
						</div>
						<div class="flex justify-end pt-24">
							<ButtonDefault />
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
}
