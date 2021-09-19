import styled from "styled-components";
import {Button, CircularProgress, Snackbar} from "@material-ui/core";
import {WalletDialogButton} from "@solana/wallet-adapter-material-ui";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/media-queries.css";

import dude1 from './assets/img/dudez/dude1.png'
import dude2 from './assets/img/dudez/dude2.png'
import twitterLogo from './assets/img/white-twitter-logo.png'
import Countdown from "react-countdown";
import Alert from "@material-ui/lab/Alert";
import {
	awaitTransactionSignatureConfirmation,
	CandyMachine,
	getCandyMachineState,
	mintOneToken
} from "../candy-machine";
import {useEffect, useState} from "react";
import {useAnchorWallet} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface SiteProps {
	candyMachineId: anchor.web3.PublicKey;
	config: anchor.web3.PublicKey;
	connection: anchor.web3.Connection;
	startDate: number;
	treasury: anchor.web3.PublicKey;
	txTimeout: number;
}

const Site = (props: SiteProps) => {
	const [balance, setBalance] = useState<number>();
	const [isActive, setIsActive] = useState(false); // true when countdown completes
	const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
	const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

	const [alertState, setAlertState] = useState<AlertState>({
		open: false,
		message: "",
		severity: undefined,
	});

	const [startDate, setStartDate] = useState(new Date(props.startDate * 1000));

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
		<div>
			<div className="top-content" id="top-content">
				<div className="container">
					<div className="welcome row">
						<div className="col-md-6 portfolio-box">
							<div className="collection-preview">
								<img id="main" src={dude1} />
							</div>
						</div>
						<div className="col-md-6">
							<h1 className="wow fadeInLeftBig">
								We are Random Dudez
							</h1>
							<div className="description wow fadeInLeftBig">
								<p>
									7777 for the random dudez under the sky{" "}
									<br />
									7777 for the crypto miners in their halls of
									GPU's.
									<br />
									7777 for the newbies doomed to die.
									<br />
									In the Land of NFT where the future lies.
									<br />
									7777 to find them, 7777 to collect them,
									7777 to have them all.
									<br />
									In the Land of NFT where the future lies.
									<br />
								</p>
							</div>
							<MintContainer>
								{!wallet ? (
									<ConnectButton>Connect Wallet</ConnectButton>
								) : (
									<MintButton
										disabled={isSoldOut || isMinting || !isActive}
										onClick={onMint}
										variant="contained"
									>
										{isSoldOut ? (
											"SOLD OUT"
										) : isActive ? (
											isMinting ? (
												<CircularProgress />
											) : (
												"MINT"
											)
										) : (
											<Countdown
												date={startDate}
												onMount={({ completed }) =>
													completed && setIsActive(true)
												}
												onComplete={() => setIsActive(true)}
												renderer={renderCounter}
											/>
										)}
									</MintButton>
								)}
							</MintContainer>

							<Snackbar
								open={alertState.open}
								autoHideDuration={6000}
								onClose={() => setAlertState({ ...alertState, open: false })}
							>
								<Alert
									onClose={() =>
										setAlertState({ ...alertState, open: false })
									}
									severity={alertState.severity}
								>
									{alertState.message}
								</Alert>
							</Snackbar>
						</div>
					</div>
				</div>
			</div>
			<div
				className="collection-container section-container"
				id="roadmap"
			>
				<div className="container">
					<div className="row">
						<div className="col portfolio section-description wow fadeIn">
							<h2>Roadmap</h2>
							<br/>
							<h4>
								We set some amazing goals for the community.
								<br/>
								We want to have an impact on both Metaverse and the
								real world.
								<br/>
								Once the RandomDudez community gets big, there are some exciting things bound to happen.
							</h4>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-md-3">
							<h2>10%</h2>
						</div>
						<div className="col-md-9">
							<p className={"roadmap-text"}>
								<b>RandomDudez community discord server.</b> A
								place to meet other Random Dudez, share Your
								crypto stories and create new ones.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<h2>25%</h2>
						</div>
						<div className="col-md-9">
							<p className={"roadmap-text"}>
								<b>RandomDudez merch store.</b> Buy limited
								edition t-shirts, mugs, bucket hats.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<h2>50%</h2>
						</div>
						<div className="col-md-9">
							<p className={"roadmap-text"}>
								The milestone! Random Dudez will start
								changing the real world. We will create a <b>series
								of murals</b> around some of the capitals of the
								world <b>(ex. Paris, Tokyo, New York, Warsaw, Moscow, Brasília)</b>. Imagine Your Random Dude looking at You
								from the wall near Your office. Every 10% <b>(50%,
								60%, 70%, 80%, 90%)</b> will mean one more mural
								around the world.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<h2>100%</h2>
						</div>
						<div className="col-md-9">
							<p className={"roadmap-text"}>
								<b>RandomDudez Foot Truck Tour!</b> We will
								depart on an 8-month journey around the globe
								(USA, Europe, Asia) with Random Dudez branded
								food truck.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="collection-container section-container"
				id="collection"
			>
				<div className="container">
					<div className="row">
						<div className="col portfolio section-description wow fadeIn">
							<h2>Collection</h2>
							<p>
								{" "}
								From crypto to crypto, 7777 unique, special
								Random dudez to collect
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<div className="collection-preview">
								<img src={dude2} />
							</div>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<div className="collection-preview">
								<img src={dude2} />
							</div>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="portfolio-container section-container" id="team">
				<div className="container">
					<div className="row">
						<div className="col portfolio section-description wow fadeIn">
							<h2>Team</h2>
							<p>Dudez behind the Random!</p>
							<a href="https://twitter.com/RandomDudez_nft" target={"_blank"} rel="noreferrer">
								<div className="brightness">
									<img className="twitter-logo" src={twitterLogo}/>
								</div>
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<h3>
								<a href="https://twitter.com/RandomDudez_nft" target={"_blank"} rel="noreferrer">
									@SE7EN
									<div className="collection-preview team">
										<img src={dude1} />
									</div>
									Co-founder
								</a>
							</h3>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInDown">
							<h3>
								<a href="https://twitter.com/Sartosz" target={"_blank"} rel="noreferrer">
									@Sartosz
									<div className="collection-preview team">
										<img src={dude1} />
									</div>
									Co-founder
								</a>
							</h3>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<h3>
								<a href="https://www.instagram.com/jimzee.art/" target={"_blank"} rel="noreferrer">
									@jimzee
									<div className="collection-preview team">
										<img src={dude1} />
									</div>
									Artist
								</a>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
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

export default Site;
