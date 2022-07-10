import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Job Portal",
      description: "To find the jobs online",
      imgUrl: 'https://static1.shine.com/l/m/images/blog/online_job_seach_portal_features.jpg',
      
    },
    {
      title: "Reataurant app",
      description: "to search for your favfood and get it deliver.",
      imgUrl: 'https://www.uberlikeapp.com/images/products/swiggy/slide1.png',
      
    },
    {
      title: "Zomato clone",
      description: "to deliver food to your doorstep",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMW1h_1hm8ITEP0XIGjgtL1EaZ_WN53yaugxZQEX9oe9lMImCXuEmbqnpjLMYer2i7W8&usqp=CAU",      
    },
    {
      title: "Amazon clone",
      description: "create a shopping app",
      imgUrl: "https://getclonescripts.com/wp-content/uploads/2022/02/best-amazon-clone-script.png",
    },
    {
      title: "Todo App",
      description: "To keep note of things",
      imgUrl: "https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/68646ae82f982ea77bdea3f24eca79bf/best-todo-list-apps-00-hero.jpg",
      
    },
    {
      title: "Digital clock",
      description: "To see the time",
      imgUrl: "https://media.istockphoto.com/photos/electronic-clock-with-digital-indication-of-time-and-date-on-a-white-picture-id1321902897?k=20&m=1321902897&s=170667a&w=0&h=1syuqWliN44OoY5mAZFLa0ZBZmhWEiklKFJ19qyBJJY=",
      
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have made the following projects as a learning outcome.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Nothing to show right now. Under Construction.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing to show right now. Under Construction.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
