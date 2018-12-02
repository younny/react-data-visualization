//@flow
import React from 'react'
import Container from 'react-bootstrap/lib/Container'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import BasicMap from '../component/BasicMap'
import i18n from '../i18n'

class DataVisualizationScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
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
						<BasicMap />
					</div>
				</Container>
		)
	}
}

export default DataVisualizationScreen
