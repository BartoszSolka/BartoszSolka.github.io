import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/media-queries.css";

import dude1 from './assets/img/dudez/dude1.png'
import dude2 from './assets/img/dudez/dude2.png'


import {
	CandyMachine,
	awaitTransactionSignatureConfirmation,
	getCandyMachineState,
	mintOneToken,
	shortenAddress,
} from "../candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface SiteProps {}

const Site = (props: SiteProps) => {
	return (
		<div>
			<nav className="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a
									className="nav-link scroll-link"
									href="#top-content"
								>
									Top
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link scroll-link"
									href="#roadmap"
								>
									Roadmap
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link scroll-link"
									href="#collection"
								>
									Collection
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link scroll-link"
									href="#team"
								>
									Team
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="top-content" id="top-content">
				<div className="container">
					<div className="welcome row">
						<div className="col-md-4 portfolio-box">
							<div>
								<img src={dude1} />
							</div>
						</div>
						<div className="col-md-8">
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
							<div className="top-big-link wow fadeInUp">
								<a
									className="btn btn-primary btn-link-1"
									href="http://azmind.com"
								>
									Download it
								</a>
								<a
									className="btn btn-primary btn-link-2 scroll-link"
									href="#collection"
								>
									Learn more
								</a>
							</div>
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
							<h3>
								We set some amazing goals for the community. We
								want to have an impact on both Metaverse and the
								real world. Once we sell enough RandomDudez
								there are some exciting things bound to happen.
							</h3>
							<p>
								10% - RandomDudez community discord server. A
								place to meet other Random Dudez, share Your
								crypto stories and create new ones.
							</p>
							<p>
								25% - RandomDudez merch store. Buy limited
								edition t-shirts, mugs, bucket hats.
							</p>
							<p>
								50% - The milestone! Random Dudez will start
								changing the real world. We will create a series
								of murals around some of the capitals of the
								world. Imagine Your Random Dude looking at You
								from the wall near Your office. Every 10% (50%,
								60%, 70%, 80%, 90%) will mean one more mural
								around the world.
							</p>
							<p>
								100% - RandomDudez Foot Truck Tour! We will
								depart on an 8-month journey around the globe
								(USA, Europe, Asia) with Random Dudez branded
								food truck. That's it, we're done, we will be
								selling food from now on. Until next time.
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
							<h2>The Collection</h2>
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
							<h2>The Team</h2>
							<p>Dudez behind the Random!</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<h3>
								<a href="#">@piotrek</a>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et.
							</p>
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInDown">
							<h3>
								<a href="#">@bartek</a>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et.
							</p>
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
						<div className="col-md-4 portfolio-box wow fadeInUp">
							<h3>
								<a href="#">@kuba</a>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et.
							</p>
							<div className="collection-preview">
								<img src={dude1} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Site;
