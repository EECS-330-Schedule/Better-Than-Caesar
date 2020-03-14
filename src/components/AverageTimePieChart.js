import React from 'react';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import {
	Chart,
	PieSeries,
	Title,
	Legend,
	Tooltip
} from '@devexpress/dx-react-chart-material-ui';

const AverageTimePieChart = props => {
	const avgtime = props.course.info[props.year][props.quarter].avgtime
	const data = [
		{ hours: '0-5', count: avgtime["0-5"]},
		{ hours: '5-10', count: avgtime["5-10"]},
		{ hours: '10-15', count: avgtime["10-15"]}
	]

	return (
		<Chart data={data} style={{maxHeight: 200}}>
			<Title text="Avg time spent"/>
			<PieSeries
				valueField="count"
				argumentField="hours"
				innerRadius={0.7}
				outerRadius={1}
			/>
			<Legend />
			<EventTracker />
			<Tooltip />
			<Animation />
		</Chart>
	)
}

export default AverageTimePieChart