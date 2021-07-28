import React from 'react';
import Header from "../components/Header";
import Check from "../components/Check";
import HomeCompany from "../components/HomeCompany";
import Accordion from "../components/Accordion";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeExperts from "../components/HomeExperts";

const Home = (props) => {
    return (
        <div>

            <Header/>

            <Check history={props.history}/>

            <HomeCompany/>


            <HomeExperts/>


            <Accordion/>

            <Contact/>

            <Footer/>
        </div>
    );
};

export default Home;