import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    
  return (
    <>
    <header>
    <Carousel id="carouselExampleSlidesOnly">
      <Carousel.Item className="item active">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_960_720.jpg"
          alt=""
        />
        <div className="cover">
          <div className="container">
            <div className="header-content">
              <div className="line"></div>
              <h2>Reinvent Business Experience with</h2>
              <h1>Our Global and Integrated Solutions</h1>
              <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into business</h4>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_960_720.jpg"
          alt=""
        />
        <div className="cover">
          <div className="container">
            <div className="header-content">
              <div className="line animated bounceInLeft"></div>
              <h2>Reinvent Digital Experience with</h2>
              <h1>Our Digital and Intelligent Solutions</h1>
              <h4>We help entrepreneurs, start-ups and enterprises shape their dreams into profits</h4>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/07/17/23/51/wormhole-2514312_960_720.jpg"
          alt=""
        />
        <div className="cover">
          <div className="container">
            <div className="header-content">
              <div className="line animated bounceInLeft"></div>
              <h2>Reinvent Client Experience with</h2>
              <h1>Our CRM and Software Solutions</h1>
              <h4>We help entrepreneurs, start-ups and enterprises shape their leads into clients</h4>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
      
    </header>

    



              </>
  );
}

export default Home;
