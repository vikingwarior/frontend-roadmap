import { useState } from "react";
import { originalRestaurantData } from "./Body";

const Search = ({ setRestaurantsList, restaurantsList }) => {
    
    /**
     buttonStates maintains the argument of hidden state for buttons, whether they should be visible or not. It is an array of 3 parameters of boolean values.
     
     What each parameter defines.
     
     [0] -> state of hidden value of the "Search" button
     [1] -> state of hidden value of the "View Top Rated" button
     [2] -> state of hidden value of the "Show Original" button
     */
    const [buttonStates, setButtonStates] = useState([false, false, true]);
    const [searchText, setsearchText] = useState('');
    
    return (

        <div className='searchOptions'>
            <center>
                <input
                    type='text'
                    placeholder='Search for a Restrurant or a dish'
                    className='searchBox'
                    value={searchText /*This alonen will prevent the value of textbox from being updated, therfore its value should be updated as well to do this onChange event handler can be used*/}
                    onChange={(e) => {
                        setsearchText(e.target.value);
                    }}
                />
                <input
                    type='button'
                    value='Search'
                    className='searchDivBtn'
                    hidden={buttonStates[0]}
                    onClick={() => {
                        if (searchText === '' || searchText === undefined) {
                            setRestaurantsList(originalRestaurantData)
                        }else{
                            const data = originalRestaurantData.filter((data) => {
                                return data.info.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setRestaurantsList(data);
                            setButtonStates([true, false, false]);
                        }
                        
                    }
                    }
                />
                <input
                    type='button'
                    value='View Top Rated'
                    className='searchDivBtn'
                    hidden={buttonStates[1]}
                    onClick={() => {
                        const data = originalRestaurantData.filter((data) => {
                            return data.info.avgRating >= 4.3;
                        });

                        /*
                          To change/update the value of a state variable, use the setter method that we defined as the second parameter of the constructor.
    
                          To update a state variable:
                          setVarName(newValue);
                        */
                        setRestaurantsList(data);
                        setButtonStates([false, true, false]);
                    }}
                />
                <input 
                    type='button'
                    value="Show Original"
                    className='searchDivBtn'
                    hidden={buttonStates[2]}
                    onClick={
                        () => {
                            setRestaurantsList(originalRestaurantData);
                            setButtonStates([false, false, true]);
                        }
                    }
                />
            </center>
        </div>
    )
}

export default Search;