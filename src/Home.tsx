import * as anchor from "@project-serum/anchor";

import Site from './site/Site'
import {Container, Nav, Navbar} from "react-bootstrap";


export interface HomeProps {
	candyMachineId: anchor.web3.PublicKey;
	config: anchor.web3.PublicKey;
	connection: anchor.web3.Connection;
	startDate: number;
	treasury: anchor.web3.PublicKey;
	txTimeout: number;
}

const Home = (props: HomeProps) => {
	return (
		<main>
			<Navbar sticky="top" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#top-content">RandomDudez</Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#roadmap">Roadmap</Nav.Link>
							<Nav.Link href="#collection">Collection</Nav.Link>
							<Nav.Link href="#team">Team</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Site
				candyMachineId={props.candyMachineId}
				config={props.config}
				connection={props.connection}
				startDate={props.startDate}
				treasury={props.treasury}
				txTimeout={props.txTimeout}
			/>
		</main>
	);
};

export default Home;
