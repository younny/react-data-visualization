import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Container from 'react-bootstrap/lib/Container'
import Button from 'react-bootstrap/lib/Button'
import ProjectCard from '../component/ProjectCard'

class Projects extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		const { match } = this.props

		return (
			<Container>
			  <Row>
			    <Col xs={6} md={4}>
				    <ProjectCard 
						title="Data Visualization"
						desc="Using D3.js to visualize some data sources."
						btnText="Go to this project 1"
						href="/projects/1"
					/>
			    </Col>
			    <Col xs={6} md={4}>
				    <ProjectCard 
						title="Data Visualization"
						desc="Using D3.js to visualize some data sources."
						btnText="Go to this project 2"
						href="/projects/2"
					/>
			    </Col>
			    <Col xs={6} md={4}>
			      	<ProjectCard 
						title="Data Visualization"
						desc="Using D3.js to visualize some data sources."
						btnText="Go to this project 3"
						href="/projects/3"
					/>
			    </Col>
			  </Row>
			</Container>
		)
	}
}

export default Projects