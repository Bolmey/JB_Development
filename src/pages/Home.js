import React from "react";
import { ButtonDefault } from "../components/ButtonDefault";

export default function Home() {
	return (
		<div class="flex w-full max-w-[1140px] items-center flex-col md:p-10 md:mt-8">
			<section class="flex justify-center w-full">
				<div class="flex h-[100px] w-full bg-black">
					<div class="text-white">
						Miami Code - Expert Web Development and Software
						Solutions
					</div>
					
					
				</div>
			</section>

			<section class="flex w-full justify-center bg-gray-500">
				<div class="flex flex-wrap w-full max-w-[1140px] justify-evenly pb-5">
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue-500 mt-5 p-10 md:p-5">
						<div class="text-2xl font-bold">Web Development</div>
						<div class="pt-3 text-xl  font-bold">01</div>
						<div class="pt-5 text-xl ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="pt-5">Button</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue-500 mt-5 p-10">
						<div class="text-xl font-bold">Web Development</div>
						<div class="pt-3 text-l font-bold">01</div>
						<div class="pt-5 text-l ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="pt-5">Button</div>
					</div>
					<div class="flex flex-col text-white w-[100%] md:w-[30%] bg-blue-500 mt-5 p-10">
						<div class="text-xl font-bold">Web Development</div>
						<div class="pt-3 text-l font-bold">01</div>
						<div class="pt-5 text-l ">
							We offer professional web development services using
							the latest technologies and best practices. Our team
							of experienced developers provides custom solutions
							that meet your needs and exceed your expectations.
						</div>
						<div class="pt-5">Button</div>
					</div>
				</div>
			</section>
			<section class="flex w-full justify-center bg-gray-500">
				<div class="flex flex-row w-full max-w-[1140px] justify-evenly pb-5">
					<div>
						<div>Title</div>
						<div>Text</div>
						<div>Button</div>
					</div>
					<div>Image</div>
				</div>
			</section>
			<section></section>
		</div>
	);
}
