import React from 'react';
import styled from 'styled-components';

const About = styled.div`
display: inline-block;
vertical-align: top;
padding: 30px;
overflow: hidden;
`
const Divider = styled.div`
padding: 10px 20px 0 20px;
border-bottom: 1px solid #f0f0f0;
margin-bottom: 20px;
box-sizing: border-box;
display: block;
line-height: 1.42857;
color: #333;
`

const Parrafo = styled.p`
`

const H1 = styled.h1`
text-align: center;
color:black;
`

const H2 = styled.h2`
text-align:center;
font-size:2rem;
color: #777;
`
const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
vertical-align: middle;
border: 1px;
box-sizing: border-box;
width: 200px;
`

const Profile = ({ profileData }) => {
    return <About>
        <div>
            <Image role="presentation" src={profileData.picture} width="200" />
        </div>
        <H1>{profileData.name}</H1>
        <H2>{profileData.label}</H2>
        <hr />
        <ul className="list-unstyled contact-links text-center">
            <li>
                <i className="fa fa-lg fa-location-arrow"></i>{profileData.location.city}, {profileData.location.postalCode}, {profileData.location.countryCode}
            </li>
            <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${profileData.email}`}>{profileData.email}</a></li>
        </ul>
        <hr />
        <ul className="profileLinks list-inline text-center">
            
            <li><a className="fa fa-github fa-2x" href={'https://github.com/' + profileData.profiles[1].username} target="_blank"></a></li>
           
    
            
        </ul>
        <hr />
        <Parrafo>Construí este sitio web con <a href="https://facebook.github.io/react/" target="_blank">React</a> e implementé el <a href="https://jsonresume.org/schema/" target="_blank">JSON Resume Schema</a>.
        Puedes encontrar este proyecto en mi perfil de <a href="https://github.com/jordanrsas/cjra-cv-react" target="_blank">GitHub</a>.
        </Parrafo>
    </About>
};

export default Profile;