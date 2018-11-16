import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'

export const Navigation = (props) => {
	return (
		<Nav
		  activeKey="/home"
		 // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
		>
		  <Nav.Item>
		    <Nav.Link href="/">Home</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link href="/about">About</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link href="/projects">Projects</Nav.Link>
		  </Nav.Item>
		</Nav>
	)
}
