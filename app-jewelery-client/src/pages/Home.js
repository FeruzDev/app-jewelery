import React from 'react';
import Header from "../components/Header";
import Check from "../components/Check";
import HomeCompany from "../components/HomeCompany";
import Accordion from "../components/Accordion";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeExperts from "../components/HomeExperts";
import Numbers from "./Numbers";
import Map from "./Map";
import Logos from "./Logos";

const Home = (props) => {
    return (
        <div>

            <Header/>
            <Check history={props.history}/>
            <Numbers/>
            <HomeCompany/>
            <Map/>
            <Logos/>
            {/*<HomeExperts/>*/}
            <Accordion/>
            {/*<Contact/>*/}
            <Footer/>
        </div>
    );
};

export default Home;