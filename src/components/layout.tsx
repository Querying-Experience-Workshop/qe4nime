import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"
import "../styles.scss"

const Layout = ({ children } : any) => {
	const data = useStaticQuery(graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
	`)
	
	return (
		<Container fluid className="p-0">
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>
				<Container className="w-75 my-5 px-0">
					{children}
				</Container>
			</main>
		</Container>		
		)
	}
	
	Layout.propTypes = {
		children: PropTypes.node.isRequired,
	}
	
	export default Layout