
import Money from "./Money"
import Moneypro from "./Moneypro"
import Aide from "./Aide"
import Reseau from "./Reseau"
import Tab from "./Tab"
import AjoutTab from "./AjoutTab"
import ApiRest from "./ApiRest"
import ApiRest2 from "./ApiRest2"
import axios from  'axios'
import './App.css'
import React, { useEffect, useState } from 'react';
import Operation from "./Operation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const apiUrl = `https://api.github.com/users/hacktivist123/repos`;

export  function App() {
           const initialize = {
           name: '',
           }
        
           const [Api,setApi]=useState(initialize);

           const handleSubmit=(e)=>{e.preventDefault();
                    console.log(Api.name)
                    const ajout = {
                      name: Api.name
                    };
                    axios.post(`https://api.github.com/users/hacktivist123/repos`, { ajout })
                    .then(res => {
                      console.log(res);
                      console.log(res.data);
                    })
                  }
        
           const handleInputChange=(e)=>{
                 const {name, value}=e.target;
                 setApi({...Api ,[name]:value})
                 }  
           const [repos, setRepos] = useState([]);
     
           useEffect(() => {
                 
                 axios.get(apiUrl).then((repos) => {
                 const allRepos = repos.data;
                setRepos(allRepos);
                });
           }, []);

           function createPost() {
            const Api = { name: "Post" };
            axios.post(apiUrl, Api)
            .then(response => this.ApiId = response.data.id);
            console.log(Api);
          }

  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/Money">Wizall Money</Link>
            </li>
            <li>
              <Link to="/MoneyPro">Wizall Money Pro</Link>
            </li>
            <li>
              <Link to="/Reseau">Reseau d'agents</Link>
            </li>
            <li>
              <Link to="/Aide">Aides et Contact</Link>
            </li>
            <li>
              <Link to="/Tab">Tableau</Link>
            </li>
            <li>
              <Link to="/AjoutTab">Ajout</Link>
            </li>
            <li>
              <Link to="/ApiRest">affichage Api</Link>
            </li>
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Moneypro">
            <Moneypro />
          </Route>

          <Route path="/Money">
            <Money />
          </Route>

          <Route path="/Aide">
            <Aide />
          </Route>

          <Route path="/Reseau">
            <Reseau />
          </Route>

          <Route path="/Tab">
            <Tab />
          </Route>

          <Route path="/AjoutTab">
            <AjoutTab />
          </Route>

          <Route path="/ApiRest">
            <ApiRest />
          </Route>

        </Switch>
        <div className='container'>
              <h1>My Repositories</h1>
        </div>
        <div className='repo-container'>   
          <table border="1"  width="100%" cellspacing="0" cellpadding="6">
            <tr >
              <th >name</th>
              <th>full name</th>
              <th>url</th>
            </tr>
            { repos.map(repo =>
            <tr >
              <td>{repo.name}</td>
              <td> </td>
              <td> </td>
            </tr>
          )}
          </table>
          <button onClick={createPost}>Create Post</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name Api:
            <input type="text" name="name" onChange={handleInputChange}/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      </div>
      
      </Router>
      
  
  ) 
}


export default App;
