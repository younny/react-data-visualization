//@flow
import React from 'react'
import {
	Row,
	Col,
	Dropdown,
	Container,
	ButtonToolbar,
	DropdownButton
} from 'react-bootstrap'
import ReactJson from 'react-json-view'
import BasicMap from '../component/BasicMap'
import i18n from '../i18n'

const colormap = require("../data/colormap.json")
const mapData = require("../data/south_korea.json")
const gpsData = require("../data/sample_1.json")

const numPatt = /[0-9]/g

type State = {
	samples: Array<Object>
}

type Props = {

}

class DataVisualizationScreen extends React.Component<State, Props> {
	constructor(props) {
		super(props)
		this.state = {
			samples: []
		}
	}

	componentDidMount() {
		this.parseGpsData(gpsData)
	}

	parseGpsData = (data: Array<Object>) => {
		const samples = data.map((d) => {
		  const area = d.VEHICLE_NUM.substring(0, 2)
		  const number = d.VEHICLE_NUM.match(numPatt).reverse().join("").substring(0, 4)+"88"
		  return {
		    name: d.VEHICLE_NUM,
		    coordinates: [d.GPS_LONG, d.GPS_LAT],
		    color: '#'+ colormap[area] + number
		  }
		})

		this.setState({ samples })
	}

	render() {

		return (
				<Container>
						<ButtonToolbar style={{ marginTop: "5%" }}>
							<DropdownButton
							 	style={{ marginRight: 5 }}
								title={i18n.t("data_filter.filter1")}
								variant="info">
							    <Dropdown.Item href="#/action-1">데이터 1</Dropdown.Item>
							    <Dropdown.Item href="#/action-2">데이터 2</Dropdown.Item>
							    <Dropdown.Item href="#/action-3">데이터 3</Dropdown.Item>
							</DropdownButton>
							<DropdownButton
								style={{ marginRight: 5 }}
								title={i18n.t("data_filter.filter2")}
								variant="info">
							    <Dropdown.Item href="#/action-1">거리</Dropdown.Item>
							    <Dropdown.Item href="#/action-2">시간</Dropdown.Item>
							    <Dropdown.Item href="#/action-3">번호</Dropdown.Item>
							</DropdownButton>
							<DropdownButton
								style={{ marginRight: 5 }}
								title={i18n.t("data_filter.filter3")}
								variant="info">
							    <Dropdown.Item href="#/action-1">기타1</Dropdown.Item>
							    <Dropdown.Item href="#/action-2">기타2</Dropdown.Item>
							    <Dropdown.Item href="#/action-3">기타3</Dropdown.Item>
							</DropdownButton>
						</ButtonToolbar>

					<div style={{ marginTop: 40 }}>
						<Row>
							<Col style={{ flex: 0.4 }}>
								<ReactJson src={gpsData} />
							</Col>
							<Col style={{ flex: 1  }}>
								<BasicMap
									mapSource={mapData}
									data={this.state.samples} />
							</Col>
						</Row>
					</div>
				</Container>
		)
	}
}

export default DataVisualizationScreen
