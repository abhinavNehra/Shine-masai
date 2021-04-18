import React from 'react'
import styles from "./home.module.css";

function Footer() {
    return (
        <div style={{backgroundColor:"#f6faff",paddingRight:"48px",paddingLeft:"48px",paddingTop:"35px",paddingBottom:"20px",marginTop:"-95px"}}>
            <div style={{display:"flex",paddingBottom:"35px"}}>
                <div className={styles.footer}>
                    <div><strong style={{color:"#505E6B",fontSize:"14px",padding:"3px 0px"}}>Job seekers</strong></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Browse Jobs</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Job Search</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Register Now</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Login</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Create Free Job Alert</div></a></div>
                </div>
                <div className={styles.footer}>
                    <div><strong style={{color:"#505E6B",fontSize:"14px",padding:"3px 0px"}}>Employers</strong></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Recruiter India</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Post Jobs</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Access Database</div></a></div>
                </div>
                <div className={styles.footer}>
                    <div><strong style={{color:"#505E6B",fontSize:"14px",padding:"3px 0px"}}>Partner Sites</strong></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>English Mate</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Study Mate</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Hindustantimes.com</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>Livemint.com</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>LiveHindustain.com</div></a></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>OTTplay</div></a></div>

                </div>
                <div className={styles.footer}>
                    <div><strong style={{color:"#505E6B",fontSize:"14px",padding:"3px 0px"}}>Contact us</strong></div>
                    <div><strong style={{color:"#505E6B",fontSize:"14px",padding:"3px 0px"}}>080-47105555</strong></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}>contactus@shine.com</div></a></div>
                    <div style={{marginTop:"25px"}}><strong style={{color:"#505E6B",fontSize:"14px",padding:"3px 0px"}}>Follow us</strong></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px"}}><div className={styles.linkdin}></div><div className={styles.twitter}></div><div className={styles.facebook}></div></div></a></div>
                    <div style={{clear:"both"}}></div>
                    <div><a style={{textDecoration: "none" }} href="#"><div style={{color:"#4456BB",fontSize:"13px",padding:"3px 0px",marginTop:"25px"}}>
                        <button className={styles.buttonf}>
                            <div style={{width:"90px",margin:"auto",marginTop:"15px"}}>
                                <div className={styles.play} ></div>
                                <div className={styles.store} ></div>
                            </div>
                            <p style={{color:"#4456BB",fontSize:"14px"}}>Download Shine App</p>
                        </button>
                    </div></a></div>
                </div>

            </div>
            <div style={{borderTop:"1px solid #e7e7e7",paddingTop:"10px",paddingBottom:"10px"}}>
                <div style={{color:"#546473",fontSize:"12px",float:"left"}}>Feedback | FAQs | About Us | Contact Us | Privacy Policy | Cookie Policy | Fraud Alert | Business News | English News | Terms & Conditions | Disclaimer | Report a Job Posting</div>
                <div  style={{color:"#546473",fontSize:"12px",float:"right"}}>© 2021 HT Media Limited</div>


            </div>
       
            
            
        </div>
    )
}

export default Footer
