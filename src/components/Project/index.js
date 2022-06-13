import React from "react";
import BestFriend from './ProjectScreenShot/HumanBestFriend.png';
import OnlyFriend from './ProjectScreenShot/OnlyFriends.png';
// import placeholder from '../../assets/placeholder.jpg';
import PartyHearty from './ProjectScreenShot/PartyHearty.jpg'
import './style.css'
import gitPic from './whiteGit.png'

function Project () {
    const array = [
        {
            name: 'Party Hearty',
            description: 'Third Project',
            language: "HTML, CSS, JS",
            library: "mongoose, graphql, react, express, node, MaterialUi, leaflet, bootstrap",
            gitHub: 'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: PartyHearty,
        },
        {
            name: "Human's Best Friend",
            description: "First project.",
            language: "HTML, CSS, JS",
            library: "MD Bootstrap",
            gitHub:'https://github.com/jimbn/Project-01',
            site: "https://jimbn.github.io/Project-01/",
            image: BestFriend,
        },
        {
            name: "Only_Friends",
            description: "Second projecct",
            language: "HTML, CSS, JS",
            library: "MySql2, Express, Node, Multer, Handlebars",
            gitHub:'https://github.com/MCORTEZM1/Only_Friends',
            site: "https://only-friendz.herokuapp.com/",
            image: OnlyFriend,
        },
            
        
    ];

    


    return (
        <>
        <div className="flex accordian">
            {array.map((array) =>(
                <div className='project accordian-item'>
                    <img 
                        src={array.image}
                        alt={array.name}
                        className="project-bg"
                    />
                    <div className ="project-text">
                        <div>
                            <h1>{array.name}</h1>
                            <h3><span>{array.language}</span></h3>
                            <h3><span>{array.library}</span></h3>
                        </div>
                        <div className="flex">
                            <div >
                                <a href = {array.gitHub}>
                                    <img className="gitIcon" src={gitPic} alt="GitHub Icon" /> 
                                </a> 
                            </div>
                            <br></br>
                            <div>
                                <a href = {array.site}>
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
};

export default Project;