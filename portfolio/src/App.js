import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./resume.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import ScrollTrigger from '@terwanerik/scrolltrigger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    AOS.init({once:true});
  }, []);
  return (
    
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Salvatore Pecoraro</title>
 
  {/* <!-- Bootstrap core CSS --> */}
  {/* <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
  {/* <!-- Custom fonts for this template --> */}

  <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
  <link href="vendor/devicons/css/devicons.min.css" rel="stylesheet" />
  <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />

  {/* <!-- Custom styles for this template --> */}
  <link href="resume.css" rel="stylesheet" />
</head>
{/* <script src="https://kit.fontawesome.com/c4d19af1e9.js" crossorigin="anonymous"></script> */}

<body id="page-top">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Pecoraro</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./sal.jpg')} alt="" />
      </span>
    </a>
    <img/>

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
          <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        {/* <!--
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
					</li>
					--> */}
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">
    <section class="resume-section d-flex d-column" id="about">
      <div class="my-auto" data-aos="zoom-out">
        <h1 class="mb-0" >
          <span class = "name">Sal</span>
          <span class="text-primary name"> Pecoraro</span>
        </h1>
        <h3>Full Stack Developer</h3>
        <div class="subheading mb-5">
          Chicago, IL
          <a href="mailto:scpecoraro@gmail.com"> scpecoraro@gmail.com</a>
        </div>
        
        <p class="mb-5">
        </p>
        {/* <a href="RobertHerberResume.pdf" target="_blank">View Resume as PDF</a>
        <br />
        <a href="RobertHerberPersonalProjects.pdf" target="_blank">View Projects as PDF</a>
        <br /> */}
        {/* <br /> */}
        
        <ul class="list-inline list-social-icons mb-0" >
          <li class="list-inline-item" >
            <a href="http://www.cnnstockpredictor.com/polls">
              <span class="fa-stack fa-lg" id = "stock">
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
    

    <section class="resume-section p-3 p-lg-5 d-flex flex-column " id="experience">
      <div class="my-auto">
        <h2 class="mb-5" >Experience</h2>

        <div class="resume-item d-flex flex-column flex-md-row mb-5" data-aos="fade-up">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">TMobile</h3>
            <div class="subheading mb-3">MGM Resorts International</div>
            <ul>
              <li>
                Led a team of 15 engineers to develop and maintain many services written in C# .NET in Azure to
                f
              </li>
              <li>
                Delivered digital check in’s first monetization feature, reservations addons, generating $1.3M in the
                first two months
              </li>
              <li>
                Designed and developed a cloud housekeeping service that remains in sync with the on-premises source
                system while providing a fa
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
          <span class="text-primary">July 2021 - March 2022</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row mb-5" data-aos="fade-up">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">TMobile</h3>
            <div class="subheading mb-3">MGM Resorts International</div>
            <ul>
              <li>
                Led a team of 15 engineers to develop and maintain many services written in C# .NET in Azure to
                facilitate our digital check in process
              </li>
              <li>
                Delivered digital check in’s first monetization feature, reservations addons, generating $1.3M in the
                first two months
              </li>
              <li>
                Designed and developed a cloud housekeeping service that remains in sync with the on-premises source
                system while providing a fast, highly scalable, and highly available service to clients
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">July 2021 - March 2022</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row mb-5" data-aos="fade-up">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Senior Software Engineer</h3>
            <div class="subheading mb-3">MGM Resorts International</div>
            <ul>
              <li>
                Delivered core backend services for contactless digital check in 6 months ahead of schedule resulting in
                helping the company reduce operational loss from $300M per month to $100M per month
              </li>
              <li>
                Led the development effort to build a GraphQL layer using Apollo Server (NodeJS) and Typescript on
                top of many REST services to provide a unified, easy to consume API for client applications
              </li>
              <li>
                Designed the GraphQL service to scale up and out to handle millions of requests per day using AWS ECS
                and
                Lambda
              </li>
              <li>
                Built CICD using Github Actions to automate testing, building, and deploying to production and non-
                production environments
              </li>
              <li>
                Utilized Terraform infrastructure as code to automate creation and updating of cloud resources during
                CICD
              </li>
              <li>
                Built automation to create dashboards and monitoring and alerting to ensure the team consistently
                meets out 99.9% uptime SLA
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">January 2020 - July 2021</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Applications Developer II</h3>
            <div class="subheading mb-3">Centuri Group</div>
            <ul>
              <li>
                Led the initiative to convert our back-end web services to .NET Core from PHP, leading to up to 100%
                speed increases on HTTP requests and resulting in better integration with our otherwise Microsoft
                stack
              </li>
              <li>Mentored junior and senior developers alike on C#, TypeScript, and common design patterns</li>
              <li>
                Led the effort to start using TypeScript for front-end development, leading to more maintainable,
                selfdocumenting code with less run-time errors
              </li>
              <li>
                Worked as part of a team to design, build, and maintain various in-house applications used by workers
                to automate daily progress reporting, safety audits, materials management, and more
              </li>
              <li>Developed and maintained many RESTful APIs using SlimPHP (PHP), and .NET Core (C#)</li>
              <li>
                Developed and maintained many client side applications using JavaScript, AngularJS, VueJS, and Xamarin
              </li>
              <li>
                Improved the development speed of the team and the maintainability of the PHP codebase by building an
                OData Query Builder library for quick and fluent building of OData queries
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">March 2019 - January 2020</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Software Developer Contractor</h3>
            <div class="subheading mb-3">Wellborn Cabinets</div>
            <ul>
              <li>
                Developed a web application (using Bootstrap, PHP, JavaScript, SQL, and the Google Maps API) and an
                accompanying IOS application (using Swift) that allows a user to define a geofence shape on a map. The
                shape is then saved in a database and anytime a user with the application installed on his/her phone
                enters or exits any shape saved in the database, the entry/exit is recorded in the database
              </li>
              <li>
                Created a web application (using JavaScript, jQuery, AJAX, and PHP) that allows users to create room
                layouts with various 2D shapes. The shapes all have collision detection and will attempt to find the
                next available area to occupy if a collision between two shapes occurs. The system also allows users
                to save and load room layouts in a local database
              </li>
              <li>
                Utilized the Google Drive, Gmail, YouTube, and Google Calendars API to integrate Google account
                support into the company's existing content management system
              </li>
              <li>
                Developed and maintained many PHP CRUD applications to collect, analyze, and display business data
              </li>
              <li>
                Utilized the QuickBooks API and OAuth2 to build a web application (using PHP) to transmit and validate
                secure transactions to QuickBooks
              </li>
              <li>Analyzed and diagrammed the company’s online ordering system using UML standards</li>
              <li>Created a room designing program that allows users to design a room to their liking</li>
              <li>
                Developed a scheduling web application (using PHP, SQL, and Bootstrap) that shows the available time
                slots for appointments based on the employee’s availability, room availability, and time and date
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">August 2016 - January 2019</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Software Developer Contractor</h3>
            <div class="subheading mb-3">Able Games LLC</div>
            <ul>
              <li>Worked as part of a team to develop a mobile game (Android and IOS) using Unity and C#</li>
              <li>Developed the game’s artificial intelligence using finite state machines and behavior trees</li>
              <li>
                Optimized the game’s code to be able to achieve 30 FPS or more on target devices while rendering and
                computing complex tasks for up to 50 units on screen at once
              </li>
              <li>Scripted roughly 80% of the game’s gameplay mechanics, logic, and features</li>
              <li>
                Demoed the prototype to producers and marketing professionals at the 2018 Game Developers Conference
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">December 2017 - August 2018</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Chemical, Biological, Radiological, and Nuclear Specialist</h3>
            <div class="subheading mb-3">U.S. Army Reserves</div>
            <ul>
              <li>Sergeant directly in charge of managing, supervising, leading, and training 4 people</li>
              <li>Personally responsible for over $1.5 million worth of military equipment</li>
              <li>Experienced in detecting, handling, analyzing, and decontaminating hazardous materials</li>
              <li>Participated in 5 major Army training events</li>
              <li>Completed and excelled in the Army Warrior Leadership Course</li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">November 2009 - November 2017</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Family Services Counselor</h3>
            <div class="subheading mb-3">FamiliesFirst Network</div>
            <ul>
              <li>Case manager responsible for 7 dependency court cases</li>
              <li>Prepared and presented various legal documents to the court</li>
              <li>Referred clients out to various community-based services based on family need</li>
              <li>Responsible for assessing environments and people for potential child safety hazards</li>
            </ul>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">August 2015 - July 2016</span>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section p-3" id="education">
      <div class="my-auto">
        <h2 class="mb-5">Education</h2>
        <div class="resume-item d-flex mb-5">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Bachelor of Science</h3>
            <div class="subheading mb-3">Loyola University of Chicago| Chicago, IL</div>
            <div>Computer Science</div>
            <p>GPA: 3.8</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">January 2017 - December 2018</span>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="projects">
      <div class="my-auto">
      <div class="container-fluid">
        <h2 class="mb-5" style = {{textAlign: "center"}}>Projects</h2>
        {/* <div class="row "> */}
          {/* <div class="col-md-7 ">
            <img src={require('./buses.png')}class = "img-fluid" alt="Python" id="busesImage"/>
          </div>  */}

          {/* <div class="col-md-12">
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">CTA Bus Delay Tracker</h3>
            </div>
            </div>
          </div> */}
        {/* </div> */}
        <div class = "row">
          <div class="col-md-7 " data-aos="fade-up" id = "projectImageColumn">
              <img src={require('./buses.png')}class = "img-fluid" alt="Python" id="projectImage"/>
          </div> 
          <div class="col-md-5">
            <h3 class="mb-0">CTA Bus Delay Tracker</h3>
              <div class="subheading mb-3">
                Web Application<br />
                <ul class="list-inline list-social-icons mb-0" >
                  <span>Skills Used: </span>
                  <li class="list-inline-item" >
                  <img src={require('./react.png')} data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" alt="Python" width="35" height="35" style={{marginRight:"1rem"}}/>
                  <img src={require('./nodejs.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  <img src={require('./amazon-aws.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  <img src={require('./python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  <img src={require('./ubuntu.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  <img src={require('./redis.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                  </li>
                </ul>
                <ul>
                  <li>Developed a web application that allows users to track CTA bus delays. The application additionally allows users to 
                    view how late a bus is on average. 
                  </li>
                  <li>An AWS Lambda function is called up to 400 times a day for all 1600 CTA buses to deliver the most up to date 
                    contents to its users. This lambda function runs a python script that calls the CTA Rest API. 
                  </li>
                  <li>
                    An AWS RDS MariaDB server is utilized to store bus data, user data, and web scraped data. To combat high load times from querying
                    enourmouse tables, a Redis server was employed to cut down load times by up to 10 seconds. Redis was quick and easy to employ, and 
                    helped to make the application more user friendly. 
                  </li>
                  <li>A React.js frontend and Node.js/express.js backend was used to create the web application. </li>
                </ul>
              </div>
          </div>
        </div>

        <div class ="row">
          <div class="col-md-7 " id = "projectImageColumn">
            <a href="http://www.cnnstockpredictor.com/polls">
              <img src={require('./cnn.png')}class = "img-fluid" alt="Python" id="projectImage"/>
            </a>
          </div> 
          <div class="col-md-5">
            <h3 class="mb-0">CNN Stock Scraper</h3>
            <div class="subheading mb-3">
              Web Application<br />
              <ul class="list-inline list-social-icons mb-0" >
                <span>Skills Used: </span>
                <li class="list-inline-item" >
                <img src={require('./django.png')} alt="Python" width="35" height="35" style={{marginRight:"1rem"}}/>
                <img src={require('./postgresql.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                <img src={require('./python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                <img src={require('./amazon-aws.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                <img src={require('./ubuntu.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </li>
              </ul>
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
        </div>

        <div class ="row">
          <div class="col-md-7" id = "projectImageColumn">
            <a href="http://www.performancescheduler.com">
              <img src={require('./performanceScheduler.png')}class = "img-fluid" alt="Python" id="projectImage"/>
            </a>
          </div> 
          <div class="col-md-5">
            <h3 class="mb-0">Performance Scheduler</h3>
            <div class="subheading mb-3">
              Web Application<br />
              <ul class="list-inline list-social-icons mb-0" >
                <span>Skills Used: </span>
                <li class="list-inline-item" >
                <img src={require('./django.png')} alt="Python" width="35" height="35" style={{marginRight:"1rem"}}/>
                <img src={require('./postgresql.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                <img src={require('./python.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                <img src={require('./amazon-aws.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                <img src={require('./ubuntu.png')} alt="Python" width="40" height="40" style={{marginRight:"1rem"}}/>
                </li>
              </ul>
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
        </div>
      </div>
      </div>
    </section>

    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div class="my-auto">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Primary Programming Languages</div>
        <ul class="list-inline">
          <li class="list-inline-item">C#</li>
          <li class="list-inline-item">PHP</li>
          <li class="list-inline-item">TypeScript</li>
          <li class="list-inline-item">JavaScript</li>
          <li class="list-inline-item">SQL</li>
        </ul>

        <div class="subheading mb-3">Secondary Programming Languages</div>
        <ul class="list-inline">
          <li class="list-inline-item">Java</li>
          <li class="list-inline-item">C++</li>
          <li class="list-inline-item">Lua</li>
        </ul>

        <div class="subheading mb-3">Cloud Providers</div>
        <ul class="list-inline">
          <li class="list-inline-item">Azure (Function Apps, App Service, CosmosDB, Event hub, Event Grid, App Insights)
          </li>
          <li class="list-inline-item">AWS (Lambda, ECS, Fargate, ECR, AWS API Gateway, SNS, DynamoDB, Cloudwatch)</li>
          <li class="list-inline-item">Google Cloud Platform (Apigee)</li>
        </ul>

        <div class="subheading mb-3">CICD</div>
        <ul class="list-inline">
          <li class="list-inline-item">Azure DevOps</li>
          <li class="list-inline-item">Github Actions</li>
          <li class="list-inline-item">Terraform</li>
          <li class="list-inline-item">Azure Resource Manager (ARM) Templates</li>
        </ul>

        <div class="subheading mb-3">Frameworks</div>
        <ul class="list-inline">
          <li class="list-inline-item">.NET Core</li>
          <li class="list-inline-item">.NET Framework</li>
          <li class="list-inline-item">Hangfire</li>
          <li class="list-inline-item">Apollo GraphQL</li>
          <li class="list-inline-item">SlimPHP</li>
          <li class="list-inline-item">Angular</li>
          <li class="list-inline-item">AngularJS</li>
          <li class="list-inline-item">VueJS</li>
          <li class="list-inline-item">Unity</li>
        </ul>

        <div class="subheading mb-3">Testing Frameworks</div>
        <ul class="list-inline">
          <li class="list-inline-item">NUnit</li>
          <li class="list-inline-item">XUnit</li>
          <li class="list-inline-item">JUnit</li>
          <li class="list-inline-item">PHPUnit</li>
          <li class="list-inline-item">Jest</li>
        </ul>

        <div class="subheading mb-3">Databases</div>
        <ul class="list-inline">
          <li class="list-inline-item">Azure Cosmos DB</li>
          <li class="list-inline-item">AWS DynamoDB</li>
          <li class="list-inline-item">Microsoft SQL Server</li>
          <li class="list-inline-item">MySQL</li>
          <li class="list-inline-item">SQLite</li>
        </ul>

        <div class="subheading mb-3">Tools</div>
        <ul class="list-inline">
          <li class="list-inline-item">Docker</li>
          <li class="list-inline-item">Git</li>
          <li class="list-inline-item">Visual Studio Code</li>
          <li class="list-inline-item">Visual Studio</li>
          <li class="list-inline-item">SSH Tools (PuTTY, WinSCP)</li>
          <li class="list-inline-item">Postman</li>
          <li class="list-inline-item">Microsoft Azure</li>
          <li class="list-inline-item">Azure DevOps</li>
          <li class="list-inline-item">Chrome Developer Tools</li>
          <li class="list-inline-item">Debuggers</li>
          <li class="list-inline-item">Package Managers (NPM, Composer, NuGet)</li>
          <li class="list-inline-item">UML Modeling Tools (MS Visio, draw.io)</li>
        </ul>

        <div class="subheading mb-3">Concepts</div>
        <ul class="list-inline">
          <li class="list-inline-item">RESTful APIs</li>
          <li class="list-inline-item">GraphQL</li>
          <li class="list-inline-item">Serverless</li>
          <li class="list-inline-item">Infrastructure as Code</li>
          <li class="list-inline-item">Object Oriented Analysis and Design</li>
          <li class="list-inline-item">Object Oriented Programming</li>
          <li class="list-inline-item">Design Patterns</li>
          <li class="list-inline-item">Software Development Methodologies (Agile, Waterfall)</li>
          <li class="list-inline-item">Testing and Quality Assurance</li>
          <li class="list-inline-item">OData</li>
          <li class="list-inline-item">LAMP Stack</li>
          <li class="list-inline-item">MVC Architecture</li>
        </ul>

        <div class="subheading mb-3">Soft Skills</div>
        <ul class="list-inline">
          <li class="list-inline-item">Leadership</li>
          <li class="list-inline-item">Teamwork</li>
          <li class="list-inline-item">Team-building</li>
          <li class="list-inline-item">Management</li>
          <li class="list-inline-item">Conflict Resolution</li>
          <li class="list-inline-item">Collaboration</li>
          <li class="list-inline-item">Written and Verbal Communication</li>
        </ul>
      </div>
    </section>

    {/* <!--
			<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
				<div class="my-auto">
					<h2 class="mb-5">Interests</h2>
					<p>
						Work in progress.
					</p>
					<p class="mb-0">
						Work in progress.
					</p>
				</div>
			</section>
			--> */}

    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <div class="my-auto">
        <h2 class="mb-5">Awards</h2>
        <ul class="fa-ul mb-0">
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Summa Cum Laude Graduate (2018)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Best Graduating Graduate Student (2018)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Summa Cum Laude Graduate (2015)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Dean’s List for 8 consecutive years at the University of North Georgia, the University of West Georgia,
            and Kennesaw State University (2010 - 2018)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Ingram Scholar Recipient: requiring a 3.75 or higher cumulative GPA (2015)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Distinguished Honor Graduate of the Army Warrior Leadership Course (2013)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Honor Graduate of the United States Army Chemical School class 22-10 (2010)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            3 Certificates of Achievement for excellent performances during various Army training events (2010-2015)
          </li>
          <li>
            <i class="fa-li fa fa-trophy text-warning"></i>
            Achieved a “Gold” rating in the Georgia Work Ready program (2009)
          </li>
        </ul>
      </div>
    </section>
  </div>

  {/* <!-- Bootstrap core JavaScript --> */}
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>


  {/* <!-- Plugin JavaScript --> */}
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  {/* <!-- Custom scripts for this template --> */}
  <script src="js/resume.min.js"></script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
  
  </script>
</body>

</html>
  //   <div className="App">
  //     <Layout></Layout>
  //     <header className="App-header">
  //       <Button></Button>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
)}

export default App;
