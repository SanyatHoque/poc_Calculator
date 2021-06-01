import React from 'react'
import firebase from '../firebase';
import SearchField from "react-search-field";
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "material-ui-search-bar";
import './App.css';

export const Searchbox = (property) => {
        const [search, setSearch] = React.useState('');
        const [query,setQuery] = React.useState('');
        const [showResults, setShowResults] = React.useState(false)
        var [found,setFound] = React.useState();

        const data = property.data;
        data.sort(function(a, b){return a.id-b.id});
        const name = property.name; 
        React.useEffect(() => {
            setFound(false);
            console.log("Change");
        },[query]);
        console.log('query',query,'found',found);
        const onClick = (e) => {
            e.preventDefault();
            setQuery('');
            if (showResults==false) {
                setShowResults(true);
            } else {
                setShowResults(false);
            }
            console.log('showRes',showResults)
        }
        const onClickSearch = (e) => {
            e.preventDefault();
            setShowResults(false);
            setQuery(search);
            setSearch('');
            // console.log('query_res',query)
            // const search_lowercase = search.toLocaleLowerCase()
            data.map((x)=>{
                // console.log('query',search,'selectedName',x.selectedName)
                if (x.selectedName===search) {
                    // console.log('Matched');
                } else {
                    // console.log('notMatched');
                };
            })

        }
            
    return (
        <div>
        <div className="empty-div"></div>
        <div className="dispay-flex">
        {/* <SearchBar
        value={this.state.search} 
        onChange={(e) => this.setState({ value: e })}
        onRequestSearch={() => setSearch(this.state.value)}
        style={{marginLeft:'15%'}}
        /> */}
        <form className="topnav" onSubmit={onClickSearch} >
            <input className="SearchBar" type="text" placeholder="Type Patient Name Here..." value={search.toLocaleLowerCase()} onChange={(e)=>setSearch(e.target.value)}/>
            <button className="SearchIcon" type="submit">Search</button>
        </form>

        <div className="last5">
        <div className="empty-div"></div>     
            <form>
            <div>
                <input className="invisible-text" type="text" />
                {/* value={name} onChange={(e)=>setName(e.target.value)} */}
                <button className="last5-button" onClick={onClick}>
                    Show Last 5 <b>Patients</b>
                </button>
            </div>
            </form>
        </div>

        </div>
        <div className="empty-div"></div>
        {query ? ( 
        <div>

        {data.map((x,idx)=>
            x.selectedName===query ? ( 
            <div className="searchbox">
                <ol>
                    {/* {data.slice(Math.max(data.length - 5, 0)).map((x,idx)=> */}
                    <li key = {x.id}>
                        <div className="boxy">{found=true}
                            <b><i>Patient Name</i>: {x.selectedName}</b>, <i>patient ID</i>: {x.id}
                            <span className="boxy1">{(x.checked) ? <p><i>Symptoms present at the time of testing</i>: <b>Positive</b></p>:<p><i>Symptoms present at the time of testing</i>: <b>Negative</b></p>}</span>
                            <span className="boxy1">{(x.checked2) ? <p><i>High risk exposure 14 days before test date</i>: <b>Positive</b></p>:<p><i>High risk exposure 14 days before test date</i>: <b>Negative</b></p>}</span>
                            <span className="boxy1">{(x.checked3) ? <p><i>Immunocompromised</i>: <b>Positive</b></p>:<p><i>Immunocompromised</i>: <b>Negative</b></p>}</span>
                        </div>
                    </li>
                    {/* )} */}
                </ol>
            </div>
             ) : (<div>{(found===false && idx===data.length-1) ? <div><i>Sorry patient not found...</i></div>:<div></div>}</div>)
        )}        
        </div>)
        : (<div></div>)} 
        {showResults ? ( 
        <div className="searchbox">
            <ol>
                {data.slice(Math.max(data.length - 5, 0)).map((x,idx)=>
                <li key = {x.id}>
                    <div className="boxy">
                        <b><i>Patient Name</i>: {x.selectedName}</b>, <i>patient ID</i>: {x.id}
                        <span className="boxy1">{(x.checked) ? <p><i>Symptoms present at the time of testing</i>: <b>Positive</b></p>:<p><i>Symptoms present at the time of testing</i>: <b>Negative</b></p>}</span>
                        <span className="boxy1">{(x.checked2) ? <p><i>High risk exposure 14 days before test date</i>: <b>Positive</b></p>:<p><i>High risk exposure 14 days before test date</i>: <b>Negative</b></p>}</span>
                        <span className="boxy1">{(x.checked3) ? <p><i>Immunocompromised</i>: <b>Positive</b></p>:<p><i>Immunocompromised</i>: <b>Negative</b></p>}</span>
                    </div>
                </li>
                )}
            </ol>
        </div>) : (<div></div>)}
        </div>
    )
}
