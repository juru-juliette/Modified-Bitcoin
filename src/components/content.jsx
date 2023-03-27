import bitcoin from '../img/bitcoinn.png';
import mainicon1 from '../img/main_icon1.png';
import mainicon2 from '../img/main_icon2.png';
import mainicon3 from '../img/main_icon3.png';


function Content(){

    return (
   <div className="maindesc">
    <div className="desc-container">
    <p className="section-title center home-title" id="maindesc-title">Get started with Bitcoin</p>
    <div className='maindesc-row'>
      <div>
        <p className='maindesc-text'>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; 
        managing transactions and the issuing of bitcoins is carried out collectively by the network. 
        <b>Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and 
            <a href="/en/support-bitcoin">everyone can take part</a></b>. 
            Through many of its unique properties, Bitcoin allows exciting uses that could not be 
            covered by any previous payment system.</p>
        <ul className='mainlist px-4'>
          
            <li className='mainlist-item'>
              <img src={mainicon1} alt="Icon" />
              <p>Fast peer-to-peer transactions</p>
            </li>
          
          
            <li className='mainlist-item'>
              <img src={mainicon2} alt="Icon" />
              <p>Worldwide payments</p>
            </li>
          
          
            <li className='mainlist-item '>
              <img src={mainicon3} alt="Icon" />
              <p>Low processing fees</p>
            </li>
          
        </ul>
      </div>
      <img src={bitcoin} alt="Bitcoin" className='maindesc-img' />
    </div>
    <div className='btn-container my-10 '>
    <a className='btn btn-dark btn-home center text-center px-11 rounded-none'href="/">Get started with Bitcoin</a>
    </div>
    </div>
   </div>
 
             
       
     );
}
export default Content