import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import './style/style.css'
import './style/animate.css'
import './style/media-queries.css'

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

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
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
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
        (
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
                                <a className="nav-link scroll-link" href="#top-content">
                                    Top
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll-link" href="#roadmap">
                                    Roadmap
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll-link" href="#collection">
                                    Collection
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll-link" href="#team">
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
                                <img src="assets/img/dudez/dude2.png" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="wow fadeInLeftBig">We are Random Dudez</h1>
                            <div className="description wow fadeInLeftBig">
                                <p>
                                    7777 for the random dudez under the sky <br />
                                    7777 for the crypto miners in their halls of GPU's.
                                    <br />
                                    7777 for the newbies doomed to die.
                                    <br />
                                    In the Land of NFT where the future lies.
                                    <br />
                                    7777 to find them, 7777 to collect them, 7777 to have them all.
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
            <div className="collection-container section-container" id="roadmap">
                <div className="container">
                    <div className="row">
                        <div className="col portfolio section-description wow fadeIn">
                            <h2>Roadmap</h2>
                            <h3>
                                We set some amazing goals for the community. We want to have an
                                impact on both Metaverse and the real world. Once we sell enough
                                RandomDudez there are some exciting things bound to happen.
                            </h3>
                            <p>
                                10% - RandomDudez community discord server. A place to meet other
                                Random Dudez, share Your crypto stories and create new ones.
                            </p>
                            <p>
                                25% - RandomDudez merch store. Buy limited edition t-shirts, mugs,
                                bucket hats.
                            </p>
                            <p>
                                50% - The milestone! Random Dudez will start changing the real
                                world. We will create a series of murals around some of the
                                capitals of the world. Imagine Your Random Dude looking at You
                                from the wall near Your office. Every 10% (50%, 60%, 70%, 80%,
                                90%) will mean one more mural around the world.
                            </p>
                            <p>
                                100% - RandomDudez Foot Truck Tour! We will depart on an 8-month
                                journey around the globe (USA, Europe, Asia) with Random Dudez
                                branded food truck. That's it, we're done, we will be selling food
                                from now on. Until next time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collection-container section-container" id="collection">
                <div className="container">
                    <div className="row">
                        <div className="col portfolio section-description wow fadeIn">
                            <h2>The Collection</h2>
                            <p>
                                {" "}
                                From crypto to crypto, 7777 unique, special Random dudez to
                                collect
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png" />
                            </div>
                        </div>
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude2.png" />
                            </div>
                        </div>
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png" />
                            </div>
                        </div>
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude2.png" />
                            </div>
                        </div>
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png" />
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et.
                            </p>
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png"  />
                            </div>
                        </div>
                        <div className="col-md-4 portfolio-box wow fadeInDown">
                            <h3>
                                <a href="#">@bartek</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et.
                            </p>
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png"  />
                            </div>
                        </div>
                        <div className="col-md-4 portfolio-box wow fadeInUp">
                            <h3>
                                <a href="#">@kuba</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et.
                            </p>
                            <div className="collection-preview">
                                <img src="assets/img/dudez/dude1.png"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
      {wallet && (
        <p>Address: {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
      )}

      {wallet && (
        <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
      )}

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
                onMount={({ completed }) => completed && setIsActive(true)}
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
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
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
