//@flow
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import ProjectCard from '../component/ProjectCard'
import i18n from '../i18n'
type Props = {
	t: Function
}

type State = {

}

class Projects extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {}
	}

	render() {

		return (
			<Container>
				<Row>
					<Col xs={7} sm={7} md={4}>
						<ProjectCard
							title={i18n.t('project_name')}
							desc={i18n.t('project_desc')}
							btnText={i18n.t('component.bt.go')}
							href="/projects/1"
							/>
					</Col>
					<Col xs={7} sm={7} md={4}>
						<ProjectCard
							title={i18n.t('project_name')}
							desc={i18n.t('project_desc')}
							btnText={i18n.t('component.bt.go')}
							href="/projects/2"
							/>
					</Col>
					<Col xs={7} sm={7} md={4}>
						<ProjectCard
							title={i18n.t('project_name')}
							desc={i18n.t('project_desc')}
							btnText={i18n.t('component.bt.go')}
							href="/projects/3"
							/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Projects
