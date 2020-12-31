import React from 'react'
import { Carousel } from 'antd'

export default class Carousels extends React.Component {
	render() {
		const contentStyle = {
			height: '160px',
			color: '#fff',
			lineHeight: '160px',
			textAlign: 'center',
			background: '#364d79',
		}
		return (
			<div>
				<Carousel autoplay style={{width:600}}>
					<div>
						<h3 style={contentStyle}>1</h3>
					</div>
					<div>
						<h3 style={contentStyle}>2</h3>
					</div>
					<div>
						<h3 style={contentStyle}>3</h3>
					</div>
					<div>
						<h3 style={contentStyle}>4</h3>
					</div>
				</Carousel>
			</div>
		)
	}
}
