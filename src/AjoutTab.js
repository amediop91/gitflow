import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
const initialize={
    nom:"",
    price:"",
    brand:"",
    desc:"",
    meas:""

}

function AjoutTab(){
    const [product,setProduct]=useState(initialize);
    const[name,setName]=useState('');
    const handleSubmit=(e)=>{e.preventDefault();
    console.log("le nom est ",product.nom)
    }
    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setProduct({...product ,[name]:value})
    }
    
return(
    <div>

        <h2>Remplir le tableau</h2>
        <form onSubmit={handleSubmit}>
                         <div>
                             <label>Name</label>
                             <input
                                 type="text"
                                 name="nom"
                                 value={product.nom}
                                 onChange={handleInputChange}
                                 

                             />
                         </div>
                         <div>
                             <label>Price</label>
                             <input
                                 type="text"
                                 name="prenom"
                                 value=""
                                

                             />
                         </div>
                         <div>
                             <label>Brand</label>
                             <input
                                 type="text"
                                 name="age "
                                 value=""

                             />
                         </div>
                         <div>
                             <label>Desc</label>
                             <input
                                 type="text"
                                 name="age "
                                 value=""

                             />
                         </div>
                         <div>
                             <label>Measure</label>
                             <input
                                 type="text"
                                 name="age "
                                 value=""

                             />
                         </div>
                         <br />
                          <button type="submit" >Ajouter</button>
                       
                         </form>
    <table border="1"  width="100%" cellspacing="0" cellpadding="6">
        <tr>
             <th> name</th>
            <th>price</th>
            <th>brand</th>
            <th>Desc</th>
            <th>measure</th>
        </tr>
        <tr> 
            <td> {product.nom}</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>

        </tr>


    </table>

</div>
    
)

}
 export default AjoutTab;