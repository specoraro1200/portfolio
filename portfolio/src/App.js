import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./styles.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

function App() {
  useEffect(() => {
    AOS.init({
       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
       initClassName: 'aos-init', // class applied after initialization
       animatedClassName: 'aos-animate', // class applied on animation
       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
       disableMutationObserver: false, // disables automatic mutations' detections (advanced)
       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
       duration: 850,
       delay: 0, // values from 0 to 3000, with step 50ms
       easing: 'ease', // default easing for AOS animations
       once: true, // whether animation should happen only once - while scrolling down
       mirror: true, // whether elements should animate out while scrolling past them
       anchorPlacement: 'top-bottom',
    });
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Salvatore Pecoraro</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,210;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>  <link href="vendor/devicons/css/devicons.min.css" rel="stylesheet" />
  <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
  <link href="styles.css" rel="stylesheet" />
</head>

<body id="page-top">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Sal Pecoraro</span>
    </a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#Certifications">Certifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">
    <section class="resume-section d-flex justify-content-md-center" id="about">
      <div class="my-auto" data-aos="zoom-out" style={{textAlign:"center"}} data-aos-duration="2000">
        <h1 class="mb-4 name" >
          <span>Salvatore</span>
          <span> Pecoraro</span>
        </h1>
        
        <h3 class = "mb-4 profession ">Full Stack Developer</h3>
        <h6  class="mb-4" style={{fontWeight: "500"}}>
          Chicago, IL - 
          <a href="mailto:scpecoraro@gmail.com">scpecoraro@gmail.com</a>
         
        </h6>

        <ul class="list-inline links mb-0" >
          <li class="list-inline-item" id = "stock">
            <a href="http://www.cnnstockpredictor.com/polls">
              <span class="fa-stack fa-lg" >
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-arrow-trend-up fa-stack-1x fa-inverse" ></i>
              </span>
            </a>
          </li>

          <li class="list-inline-item" id = "calender">
            <a href="http://www.performancescheduler.com">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x" ></i>
                <i class="fa-solid fa-calendar-days fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>

          <li class="list-inline-item" id = "linkedin">
            <a href="https://www.linkedin.com/in/salvatorecpecoraro/">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa-brands fa-linkedin-in fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        
          <li class="list-inline-item" id = "github">
            <a href="https://github.com/specoraro1200">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa-brands fa-square-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>

          <li class="list-inline-item" id = "leetcode">
            <a href="https://leetcode.com/salsalsalsal/">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa-solid  fa-code fa-stack-1x fa-inverse"></i>
              </span>          
            </a>
          </li>
        </ul>
      </div>
    </section>
    
    <section class="resume-section" id="projects">
      <div class="my-auto">
      <div class="container-fluid">
        <h2 class="mb-2" >Projects</h2>
        <div class = "row" data-aos="fade-up">
          <div class="col-md-6"  id = "projectImageColumn">
            <img src={require('./images/buses.png')}class = "img-fluid" alt="Python" id="projectImage"/>
          </div> 
          <div class="col-md-6">
            <h3 class="center mb-0 heading">CTA Bus Delay Tracker</h3>
              <div class="subheading center mb-3">
                <div>Web App- <a id="viewCode" href="https://github.com/specoraro1200/ctabustracker">View Code!</a></div >
                <ul class="list-inline my-1" >
                  <span >Skills Used: </span>
                  <li class="list-inline-item" >
                  <Tooltip title="React.js" placement="top">
                    <img src={require('./images/react.png')} alt="Python" width="35" height="35" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Node.js" placement="top">
                    <img src={require('./images/nodejs.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="RDS, Lambda, EC2" placement="top">
                    <img src={require('./images/amazon-aws.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="MariaDB" placement="top">
                    <img src={require('./images/mariadb.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Redis" placement="top">
                    <img src={require('./images/redis.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Ubuntu" placement="top">
                    <img src={require('./images/ubuntu.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Bash" placement="top">
                    <img src={require('./images/bash.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Python" placement="top">
                    <img src={require('./images/python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  </li>
                </ul>
              </div>
              <div class = "description" >
                <ul>
                  <li>Developed a web application that allows users to track CTA bus delays. The application additionally allows users to 
                    view how late a bus is on average. 
                  </li>
                  <li>An AWS Lambda function is called up to 400 times a day for all 1600 CTA buses to deliver the most up to date 
                    contents to its users. This lambda function runs a python script that calls the CTA Rest API. 
                  </li>
                  <li>
                    An RDS MariaDB server is utilized to store bus data, user data, and web scraped data. To combat high load times, a Redis server was employed to cut down load times by up to 10 seconds. Redis was quick and easy to employ, and 
                    helped to make the application more accessible. 
                  </li>
                  <li>A React.js frontend and Node.js/express.js backend was used to create the web application. </li>
                </ul>
              </div>
          </div>
        </div>

        <div class ="row" data-aos="fade-right">
          <div class="col-md-6"  id = "projectImageColumn">
            <a href="http://www.cnnstockpredictor.com/polls">
              <img src={require('./images/cnn.png')}class = "img-fluid" alt="Python" id="projectImage"/>
            </a>
          </div> 
          <div class="col-md-6">
            <h3 class="center mb-0 heading">CNN Stock Scraper</h3>
            <div class="subheading center mb-3">
              <div>Web App- 
                <a id="viewCode" href="https://github.com/specoraro1200/Collect-Stock-Data-Through-Terminal">View Code!</a>
              </div>
              <ul class="list-inline my-1" >
                <span>Skills Used: </span>
                <li class="list-inline-item" >
                <Tooltip title="Django" placement="top">
                  <img src={require('./images/django.png')} alt="Python" width="35" height="35" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="EC2" placement="top">
                  <img src={require('./images/amazon-aws.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="MySQL" placement="top">
                  <img src={require('./images/mysql.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="Apache" placement="top">
                  <img src={require('./images/apache.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="Ubuntu" placement="top">
                  <img src={require('./images/ubuntu.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="Bash" placement="top">
                  <img src={require('./images/bash.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="Python" placement="top">
                  <img src={require('./images/python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                </li>
              </ul>
            </div>
            <div class = "description" >
              <ul>
                <li>A web app that allows users to compare CNN's estimation of stock prices against real prices.</li>
                <li>A bash script runs once daily on an AWS EC2 which web scrapes over 6000 pages from CNN. </li>
                <li>A postgres database stores the data from the webscraping, as well as user data. </li>
                <li>If a stock is not available, a use is able to send a request to the server, which checks if that stock is both available for web scraping and is not already covered, 
                  then, that stock will be able to be webscraped daily </li>
                <li>Additionally, users can favorite a stock and view it in a table for ease of access.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class ="row" data-aos="fade-left">
          <div class="col-md-6 " id = "projectImageColumn">
            <a  href="http://www.performancescheduler.com">
              <img src={require('./images/performanceScheduler.png')}class = "img-fluid" alt="Python" id="projectImage"/>
            </a>
          </div> 
          <div class="col-md-6">
            <h3 class="center mb-0 heading" >Performance Scheduler</h3>
            <div class="subheading center mb-3">
              <div>Web App- <a id="viewCode" href="https://github.com/specoraro1200/DatabaseProject">View Code</a></div>
                <ul class="list-inline my-1" >
                  <span>Skills Used: </span>
                  <li class="list-inline-item" >
                  <Tooltip title="Django" placement="top">
                    <img src={require('./images/django2.png')} alt="Python" width="35" height="35" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="EC2" placement="top">
                    <img src={require('./images/amazon-aws.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="MySQL" placement="top">
                    <img src={require('./images/mysql.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Apache" placement="top">
                    <img src={require('./images/apache.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Ubuntu" placement="top">
                    <img src={require('./images/ubuntu.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  <Tooltip title="Python" placement="top">
                    <img src={require('./images/python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </Tooltip>
                  </li>
                </ul>
            </div>
            <div class = "description" >
              <ul>
                <li>Developed a web application that allows users to compare CNN's estimation of stock prices against real prices. </li>
                <li>A bash script runs once daily on an AWS EC2 which web scrapes over 6000 pages from CNN. </li>
                <li>A postgres database stores the data from the webscraping, as well as user data. </li>
                <li>If a stock is not available, a use is able to send a request to the server, which checks if that stock is both available for web scraping and is not already covered, 
                  then, that stock will be able to be webscraped daily </li>
                <li>Additionally, users can favorite a stock and view it in a table for ease of access.</li>
              </ul>
            </div>
        </div>

        <div class ="row" data-aos="fade-up-right">
          <div class="col-md-6" id = "projectImageColumn">
              <img src={require('./images/broadstreet.png')}class = "img-fluid" alt="Python" id="projectImage"/>
          </div> 
          <div class="col-md-6">
            <h3 class="center mb-0 heading">Webscrape Covid Data</h3>
            <div class="subheading center mb-3">
              <div>Game- <a id="viewCode" href="https://github.com/specoraro1200/WebScrapingCovidData">View Code</a>
              </div>
              <ul class="list-inline my-1" >
                <span>Skills Used: </span>
                <li class="list-inline-item" >
                <Tooltip title="Jupyter Notebook" placement="top">
                  <img src={require('./images/jupyter.png')} class = "tooltips "alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                <Tooltip title="Python" placement="top">
                  <img src={require('./images/python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </Tooltip>
                </li>
              </ul>
            </div>
            <div class = "description" >
              <ul>
                <li>Developed a platform based game where the player controls a slime trying to escape out of the cave </li>
                <li>Game was built with Python and Pygame</li>
                <li>The player can pick up powerups, which can change the players primary weapon or movement into something powerful</li>
                <li>The game has three levels, and the player cannot die or else they will have to resetart from level 1</li>
                <li>Enemies are littered throughout the level, and so the player must navigate around them in order to make it to the end of the level</li>
              </ul>
            </div>
          </div>
        </div>

          <div class ="row" data-aos="fade-up-left">
            <div class="col-md-6" id = "projectImageColumn">
                <img src={require('./images/slime.png')}class = "img-fluid" alt="Python" id="projectImage"/>
            </div> 
            <div class="col-md-6">
              <h3 class="center mb-0 heading">SlimeByte</h3>
              <div class="subheading center mb-3">
                <div>Game- <a id="viewCode" href="https://github.com/csantana1121/Slime-pygames">View Code</a>
                </div>
                <ul class="list-inline my-1" >
                  <span>Skills Used: </span>
                  <li class="list-inline-item" >
                    <Tooltip title="Python" placement="top">
                      <img src={require('./images/python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                    </Tooltip>
                  </li>
                </ul>
            </div>
            <div class = "description" >
              <ul>
                <li>Developed a platform based game where the player controls a slime trying to escape out of the cave </li>
                <li>Game was built with Python and Pygame</li>
                <li>The player can pick up powerups, which can change the players primary weapon or movement into something powerful</li>
                <li>The game has three levels, and the player cannot die or else they will have to resetart from level 1</li>
                <li>Enemies are littered throughout the level, and so the player must navigate around them in order to make it to the end of the level</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
    
    <section class="resume-section" id="experience">
      <div class="container-fluid">
        <h2 class = "center mb-2">Work Experience</h2>

        <div class="row" data-aos="flip-right" >
          <div class="col" style={{display:"flex",flexWrap: "wrap"}} >
            <div style ={{flexDirection:"column",flex:5,minWidth:"300px"}}>
              <div >
                <h3 class = "heading mb-0">IT/AWS Support</h3>
              </div>
              <div class="subheading mb-3">Mikan Associates</div>
              <div class = "description">
                <ul>
                  <li>
                    Responsible for the AWS enviornment, computer setup, and troubleshooting. 
                  </li>
                  <li>
                    Created a bash script that automated computer setup, saving more than one hour of time for 
                    each computer. 
                  </li>
                  <li>
                    Diagnosed errors within the microsoft enviornment, as well as resolve tickets
                  </li>
                </ul>
              </div>
            </div>
            <h4 class="date">Jun. 2021 - Dec. 2021</h4>
          </div>
        </div>

        <div class="row" data-aos="flip-right" >
          <div class="col" style={{display:"flex",flexWrap: "wrap"}} >
            <div style ={{flexDirection:"column",flex:5,minWidth:"300px"}}>
              <div >
                <h3 class = "heading mb-0">Software Developer Intern</h3>
              </div>
              <div class="subheading mb-3">Reaction Digital</div>
              <div class = "description">
                <ul>
                  <li>
                    Intern at game startup focusing on a game centered around aerial combat 
                  </li>
                  <li>
                    Responsible for coding the aircraft movement, allowing for smooth and easy control of the aircraft. 
                  </li>
                  <li>
                    Worked with a team in charge of setting up the networking of the game, allowing for players to join a game through server selection.
                  </li>
                </ul>
              </div>
            </div>
            <h4 class="date">Jun. 2021 - Dec. 2021</h4>
          </div>
        </div>

        <div class="row" data-aos="flip-right" >
          <div class="col" style={{display:"flex",flexWrap: "wrap"}} >
            <div style ={{flexDirection:"column",flex:5,minWidth:"300px"}}>
              <div>
                <h3 class = "heading mb-0">Python Developer</h3>
              </div>
              <div class="subheading mb-3">Reaction Digital</div>
              <div class = "description">
                <ul>
                  <li>
                  Web-scrape, transform, and transpose data regarding Covid-19 infection and deaths rates across the US.
                  </li>
                  <li>
                   Completed the automation process of seven states, eliminating the need for interns to manually input data.
                  </li>
                  <li>
                  Supervisor of the automation team (10+ interns). Resolved questions asked by interns and in charge of assigning tasks. 
                  </li>
                </ul>
              </div>
            </div>
            <h4 class="date">Jan. 2021 - Jun. 2021</h4>
          </div>
        </div>

        <div class="row" data-aos="flip-right" >
          <div class="col" style={{display:"flex",flexWrap: "wrap"}} >
            <div style ={{flexDirection:"column",flex:5,minWidth:"300px"}}>
              <div>
                <h3 class = "heading mb-0">Retail Employee</h3>
              </div>
              <div class="subheading mb-3">Marianos</div>
              <div class = "description">
                <ul>
                  <li>
                    Apart of the clicklist team, responsible for completing customer orders on time and deliving orders to customer cars on arrival
                  </li>

                </ul>
              </div>
            </div>
            <h4 class="date">Jan. 2021 - Jun. 2021</h4>
          </div>
        </div>
      </div>
    </section>   
       
    <section class="resume-section" id="education">
      <h2 class="center mb-2">Education</h2>
      <div class="row" data-aos="flip-right" >
          <div class="col" style={{display:"flex",flexWrap: "wrap"}} >
            <div style ={{flexDirection:"column",flex:5,minWidth:"300px"}}>
              <div>
                <h3 class = "heading mb-0">Loyola University Chicago</h3>
              </div>
              <div class="subheading mb-3">Bachelor of Science:Computer Science</div>
              <div class = "description">
                <ul>
                  <li>
                  3.85 GPA
                  </li>
                  <li>
                  Dean's List (5/5) Semesters
                  </li>
                </ul>
              </div>
            </div>
            <h4 class="date">Anticipated Aug. 2019 - Dec. 2022</h4>
          </div>
        </div>
      
    </section>

    <section class="resume-section p-3" id="Certifications">
      <div class="my-auto">
        <h2 class="mb-5">Certs</h2>
        <div class="d-flex justify-content-center" data-aos="flip-up">
          <a href="https://www.credly.com/badges/b16efb42-38d8-4ec7-8648-925ab8604bae/public_url">
            <img style={{height:200,width:200}}src={require('./images/cp.png')}class = "img-fluid" alt="Python" id="projectImage"/>
          </a>
          <a href="https://www.credly.com/badges/9d15d991-c30e-41a9-a9d6-7999f0154fab/public_url">
            <img style={{height:200,width:200}}src={require('./images/sa.png')}class = "img-fluid" alt="Python" id="projectImage"/>
          </a>
        </div>
      </div>
    </section>

    <section class="resume-section " id="skills">
      <div class="container-fluid">
        <h2 >Skills</h2>
        <div class="row" data-aos="flip-down">
          <h4 class="heading">Programming Skills</h4>
          <div class = "description" >
            <ul class="list-inline">
              <li class="list-inline-item">Python, Javascript, Java, HTML, CSS, bash, C++</li>
            </ul>
          </div>
          <h4 class="heading mt-3">AWS Skills</h4>
          <div class = "description" >
            <ul class="list-inline">
              <li class="list-inline-item">Lambda, EC2, S3, RDS, Route53</li>
            </ul>      
          </div>     
          <h4 class="heading mt-3">Frameworks</h4>
          <div class = "description" >
            <ul class="list-inline">
              <li class="list-inline-item">React.js, Django, Flask, Node.js, Express.js</li>
            </ul>
          </div>
          <h4 class="heading mt-3">Databases</h4>
          <div class = "description" >
          <ul class="list-inline">
            <li class="list-inline-item">MariaDB, MySQL, Postgresql, Redis, MongoDB</li>
          </ul>
          </div>
        </div>
      </div>
    </section>

     <section class="resume-section p-3" id="Certifications">
      <div class="my-auto">
        <h2 class="mb-5">Contact</h2>
      </div>
    </section>

  </div>

  <script src="js/resume.min.js"></script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</body>
</html>
)}

export default App;
