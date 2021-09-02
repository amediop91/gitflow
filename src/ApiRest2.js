import React from 'react';

const ApiRest2=(props)=>{
    const { rep } =props;
    return (
        <ul>
        <h2> Recuperation Api 2</h2>
         {rep.map((repo)=>{
             return(
                 <li>
                     <span>{rep.name}</span>
                     <span>{rep.registered}</span>
                 </li>
             );

         }
         )}

        </ul>

    )
}
export default ApiRest2;