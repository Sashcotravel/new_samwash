"use client"

import React from 'react';

function WrapperClick({children}) {

    function showForm() {
        document.getElementById('form1').style.display = 'block'
        document.getElementById('form1').scrollIntoView({block: "start", behavior: 'smooth'});
    }

    return <div className='divWrapperClick' onClick={showForm}>{children}</div>
}

export default WrapperClick;