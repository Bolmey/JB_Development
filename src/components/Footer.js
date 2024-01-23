import React from "react";

export default function Footer() {
	return (
		<section class="flex w-full bg-graybg justify-center text-white py-5">
			<div class="grid grid-cols-2 divide-x w-full max-w-[1140px]">
				<div class="grid grid-rows-2">
					<div>FOLLOW US</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="grid grid-rows-3 gap-2">
							<div>Facebook</div>
							<div>Facebook</div>
							<div>Facebook</div>
						</div>
						<div class="grid grid-rows-3 gap-2">
							<div>Facebook</div>
							<div>Facebook</div>
							<div>Facebook</div>
						</div>
					</div>
				</div>
				<div class="flex">
					<div>CONTACT</div>
					<div>
						<div>Contact information</div>
						<div>Contact information</div>
						<div>Contact information</div>
					</div>
				</div>
			</div>
		</section>
	);
}
