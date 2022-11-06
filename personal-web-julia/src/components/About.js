import React from 'react'


const About = (props) => {

    const SCREEN_CONSTANTS = { 
        description: "Saya merupakan seorang Front End Web Developer. Saya membuat situs web lebih & lebih interaktif dengan animasi web. Desain responsif membuat situs web Anda dapat diakses oleh semua pengguna, terlepas dari perangkat mereka",
        highlights: {
            bullets: [
                "Front End Web Development",      
                "Managing database",
                "UI/UX Design"
           ],
           heading: "My Highlight:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    return (
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent ">
                <h2>About Me</h2>
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;
