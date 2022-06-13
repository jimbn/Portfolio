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
            language: "JavaScript",
            tools: ["MongodDb", "Express.js", "React", "Node.js", "GraphQL", "Leaflet",
        "Geosearch", "React-Bootstrap", "Material UI", "Heroku"],
            gitHub: 'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: PartyHearty,
        },
        {
            name: "Only_Friends",
            description: "Second projecct",
            language: "JavaScript",
            tools: ["SQL", "Express.js", "Node.js", "Handlebars.js", "Multer", "Heroku"],
            gitHub:'https://github.com/MCORTEZM1/Only_Friends',
            site: "https://only-friendz.herokuapp.com/",
            image: OnlyFriend,
        },
        {
            name: "Human's Best Friend",
            description: "First project.",
            language: "JavaScript",
            tools: ["MD Bootstrap", "Third-Party APIs"],
            gitHub:'https://github.com/jimbn/Project-01',
            site: "https://jimbn.github.io/Project-01/",
            image: BestFriend,
        },

        
    ];

    


    return (
        <>
        <div className="accordian">
            {array.map((array) =>(
                <div className='accordian-item'>
                    <img 
                        src={array.image}
                        alt={array.name}
                    />
                    <div className ="project-text">
                        <div>
                            <div className="flex">
                                <h1>{array.name}</h1>
                                <h3>{array.language}</h3>
                            </div>
                            <h4>{array.description}</h4>
                            <h5 className="tool-list"><ul>
                                {array.tools.map((tools) =><li>{tools}</li>)}
                            </ul></h5>
                        </div>
                        <div className="flex bottom">
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