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
                    value='Filter'
                    className='searchDivBtn'
                    onClick={() => {
                        const data = restaurantsList.filter((data) => {
                            return data.info.avgRating >= 4.3;
                        });

                        setRestaurantsList(data);
                    }}
                />
            </center>
        </div>
    )
}

export default Search;