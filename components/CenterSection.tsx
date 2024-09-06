import React from "react";
import Button, { ButtonProps } from "./button";

export type CenterSectionProps = {
	backgroundImage: string;
	textColor: string;
	title: string;
	description: string;
	buttons: ButtonProps[];
};

function CenterSection({
	backgroundImage,
	textColor,
	title,
	description,
	buttons,
}: CenterSectionProps) {
	return (
		<section
			className={`pb-24 min-h-screen w-full object-cover bg-no-repeat bg-cover bg-center ${textColor} ${backgroundImage} 
      relative overflow-hidden flex items-center justify-center z-10 before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-black
            before:opacity-65
            before:z-[-5]`}
		>
			<div className="text-center py-12">
				<h1 className={`text-5xl font-extrabold `}>{title}</h1>
				<h4 className={`text-2xl font-bold mt-6`}>{description}</h4>
				<div className="flex justify-center gap-10 mt-12">
					{buttons.map((button, index) => (
						<Button {...button} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}

export default CenterSection;