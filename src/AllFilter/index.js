import React from 'react';
import './AllFilter.css'

function AllFilter(){
    return(
     
        <div className='center'>
            <button className='Rectangle'>
                <span class="All">
                    All
                </span>
            </button>
            <button className='Rectangle2'>
                <span class="My-faves">
                    My faves
                </span>
            </button>
        </div>
      
        

    );
}


export {AllFilter};