import logofoo from "../img/logo-footer.png";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer-container">
        <a className="logo-footer" href="/en/">
          <img src={logofoo} alt="Bitcoin" />
        </a>
        <div className="lg:flex flex-row justify-between px-8 lg:px-32 mt-20 max-sm:mt-10 ">
          <div className="donate ">
            <div className="row donate-row">
              <div>
                <span className="footer-title text-white text-lg">Support Bitcoin.org:</span>
                <a className="donate-btn px-4 mx-3  text-white bg-[#FF9500] w-24 py-2" href="/">
                  Donate
                </a>
                <p className="donate-text mt-6 ">
                  <a
                    className="donate-link underline text-blue-500"
                    href="bitcoin:3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd"
                  >
                    3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-8 max-sm:my-10 md:mt-10">
            <div className="footermenu-item footermenu-introduction">
              <p className="footer-title text-white text-lg">Introduction:</p>
              <ul className="footermenu-list my-4">
                <li>
                  <a href="/">Individuals</a>
                </li>
                <li>
                  <a href="/">Businesses</a>
                </li>
                <li>
                  <a href="https://developer.bitcoin.org/">Developers</a>
                </li>
                <li>
                  <a href="/">Getting started</a>
                </li>
                <li>
                  <a href="/">How it works</a>
                </li>
                <li>
                  <a href="/">You need to know</a>
                </li>

                <li>
                  <a href="/">White paper</a>
                </li>
              </ul>
            </div>

            <div className="footermenu-item footermenu-resources">
              <p className="footer-title text-white text-lg">Resources:</p>
              <ul className="footermenu-list my-4">
                <li>
                  <a href="/">Resources</a>
                </li>
                <li>
                  <a href="/">Exchanges</a>
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Vocabulary</a>
                </li>
                <li>
                  <a href="/">Events</a>
                </li>

                <li>
                  <a href="/">Bitcoin Core</a>
                </li>
              </ul>
            </div>
            <div className="footermenu-item footermenu-participate">
              <p className="footer-title text-white text-lg">Participate:</p>
              <ul className="footermenu-list my-4">
                <li>
                  <a href="/">Support Bitcoin</a>
                </li>
                <li>
                  <a href="/">Buy Bitcoin</a>
                </li>

                <li>
                  <a href="/">Running a full node</a>
                </li>

                <li>
                  <a href="/">Development</a>
                </li>
              </ul>
            </div>

            <div className="footermenu-item footermenu-other">
              <p className="footer-title text-white text-lg">Other:</p>
              <ul className="footermenu-list my-4">
                <li>
                  <a href="/">Avoid Scams</a>
                </li>
                <li>
                  <a href="/">Legal</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">About bitcoin.org</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex flex-row flex-wrap justify-between bg-black  py-3 mt-20 px-40  max-sm:px-1">
        <div>
          <p className="footer-licence max-sm:text-sm xs:text-sm">© Bitcoin Project 2009-2023 Released under the MIT license</p>
        </div>
        <div className="footer-co flex flex-row justify-between w-64 max-sm:order-first  ">
           <p className="paragraph justify-between">Network Status</p>
           <p>English</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
