//@flow
import React from 'react'
import { Card, Button } from 'react-bootstrap'

type Repo = {
	link: string | null,
	text: string | null
}

type Props = {
	thumbnail: string,
	title: string,
	desc: string,
	btnText: string,
	repo: Repo,
	href: string
}

const ProjectCard = (props: Props) => {
	const {
		thumbnail,
		title,
		desc,
		btnText,
		repo,
		href
	} = props;

	return (
		<Card style={{ width: '18rem' }}>
		  <Card.Img variant="top" src={thumbnail} />
		  <Card.Body>
		    <Card.Title>{title}</Card.Title>
		    <Card.Text>
		      {desc}
		    </Card.Text>
		    <Button
		    	variant="primary"
		    	href={href}>{btnText}
		    </Button>
		    {repo.link && <Card.Link href={`${repo.link}`}>{repo.text}</Card.Link>}
		  </Card.Body>
		</Card>
	)
}

ProjectCard.defaultProps = {
	thumbnail: "placeholder.png",
	title: "This is title.",
	desc: "This is description.",
	btnText: "Go",
	repo: {
		link: null,
		text: null
	}
}

export default ProjectCard
