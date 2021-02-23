import React, { useState, useEffect, useCallback } from 'react';
import { ethers } from "ethers";
import { fum, usm, usmView, oracle, proxy } from "./token"
import { Navbar, showMessage } from './elems'

function App() {

    const [provider, setProvider] = useState(undefined);
    const [metamask, setMetamask] = useState(undefined);
    const [proxyContract, setProxyContract] = useState(undefined);
    const [usmViewContract, setUsmViewContract] = useState(undefined);
    const [network, setNetwork] = useState(undefined);
    const [signer, setSigner] = useState(undefined);
    const [signerAddress, setSignerAddress] = useState(undefined);
    const [signerEthBalance, setSignerEthBalance] = useState(undefined);
    const [isError, setIsError] = useState({
        state: false,
        msg: ""
    });

    const init = async () => {

        let provider = new ethers.providers.JsonRpcProvider(" http://127.0.0.1:8545");
        setProvider(provider);
        let network = await provider.getNetwork();
        setNetwork(network.chainId);
        const metamask = await new ethers.providers.Web3Provider(window.ethereum)
        setMetamask(metamask);
        const signer = await metamask.getSigner(0);
        setSigner(signer);
        const signerAddress = await signer.getAddress();
        setSignerAddress(signerAddress);
        const signerEthBalance = (await signer.getBalance()).toString();
        setSignerEthBalance(signerEthBalance);

        // load proxy.sol
        const proxyContract = new ethers.Contract(
            proxy.address[network.chainId], proxy.abi, signer
        );

        setProxyContract(proxyContract);

        console.log(proxyContract);

        const usmViewContract = new ethers.Contract(
            usmView.address[network.chainId], usmView.abi, provider
        );

        setUsmViewContract(usmViewContract);

        console.log(usmViewContract);

    }

    useEffect(() => {

        init();

        window.ethereum.on('accountsChanged', loginAcc => {
            setSigner(loginAcc[0]);
            console.log(loginAcc[0]);
        });

    }, []);


    const isReady = useCallback(() => {
        return (
            typeof provider !== 'undefined'
            && typeof metamask !== 'undefined'
            && typeof network !== 'undefined'
            && typeof signer !== 'undefined'
            && typeof proxyContract !== 'undefined'
            && typeof usmViewContract !== 'undefined'
            && isError.state !== true
        )
    }, [provider, metamask, signer, proxyContract, usmViewContract, network, isError.state]);

    const unsetStates = () => {
        //
    }

    if (!isReady()) {
        return (
            <>
                <Navbar />
                {(isError.state && isError.msg) ?
                    <div className="alert alert-danger" role="alert">{isError.msg}</div> : ""}
                <p>Loading...</p>
            </>
        )
    } else {

        const foo = async () => {
            let buffer = await proxyContract.fund(signerAddress, 100, 0);
            console.log(buffer); 
        }

        //console.log(getEthBuffer());

        return (
            <div className="App">
                <button onClick={()=>foo()}>Fund</button>
            </div>
        );
    }
}

export default App;
