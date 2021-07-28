import React from 'react';
import Check from "../components/Check";
import Footer from "../components/Footer";

const Search = (props) => {
    return (
        <div className="search">
            <div className="search-banner">
                <Check history={props.history}/>

            </div>

            <Footer/>
        </div>
    );
};

export default Search;