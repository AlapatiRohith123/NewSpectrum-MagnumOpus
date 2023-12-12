import React from "react";
import "./../files/nav.css";
function Home(){
    return(
        <div>
            <header className="homeHeader">
                <h1 id="mainHeading">Welcome to MagnumOpus</h1>
                <p>An innovative platform for solving real-world business problems through collaboration.</p>
            </header>

            <section id="about">
                <div className="container">
                    <h2>About Us</h2>
                    <p>MagnumOpus connects business leaders with creative students to tackle real-world challenges. Entrepreneurs can post their problem statements, and students can collaborate to find innovative solutions.</p>
                </div>
            </section>

            <section id="how-it-works">
                <div className="container">
                    <h2>How It Works</h2>
                    <div className="step">
                        <div className="step-icon">1</div>
                        <div className="step-content">
                            <h3>Submit a Problem</h3>
                            <p>Entrepreneurs post their real-world business problems, providing details and context.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-icon">2</div>
                        <div className="step-content">
                            <h3>Collaborate</h3>
                            <p>Students and experts collaborate on solving the problems, sharing ideas and expertise.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-icon">3</div>
                        <div className="step-content">
                            <h3>Find Solutions</h3>
                            <p>Discover innovative solutions and insights through collaboration and brainstorming.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="container">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Post and track your business problems</li>
                        <li>Fruitful collaboration between business leaders and students</li>
                        <li>Unlock innovative solutions</li>
                        <li>Discussion forums and expert mentoring</li>
                        <li>Analytics and progress tracking</li>
                    </ul>
                </div>
            </section>

            <section id="get-started">
                <div className="container">
                    <h2>Get Started</h2>
                    <p>Join our community of problem solvers today!</p>
                    <a href="Signup" className="signupButton">Sign Up</a>
                </div>
            </section>

            <footer className="homeFooter">
                <p>&copy; 2023 MagnumOpus - Business Problem Solvers</p>
            </footer>
        </div>
    )
}
export default Home;