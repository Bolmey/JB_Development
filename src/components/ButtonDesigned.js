import React from "react";

export default function ButtonDesigned(props) {
	return (
		<a
			href={props.page}
			class="relative inline-block px-5 py-3 font-medium group w-30 "
		>
			<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
			<span class="absolute w-30 inset-0 w-full h-full bg-black border-2 border-white "></span>
			<span class="relative text-xl text-white">{props.title}</span>
		</a>
	);
}
