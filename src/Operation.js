import React, { useState } from "react";


function Operation() {
    const [nbr1, setNbr1] = useState(0);
    const [nbr2, setNbr2] = useState(0);
    const [resultat, setResultat] = useState();
   

         function Add() {

             setResultat(nbr1 + nbr2);
         }
         function Sou() {

               setResultat(nbr1 - nbr2);
            }
         function Mult() {

                 setResultat(nbr1 * nbr2);
         }
    

    return (
        <>

        <div>
            <h1>Operation sur les deux nombres </h1>
        </div>
        <div>
            <label >entrer le premier nombre</label>
            <input type='number'
                   name='nbr1'
                   value={nbr1}
                   onChange={(e) =>{
                     setNbr1(parseInt(e.target.value))
                   }}
                   />
               
        </div> <br />
        <div>
            <label >entrer le deuxieme nombre</label>
            <input type='number'
                   name='nbr2'
                   value={nbr2}
                   onChange={(e) => setNbr2(parseInt(e.target.value))}
                   />
               
        </div>
            <p>nombre 1 : {nbr1}</p>
            <p>nombre 2: {nbr2}</p>
          
            <button onClick={() => Add()}>Adition </button>
            <button onClick={() => Sou()}>Soustraction </button>
            <button onClick={() => Mult()}>mULTIPLICATION </button>
           
            
            <p>Resultat: {resultat}</p>
            
        </>
    );
}


export default Operation;