import React from 'react';
import './style.css';
import me from './mePic.jpg';

function About() {
    return (
    <>
    <h2>Jim Bui Nguyen</h2>

    <div className='flex about'>
        <div>
            <div className='profile'>
                <div>
                    <div className="profile-pic"> 
                        <img src={me} alt="Jim Bui Nguyen" /> 
                    </div>
                </div>
            </div>
        </div>
        <div className="about-description">
            <div>
                <p>
                    I'm a driven full stack developer focusing on MERN stack. Recently completed and earned a certificate
                    in Full Stack Web Development from University of California, Berkeley coding bootcamp. With my experience,
                    I enjoy learning and apply new concepts and knowledge to create and improve on various web
                    applications that implements CRUD.
                </p>
                <p>
                    As a backstory, I graduated from University of California, Irvine with a bachelor degree in
                    Biological Science. I have previously work in retail, food services, and commercial realestate. 
                    With my past experiences, it built my problem solving skills and being able to work independently
                    and in a team environment. 
                </p>
            </div>
        </div>
    </div>
    </>
    )
}

export default About;