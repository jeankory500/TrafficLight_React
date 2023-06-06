import React, { useState } from 'react'

export const TrafficLight = () => {
 
	const [ selectedColor, setSelectedColor] = useState("green");
	//let str = "";
	//if(selectedColor === "red") str = " glow"
 
	return (
		<div className='Traffic-Light'>
		<div 
		onClick={() => setSelectedColor("red")}
		className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
		<div 
		onClick={() => setSelectedColor("yellow")}
		className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
		<div 
		onClick={() => setSelectedColor("green")}
		className={"light green" + (selectedColor === "green"? " glow" : "") }></div>
		</div>

  )
}
