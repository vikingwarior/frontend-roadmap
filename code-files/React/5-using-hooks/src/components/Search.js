const Search = () => (
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
                    const data = restaurantData.filter((data) => {
                        return data.info.avgRating >= 4;
                    });

                    setRestaurantData(data);
                }}
            />
        </center>
    </div>
)

export default Search;