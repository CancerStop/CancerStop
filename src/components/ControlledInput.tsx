import type React from "react";

/** Controlled input with the ability to run window.open in onEnter. */
export default function ControlledInput(
	{value, placeholder, className, setValue, onEnter}:{
		value:string;
		setValue:React.Dispatch<React.SetStateAction<string>>;
		onEnter?:() => unknown;
		placeholder?:string;
		className?:string;
	}
){
	return (
		<form onSubmit={e => {
			e.preventDefault();
			onEnter?.();
		}}>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder={placeholder}
				className={className}
			/>
		</form>
	);
}