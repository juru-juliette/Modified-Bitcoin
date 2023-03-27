import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";
import Footer from "./footer";
import team from "../img/helper-illustration.png";
function ChooseWallet() {
  return (
    <div>
      <TopNavBar />
      <NavBar />

      <div className="mainwallet max-sm:py-16">
        <div className="wallet-content ">
          <h1 className="wallet-head1 text-white text-3xl font-sans max-sm:text-2xl ">
            Choose your Bitcoin wallet
          </h1>
          <p className="wallet-par text-2xl font-sans my-4 max-sm:text-xl max-sm:mx-3 ">
            Select a wallet to store your bitcoin so you can start transacting
            on the network.
          </p>
        </div>
      </div>
      <div className="wallet-intro lg:flex my-11 ">
        <div className="wallet-intro-img w-1/4 lg:mx-48 max-sm:w-1/2 max-sm:mx-auto">
          <img src={team} alt="walle-img" />
        </div>
        <div className="wallet-description border-b border-black">
        <h2 id="IntroTitle" class="intro-title anchor text-orange-400 font-normal text-2xl max-sm:text-lg max-sm:mt-[-200px] max-sm:text-center">
            Let's help you find a bitcoin wallet.
        </h2>
        <p className="helper-intro-text lg:my-4 max-sm:mt-[200px] max-sm:text-center">Answer the following questions to create a list of wallets that meet your needs.</p>
        <div className="intro-navigation flex lg:flex-column justify-between flex-wrap md:flex-column">
          <div className="w-48 max-sm:mx-auto">
            <button className="skip-helper-btn underline w-48 text-[#4D5060] max-sm:my-2 lg:text-left">Skip helper</button>
          </div>
          <div className="w-52 max-sm:mx-auto md:order-first max-sm:order-first">
          <button className="helper-next-btn text-white bg-[#FF9500] w-48 h-14 py-2 max-sm:my-2">Next</button>
          </div>
          
        </div>
       
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChooseWallet;
