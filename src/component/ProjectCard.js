import React from 'react'
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'

const ProjectCard = (props) => {
	const {
		thumbnail,
		title,
		desc,
		btnText,
		repo,
		href
	} = props
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
		    {repo && <Card.Link href={`${repo.link}`}>{repo.text}</Card.Link>}
		  </Card.Body>
		</Card>
	)
}

ProjectCard.defaultProps = {
	thumbnail: "placeholder.png",
	title: "This is title.",
	desc: "This is description.",
	btnText: "Go",
	repo: null
}

export default ProjectCard