/*
    Monolith vs Microservices:

    Monolith:
    ----------
    A monolithic application is built as a single, unified unit with one code base that couples all of the business concerns together.

    To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface.

    Monoliths can be convenient early on in a project’s life for ease of code management, cognitive overhead, and deployment.

    Advantages include easy deployment, faster development speed due to the simplicity of having an application based on one code base, and potentially better performance.

    Microservices:
    ---------------
    A microservices architecture is a collection of smaller, independently deployable services.

    Each microservice handles a small portion of the functionality and data by communicating with each other directly using lightweight protocols like HTTP.

    Netflix is a high-profile example of a company that successfully migrated from a monolith to a cloud-based microservices architecture.
    
    Today, Netflix has more than a thousand microservices that manage and support separate parts of the platform, while its engineers deploy code frequently, sometimes thousands of times each day.

*/

/*
    Component Outline:
    Heading Div
        Restaurant Details Div
            Breadcrumb
            Div
                Div
                    Restaurant Name
                    Cuisines
                    Location, Avg Distance
                Div
                    Avg. Rating
                    Total Ratings
            Div
                BikeRiderIcon
                Distance From Location
                |
                Delivery Charge
        Metrics Div
            Basic Stats Div
                Avg. Delivery Time
                Cost for two
            Discount Coupons Div
                Discount Coupon Div
                    {Discount Info}
                    {Coupon Code} | {Coupon Condition}
                Discount Coupon Div
                Discount Coupon Div
                ...     
    Menu Div
        Preferences Toggle Buttons
        Top Picks Div
            Top Picks
            Top Picks Cards Div
                Top Pick Card Div
                    Cuisine Type Icon
                    Item Name
                    Item Summary

                    Item Price
                    Add Button Div
                        {Add +}Button
                        customisable
                Top Pick Card Div
                Top Pick Card Div
                ...
        Menu Categories Div
            Menu Category Div
                Category Name
                Menu Item Div
                    Menu Item Description Div
                        Food Type Icon
                        Item Name
                        Item Price | Applicable Offer
                    Menu Item Image Div
                        Menu Item Image
                        {Add +} Button
    Browse Menu Button




*/

/*
    New Component Outline:

    Breadcrumb
    Header Component
        RestaurantName
        RestaurantSummary Component
            avgRating(totalRatings) . costForTwo
            availableCuisines
            [Outlet] outletLocations
            approxDeliveryTime
            distanceRange(distance in km) | deliveryFeeCriteria
    Deals Component (Carousel)
        [Deal For You] Toggle Buttons
        Deal Card Component
            {Discount Info}
            Use {Coupon Code}
    Menu Component
        Preferences Toggle Buttons
         Top Picks
            Top Picks Cards Component
                Top Pick Card Component
                    Cuisine Type Icon
                    Item Name
                    Item Summary

                    Item Price
                    Add Button Component
                        {Add +}Button
                        customisable
                Top Pick Card Component
                Top Pick Card Component
                ...
        Menu Categories Component
            Menu Category Component
                Category Name
                Menu Item Component
                    Menu Item Description Component
                        Food Type Icon
                        Item Name
                        Item Price | Applicable Offer
                    Menu Item Image Component
                        Menu Item Image
                        {Add +} Button
    Browse Menu Button

 */



// OneUp-detailsBar OneUp-detailsBar--hasCaption