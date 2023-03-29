import React from 'react';

function Footer(){
    var year = new Date().getFullYear();
    return(
        <footer><p>Designed and Developed by Sampad Adhikary copyright {year}</p></footer>
        
    );
}

export default Footer;