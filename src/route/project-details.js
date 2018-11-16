import React, { lazy } from 'react'
import Button from 'react-bootstrap/lib/Button'

const DataVisualizationScreen = lazy(() => import('./data-visualization'))


class ProjectDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	renderPlaceholderView = (id) => {
		return (
			<div className="ProjectDetails">
				This is Project details screen.
				{id}
			</div>
		)
	}

	renderById = (id) => {
		switch(id) {
			case "1":
			 	//Data visualization
			 	return <DataVisualizationScreen />
			default:
				return this.renderPlaceholderView(id)
		}
	}

	render() {
		const { match } = this.props

		return this.renderById(match.params.id)	
	}
}

export default ProjectDetails