import React from 'react';

// take the data from the input
function GetData (props){
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.userInput}/>
            <input type="submit" onClick={props.apiData} />
            
    
        </form>
        
            

    )
}
export default GetData;


// get the user input  ,props is user until you get the actual data 
// get the jsaon data 