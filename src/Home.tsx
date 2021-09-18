import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import Site from './site/Site'
import {
	CandyMachine,
	awaitTransactionSignatureConfirmation,
	getCandyMachineState,
	mintOneToken,
	shortenAddress,
} from "./candy-machine";
import {Container, Nav, Navbar} from "react-bootstrap";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
	candyMachineId: anchor.web3.PublicKey;
	config: anchor.web3.PublicKey;
	connection: anchor.web3.Connection;
	startDate: number;
	treasury: anchor.web3.PublicKey;
	txTimeout: number;
}

const Home = (props: HomeProps) => {
	const [balance, setBalance] = useState<number>();
	const [isActive, setIsActive] = useState(false); // true when countdown completes
	const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
	const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

	const [alertState, setAlertState] = useState<AlertState>({
		open: false,
		message: "",
		severity: undefined,
	});

	const [startDate, setStartDate] = useState(new Date(props.startDate));

	const wallet = useAnchorWallet();
	const [candyMachine, setCandyMachine] = useState<CandyMachine>();

	const onMint = async () => {
		try {
			setIsMinting(true);
			if (wallet && candyMachine?.program) {
				const mintTxId = await mintOneToken(
					candyMachine,
					props.config,
					wallet.publicKey,
					props.treasury
				);

				const status = await awaitTransactionSignatureConfirmation(
					mintTxId,
					props.txTimeout,
					props.connection,
					"singleGossip",
					false
				);

				if (!status?.err) {
					setAlertState({
						open: true,
						message: "Congratulations! Mint succeeded!",
						severity: "success",
					});
				} else {
					setAlertState({
						open: true,
						message: "Mint failed! Please try again!",
						severity: "error",
					});
				}
			}
		} catch (error: any) {
			// TODO: blech:
			let message = error.msg || "Minting failed! Please try again!";
			if (!error.msg) {
				if (error.message.indexOf("0x138")) {
				} else if (error.message.indexOf("0x137")) {
					message = `SOLD OUT!`;
				} else if (error.message.indexOf("0x135")) {
					message = `Insufficient funds to mint. Please fund your wallet.`;
				}
			} else {
				if (error.code === 311) {
					message = `SOLD OUT!`;
					setIsSoldOut(true);
				} else if (error.code === 312) {
					message = `Minting period hasn't started yet.`;
				}
			}

			setAlertState({
				open: true,
				message,
				severity: "error",
			});
		} finally {
			if (wallet) {
				const balance = await props.connection.getBalance(
					wallet.publicKey
				);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
			setIsMinting(false);
		}
	};

	useEffect(() => {
		(async () => {
			if (wallet) {
				const balance = await props.connection.getBalance(
					wallet.publicKey
				);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
		})();
	}, [wallet, props.connection]);

	useEffect(() => {
		(async () => {
			if (!wallet) return;

			const { candyMachine, goLiveDate, itemsRemaining } =
				await getCandyMachineState(
					wallet as anchor.Wallet,
					props.candyMachineId,
					props.connection
				);

			setIsSoldOut(itemsRemaining === 0);
			setStartDate(goLiveDate);
			setCandyMachine(candyMachine);
		})();
	}, [wallet, props.candyMachineId, props.connection]);

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

interface AlertState {
	open: boolean;
	message: string;
	severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
	return (
		<CounterText>
			{hours} hours, {minutes} minutes, {seconds} seconds
		</CounterText>
	);
};

export default Home;
