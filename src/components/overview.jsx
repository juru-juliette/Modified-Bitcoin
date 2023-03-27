import individual from '../img/individual-rbg.png';
import suitecase1 from '../img/suitecase-1.png';
import notebook from '../img/notebook-1.png';
// import arrow from '../img/arrow-rbg.png';
function Overview(){

    return (
   <div className="mainoverview">
      <div className="container-overview">
         <p className="overview-title">Get a quick overview for</p>
         <a href="/" className='maincard'>
          <img  src={individual} alt="images" className="maincard-img" />
      <div>
        <p className='maincard-title'>Individuals</p>
        <p className='maincard-link'>Learn more</p>
      </div>
    </a>
    <a href="/" className='maincard'>
      <img src={suitecase1} alt="images" className="maincard-img" />
      <div>
        <p className='maincard-title'>Businesses</p>
        <p className='maincard-link'>Learn more</p>
      </div>
    </a>
    <a href="/" className='maincard'>
      <img src={notebook} alt="images" className="maincard-img" />
      <div>
        <p className='maincard-title'>Developers</p>
        <p className='maincard-link'>Learn more</p>
      </div>
    </a>
      </div>
      {/* <a className="btn-down" href="/">
       <img src={arrow} alt="Link" />
      </a> */}
   </div>
             
       
     );
}
export default Overview