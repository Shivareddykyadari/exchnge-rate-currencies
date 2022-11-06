import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

function Bcharts({data}) {
	console.log("in charts",data)
	const countries=[];
	const currencies=[]
	for(let i=0;i<data.length;i++)
	{
		countries.push(data[i].key)
		currencies.push(data[i].value)
	}

return (
	<div>
		<center>
	<h1>Bar charts</h1>
	<div style={{ maxWidth: "650px" }}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: [...countries],
			datasets: [
			{
				// Label for bars
				label: "Currencies value for 1 USD",
				// Data or value of your each variable
				data: [...currencies],
				// Color of each bar
				backgroundColor: ["aqua", "green", "red", "yellow","green"],
				// Border color of each bar
				borderColor: ["aqua", "green", "red", "yellow","green"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</center>
	</div>
);
}

export default Bcharts;
