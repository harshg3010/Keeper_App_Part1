import React from react;

function Footer(){
    const newe = new Date().getFullYear;

    return (
    <footer>
        <p>
        CopyWright @ {newe}
    </p>
    </footer>

    );
    
}

export default Footer;