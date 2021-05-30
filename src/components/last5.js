import React from 'react'
import firebase from '../firebase';
import SearchField from "react-search-field";
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "material-ui-search-bar";
import '../App.css';


export const Last5 = (property) => {
    const data = property.data;
    const name = property.name; 
    console.log('data',data)
    console.log('name',name)
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
        
    return (
        <div>
        <div className="last5">
        <div className="empty-div"></div>     
            <form>
            <div>
                <input className="invisible-text" type="text" />
                {/* value={name} onChange={(e)=>setName(e.target.value)} */}
                <button className="last5-button" type="submit" value="Search" onClick={onClick}>
                    Show Last 5 <b>Patients</b>
                </button>
            </div>
            </form>
        </div>
        <div className="searchbox">
            {/* <ol>
                {data.map((x)=>
                <li key = {x.id}>
                    <div className="boxy">
                        <b><i>Patient Name</i>: {x.selectedName}</b>
                        <span className="boxy1">{(x.checked) ? <p><i>Symptoms present at the time of testing</i>: <b>Positive</b></p>:<p><i>Symptoms present at the time of testing</i>: <b>Negative</b></p>}</span>
                        <span className="boxy1">{(x.checked2) ? <p><i>High risk exposure 14 days before test date</i>: <b>Positive</b></p>:<p><i>High risk exposure 14 days before test date</i>: <b>Negative</b></p>}</span>
                        <span className="boxy1">{(x.checked3) ? <p><i>Immunocompromised</i>: <b>Positive</b></p>:<p><i>Immunocompromised</i>: <b>Negative</b></p>}</span>
                    </div>
                </li>
                )}
            </ol> */}
        </div>
        </div>
    )
}

const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )