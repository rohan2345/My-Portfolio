
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="education">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education</h2>
                    <p>I have DONE the following courses..</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={`https://img.collegedekhocdn.com/media/img/news/AP_ECET_CSE_1_1.jpg?tr=h-310,w-615`} />
                                <h5>6.4 CGPA </h5>
                            </div>
                            <div className="item">
                                <img src={`https://us.123rf.com/450wm/kostiuchenko/kostiuchenko1701/kostiuchenko170100734/70656753-numeral-12-twelve-isolated-on-white-background-3d-render.jpg?ver=6`} alt="m2" />
                                <h5>65.8%</h5>
                            </div>
                            <div className="item">
                                <img src={`https://www.freeiconspng.com/uploads/number-10-10.jpg`} alt="m3" />
                                <h5> 79%</h5>
                            </div>
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="m5" />
    </section>
  )
}
