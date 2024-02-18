const Search = ({ setRestaurantsList, restaurantsList }) => {

    return (
        <div className='searchOptions'>
            <center>
                <input
                    type='text'
                    placeholder='Search for a Restrurant or a dish'
                    className='searchBox'
                />
                <input
                    type='button'
                    value='Search'
                    className='searchDivBtn'
                />
                <input
                    type='button'
                    value='View Top Rated'
                    className='searchDivBtn'
                    onClick={() => {
                        const data = restaurantsList.filter((data) => {
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