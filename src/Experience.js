import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component{
        
    render(){
        return (
            
            <div className="services" id="Timeline">
                <h2>Internships</h2>

                <div className="row">

                    <div>
                        
                        <h3>Software Development Intern</h3>
                        <p>• Worked with the Spice Small Business team in their e-commerce division.
                           • Designed navigation system, created REST-APIs, and developed a real-time dashboard that returns addresses of customers requiring services from the organization based on a few parameters.
                            Technologies used: Java, JSON, Git.</p>
                    </div> 
                    
                    <div>
                        
                        <h3>Data Science Intern</h3>
                        <p>• Quality Assurance and Software Debugging.
                           • Case Studies on Exit analysis in Organizations using Machine Learning Algorithms.
                           • Research on Sentiment analysis using Python and NTLK.</p>
                    </div> 
                    
                    <div>
                        
                        <h3>Data Analytics Intern</h3>
                        <p>• Worked closely with Digital Marketing and Development team.
                            • Responsible for creating Interactive Reports and Dashboards. It is now used to view user
                            engagement metrics such as the number of active users and the summary of their activities on the
                            website I worked on.
                            • Analyzed large amounts of data to find patterns of inconsistencies and anomalies using Tableau.
                            • Development of hundreds of Business Proposals and Improving Customer Relationship Management using Data Analytics.
                            • Created a User-Friendly Model with its complete solution for the typical case study of Reseller Sales Analysis.</p>
                    </div> 
                </div> 
                
                {/* <a href="#work" class="btn">My Work</a> */}
            </div>

        );



    }




}

export default Experience;