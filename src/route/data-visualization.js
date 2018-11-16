import React from 'react'
import Container from 'react-bootstrap/lib/Container'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import BasicMap from '../component/BasicMap'

class DataVisualizationScreen extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { match } = this.props

		return (
				<Container>
						<ButtonToolbar style={{ marginTop: "5%" }}>
							<DropdownButton
							 	style={{ marginRight: 5 }} 
								title="Select Data"
								variant="info">
							    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>
							<DropdownButton 
								style={{ marginRight: 5 }} 
								title="Filter"
								variant="info">
							    <Dropdown.Item href="#/action-1">By Distance</Dropdown.Item>
							    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>
							<DropdownButton 
								style={{ marginRight: 5 }} 
								title="Other"
								variant="info">
							    <Dropdown.Item href="#/action-1">By Distance</Dropdown.Item>
							    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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