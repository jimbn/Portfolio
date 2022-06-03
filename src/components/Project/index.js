import React from "react";
import placeholder from '../../assets/placeholder.jpg';
import './style.css'
import gitPic from './blackGit.png'

function Project () {
    const array = [
        {
            name: 'Party Hearty',
            description: 'Third Project',
            language: "HTML, CSS, JS",
            library: "mongoose, graphql, react, express, node, MaterialUi, leaflet, bootstrap",
            gitHub: 'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: placeholder,
        },
        {
            name: "Human's Best Friend",
            description: "First project.",
            language: "HTML, CSS, JS",
            library: "MD Bootstrap",
            gitHub:'https://github.com/jimbn/Project-01',
            site: "https://jimbn.github.io/Project-01/",
            image: placeholder,
        },
        {
            name: "Only_Friends",
            description: "Second projecct",
            language: "HTML, CSS, JS",
            library: "MySql2, Express, Node, Multer, Handlebars",
            gitHub:'https://github.com/MCORTEZM1/Only_Friends',
            site: "https://only-friendz.herokuapp.com/",
            image: placeholder,
        },
        {
            name: 'Party Hearty',
            description: 'Third Project',
            language: "HTML, CSS, JS",
            library: "mongoose, graphql, react, express, node, MaterialUi, leaflet, bootstrap",
            gitHub:'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: placeholder,
        },
        {
            name: 'Party Hearty',
            description: 'Third Project',
            language: "HTML, CSS, JS",
            library: "mongoose, graphql, react, express, node, MaterialUi, leaflet, bootstrap",
            gitHub: 'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: placeholder,
        },
        {
            name: 'Party Hearty',
            description: 'Third Project',
            language: "HTML, CSS, JS",
            library: "mongoose, graphql, react, express, node, MaterialUi, leaflet, bootstrap",
            gitHub: 'https://github.com/sammcowen/party_hearty',
            site: "https://stormy-thicket-02132.herokuapp.com/",
            image: placeholder,
        },
        
    ];

    


    return (
        <>
        <div className="portfolio">
            <h1>Portfolio</h1>
        </div>
        <div className="flex">
            {array.map((array) =>(
                <div className='card' style={{backgroundImage: `url(${array.image})`}}>
                    <div>
                        <h1>{array.name}</h1>
                        <h3>Languages: {array.language}</h3>
                        <h3>{array.library}</h3>
                    </div>
                    <div>
                        <div>
                            <a href = {array.gitHub}>
                                <img src={gitPic} alt="GitHub Icon" /> 
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
            ))}
        </div>
        </>
    )
};

export default Project;