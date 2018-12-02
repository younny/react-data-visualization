//@flow
import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import i18n from '../i18n'

export const Navigation = () => {
	return (
		<Nav
			activeKey="/home"
			//onSelect={selectedKey => alert(`selected ${selectedKey}`)}
		>
		<Nav.Item>
			<Nav.Link href="/">{i18n.t("main_menu.home")}</Nav.Link>
		</Nav.Item>

		<Nav.Item>
			<Nav.Link href="/projects">{i18n.t("main_menu.projects")}</Nav.Link>
		</Nav.Item>
		</Nav>
	)
}
