import React from "react";
import "./../files/nav.css";
function My_problems(){
    return(
        <div>
            <div className="filter">
                <h2>Filters</h2>
                <input type="checkbox" name="filter2" id="filter2" value="Information Technology"/>
                <label for="filter2">Information Technology</label><br/>
                <input type="checkbox" name="filter3" id="filter3" value="Digital transformation"/>
                <label for="filter3">Digital transformation</label><br/>
                <input type="checkbox" name="filter4" id="filter4" value="UX"/>
                <label for="filter4">UX</label><br/>
                <input type="checkbox" name="filter5" id="filter5" value="Business"/>
                <label for="filter5">Business</label><br/>
            </div>
            <div className="container">
                <div style={{marginLeft: "18%"}}>
                    <div className="content2" style={{paddingTop: "70px"}}>
                        <span><a href="Business_ideas"><b>Business problem statement</b><br/>ABC Supermarket customers in the northern region of Uttar Pradesh have significantly decreased over the past decade, while other areas of the state continue to see increasing numbers of sales at physical retail stores.
                            <br/>Surveys conducted by ABC Supermarkets suggest that sales are lowest among people between the ages of 18 to 30 and low-income households (making under five lakh rupees for a four-person household annually). The research conducted on sales patterns in other northern Indian states suggests that this could indicate a broader trend. Still, this region's demographics suggest that it could become a more significant problem.
                            <br/>Statistics from the 2019 Indian Business Review show that consumer spending within this demographic is at an all-time high. The study attributed these findings to the increase in disposable income and quality of life among city dwellers. The 2019 Indian Fitness Journal also shows increased consumer interest in diet and health among people between the ages of 18 to 25.
                            <br/>Other parts of the country have made attempts and succeeded, to a degree, to improve sales, but similar solutions have not had the desired effect here in northern Uttar Pradesh. More research is needed on the reasons these attempts have failed and what strategies might have more of an impact on reaching younger and lower-income households.</a>
                        </span>
                        <span><a href="#not"><b>UX problem statement</b><br/>Users of our proposal software have reported frustration at having to copy information into the CRM after they send a proposal. They use their CRMs to track all email conversations, phone calls, and other lead and client interactions. Without CRM integrations, our proposal software causes a frustrating experience for our power users. While users from very small businesses and firms don’t have this issue, we are hearing from sales reps at SMBs and enterprises that the need to duplicate proposal sending information in their CRM causes an additional two to three hours of work every week. The problem is that we don’t have any integrations with CRMs and we have not yet identified the CRMs of our best users. We need to send segmented surveys to determine our priorities for the first three CRMs to integrate with, and we need to build in the user flows around these integrations</a></span>
                        <span><a href="#not"><b>Digital transformation problem statement</b><br/>We are in need of a faster and more secure way to onboard and offboard employees. Our current processes require hiring managers to ask the security team for the same tasks over and over, and for the security team to hand over repetitive tasks to IT. We need to use automation to address repetitive tasks for onboarding, such as granting access to platforms and devices and during offboarding when revoking access. We also need a solution to address security concerns when employees lose their devices. We need a proprietary solution that is perfectly customized to our needs. The cost of custom solutions will be evaluated against their ability to save time for high-wage employees (security and IT). No former attempts have been made to resolve these issues with automation and custom coding.</a></span>
                        <span><a href="#not"><b>Problem statement for IT</b><br/>We have had a no-working-from home policy in effect for all staff members of our school district since its founding date. However, in light of recent events (the prevalence of working from home in the aftermath of the Covid-19 pandemic) and after witnessing 3 neighboring school districts allowing some form of work from home, we feel that we can no longer disallow all forms of working from home. Our office staff members have been complaining about our policy for the past 3 years. We are concerned that we will not be able to hire new quality staff members, who may prefer to apply at one of our neighboring school districts. We are also concerned about losing our current staff members to one of these districts.
                            <br/>We feel that it is now essential to offer some form of working from home. To start, we would like to only allow staff to work from home when they are sick (with minimal symptoms) or quarantining from Covid-19. Many staff members will feel perfectly healthy, but have to stay home due to our continued 14-day quarantine policy. This causes major delays and challenges among the office staff, who are short staffed as it is.
                            <br/>To solve this problem, we will need to provide secure access to MicroSoft Teams and the other cloud computing software that office staff use. We may need to provide them with district-issued devices to ensure the security of our data when staff are working from home. Our IT department will further assess these problems and come up with a solution to allow staff to work from home. After piloting this policy for quarantine days only, we may consider permitting one day of work from home per week, however this will not be announced to staff until after the initial pilot is successful.
                            <br/>This problem needs to be resolved by July, in order to permit working from home for the coming school year. The current severity of this problem is low, but it has a potential to impact security and productivity at a high level.</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default My_problems;