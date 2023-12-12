import React from "react";
import "./../files/nav.css";
function My_problems2(){
    return(
        <div>
            <div className="filter">
                <h2>Filters</h2>
                <input type="checkbox" name="filter2" id="filter2" value="Information Technology"/>
                <label htmlFor="filter2">Information Technology</label><br/>
                <input type="checkbox" name="filter3" id="filter3" value="Digital transformation"/>
                <label htmlFor="filter3">Digital transformation</label><br/>
                <input type="checkbox" name="filter4" id="filter4" value="UX"/>
                <label htmlFor="filter4">UX</label><br/>
                <input type="checkbox" name="filter5" id="filter5" value="Business"/>
                <label htmlFor="filter5">Business</label><br/>
            </div>
            <div className="container-fluid">
                <div style={{marginLeft: "18%"}}>
                    <div className="content2" style={{paddingTop: "40px"}}>
                        
                        <div className="box">
                            <h3 className="heading">Surveys conducted by ABC Supermarkets suggest that sales are lowest among people</h3>
                            <p className="matter">Statistics from the 2019 Indian Business Review show that consumer spending within this demographic is at an all-time high. The study attributed these findings to the increase in disposable income and quality of life among city dwellers. The 2019 Indian Fitness Journal also shows increased consumer interest in diet and health among people between the ages of 18 to 25. among people between the ages of 18 to 25</p>
                            <hr/>
                            <button className="fullbutton">See full problem</button>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default My_problems2;