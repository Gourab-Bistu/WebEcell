import React from 'react';
import './ECellComponent.css';

function ECellComponent() {
  return (
    <div>
      {/* <section id="whatwedo">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 whatwedo">WHAT WE DO ?</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 work">We help students in developing their entrepreneurship skills & create enthusiasm towards the start-up ecosystem by means of engaging activities like Guest Lectures, Panel Discussions, Business Plan/Model and Idea Pitching sessions. E-Cell NIT Jamshedpur is a team of hardworking and goal-oriented individuals, devoted to empowering students in the field of entrepreneurship.</p>
          </div>
        </div>
      </section> */}

      <h1 className='deptHeading'>DEPARTMENTS</h1>
      <div className="container1">
        <div className="row text-center firstRow">
          <div className="col-md-6 col-lg-4 col-xs-12 service">
            <i className="fa-solid fa-pen-to-square icons"></i>
            <h4>CRN</h4>
            <p>Our Corporate Relations Team manages corporate connections of E-Cell NIT Jamshedpur spanning, but not limited to, incubators, investors, mentors, and other stakeholders, which help us in our journey. The team also acts as a liaison between E-Cell and the media for coverage and article writing and publishing. It is the sole point of contact for eminent guests who are involved in E-Cell events.</p>
            <a href="/"><button type="button" className="btn btn-primary btm">Explore More</button></a>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12 service">
            <i className="fa-solid fa-envelope icons"></i>
            <h4>SOCIAL MEDIA AND MARKETING</h4>
            <p>The team helps in developing and launching marketing campaigns for E-Cell NIT Jamshedpur and its sponsors. The team facilitates our outreach program to educate people even outside the boundaries of NIT Jamshedpur through online events like quizzes, word banks, facts, and success stories. They solicit contact with people who are interested in helping us achieve our mission goals and objectives.</p>
            <a href="/"><button type="button" className="btn btn-primary btm">Explore More</button></a>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12 service">
            <i className="fa-solid fa-globe icons"></i>
            <h4>WEB DEVELOPMENT</h4>
            <p>E-Cell also constitutes a tech-savvy Web Dev team consisting of enthusiastic programmers and talented web developers to ensure and maintain the functionality of our website. They comprise UI/UX designing experts, SEO specialists, and full-stack developers to implement cutting-edge technologies for the best user experience.</p>
            <a href="/"><button type="button" className="btn btn-primary btm">Explore More</button></a>
          </div>
        </div>
        <div className="row text-center firstRow">
          <div className="col-md-6 col-lg-4 col-xs-12 service">
            <i className="fa-solid fa-code icons"></i>
            <h4>APP DEVELOPMENT</h4>
            <p>This team consists of seasoned app developers who work on Android Studio IDE to deploy important notifications and event updates on the E-Cell app for easy access to event details and startup news/opportunities for students of NIT Jamshedpur.</p>
            <a href="/"><button type="button" className="btn btn-primary btm">Explore More</button></a>
          </div>
          <div className="col-md-6 col-lg-4 col-xs-12 service">
            <i className="fa-solid fa-hashtag icons"></i>
            <h4>OPERATIONS</h4>
            <p>This team forms the backbone of all events E-Cell NIT Jamshedpur hosts, including seminars, webinars, and competitions in the institute. They are responsible for planning the event, estimating requisites, and facilitating a conducive environment for easy functioning.</p>
          <a href="/"><button type="button" className="btn btn-primary btm">Explore More</button></a>
        </div>
        <div className="col-md-6 col-lg-4 col-xs-12 service">
          <i className="fa-solid fa-palette icons"></i>
          <h4>CREATIVE DESIGNING</h4>
          <p>E-Cell also constitutes a tech-savvy Web Dev team consisting of enthusiastic programmers and talented web developers to ensure and maintain the functionality of our website. They comprise UI/UX designing experts, SEO specialists, and full-stack developers to implement cutting-edge technologies for the best user experience.</p>
          <a href="/"><button type="button" className="btn btn-primary btm">Explore More</button></a>
        </div>
      </div>
    </div>
  </div>
);

}

export default ECellComponent;
