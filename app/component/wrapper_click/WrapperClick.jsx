"use client"

import React from 'react';

function WrapperClick({children}) {

    function showForm() {
        document.getElementById('form1').style.display = 'block'
        document.getElementById('form1').scrollIntoView({block: "center", behavior: 'smooth'});
    }

    return <div onClick={showForm}>{children}</div>
}

export default WrapperClick;