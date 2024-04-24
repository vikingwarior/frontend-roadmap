const MenuItem = ({itemData}) => {
    const {name, price, description, ratings } = itemData;
    const rating = ratings.aggregatedRating.rating || 0;
    const ratingCount = ratings.aggregatedRating.ratingCountV2 || 0;

    return (
        <div className="menuItem">
            <h3>{name}</h3>
            <h4>₹{price/100}</h4>
            <h5>{rating}({ratingCount})</h5>
            <p>{description}</p>
            <hr />
        </div>
    );
};

export default MenuItem;