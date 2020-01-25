import React from "react"

const PrimaryFooter = () => {

    var style = {
        backgroundColor: "#330000",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "30px",
        width: "100%",
    };

    var phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
    };

    return(
        <div class="col-xs-9 col-md-7">
            <div style={phantom} />
            <div style={style}>
                <a>Nikolas Graham 2020 - This is a fan made site completely unaffiliated with TemTem or Crema</a>
            </div>
        </div>
    )

};

export default PrimaryFooter;