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
            description: 'Party Hearty is a web application that allows user to sign up and create events that contains their id key. Each event has details pertiaing to the event and map pinpointing to the exact location. Additionally, user are able to update and delete their events that they create. Along with presenting the event, the application allow the user to send out invite to other user on the platform and provide a guest list where other user can RSVP to.',
            language: "JavaScript",
            tools: ["MongodDb", "Express.js", "React", "Node.js", "GraphQL", "Leaflet",
        "Geosearch", "React-Bootstrap", "Material UI", "Heroku"],
            gitHub: 'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: PartyHearty,
        },
        {
            name: "Only_Friends",
            description: "Only_Friends is a social media web platform where users can connect with others, create unique profiles that enables them to post about their interest and comment on other users' post. The application also allow for user to upload image when making their post and to personalize their profile with their own profile image",
            language: "JavaScript",
            tools: ["SQL", "Express.js", "Node.js", "Handlebars.js", "Multer", "Heroku"],
            gitHub:'https://github.com/MCORTEZM1/Only_Friends',
            site: "https://only-friendz.herokuapp.com/",
            image: OnlyFriend,
        },
        {
            name: "Human's Best Friend",
            description: "Human's Best Friend is a web application that utalize third-party API to serch for dog related facility near the area that they specify. Additionally, the application provide user with a fun fact about various dog breed through the use of a drop down menu fetching third-party api",
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
                                <a href = {array.gitHub} target="blank">
                                    <img className="gitIcon" src={gitPic} alt="GitHub Icon" /> 
                                </a> 
                            </div>
                            <br></br>
                            <div>
                                <a href = {array.site} target="blank">
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