

/**
 
Low Level Design of Component Heirarchy Layout :

    App Component
       -Header
        --Logo
        --Location
        --cart
        --account
       
       -Body
        --Search
            ---search box
            ---search button
            ---filter
                ---price low to high
                ---price high to low
                ---ratings high to low
                ---distance nearest to farthest
                ---Cuisines offered
                    -----cuisines list
        
       --Restruants      
           ---Restrurant Card
            ----Image
            ----Rating
            ----Delivery Time
            ----Average Price
            ----Cuisines offered
            
       -Footer
        --Contact
        --Help
        --About
 */

/**
    Conflict driven UI ->
    Fancy term for custom dynamic UI that is driven on the basis of data is using i.e. any component can be changed in the UI using data that is being sent by the API/user
 */

/**
    NOTE -> 'key' is a reserved keyword in React library it is used as a reference to identify each component uniquely.
*/