import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

function About() {
    const { name } = useParams()
    return (
        < div class="container" >
            <h1>Ola usuário {name} </h1>
            {/* <Footer /> */}
        </div >
    )
}

export default About;