import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='py-3 text-center'>&copy; 2021</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
