import React from 'react';
import styled from 'styled-components';


const About = ({aboutData}) => {
    return (
        <section className="about">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> Un poco sobre mi</h2>
            <div>{aboutData}</div>
        </section>
    );
};

export default About;