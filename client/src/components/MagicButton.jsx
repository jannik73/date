import React from 'react'
import { useState, useEffect } from 'react';
//<button onClick={(e) => this.deleteMe(e)}>Delete me</button>


function MagicButton({text, idx, flag, onClick, className}) {
    

    //const [render, setRender] = useState(() => {
    //    if(idx == "1"){
    //        return true;
    //    }
    //    else{
    //        return false;
    //    }
    //    
    //});
    const [render, setRender] = useState(flag);

    useEffect(() => {
        setRender(flag);
      }, [flag]);

    function deleteMe(){
        onClick();
        setRender(!render);
    }

        return (
            <button onClick={deleteMe} className={className}>{text}</button>
        );
    
}

export default MagicButton