import { useState } from "react";
import { originalRestaurantData } from "./Body";

const Search = ({ setRestaurantsList, restaurantsList }) => {
    [searchText, setsearchText] = useState([]);

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
                    onClick={() => {
                        if (searchText === '' || searchText === ' ') {
                            setRestaurantsList(originalRestaurantData)
                        }
                        const data = originalRestaurantData.filter((data) => {
                            return data.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setRestaurantsList(data);
                    }
                    }
                />
                <input
                    type='button'
                    value='View Top Rated'
                    className='searchDivBtn'
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
                    }}
                />
            </center>
        </div>
    )
}

export default Search;