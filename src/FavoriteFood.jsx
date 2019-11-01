import React from 'react';


function FaveFood(props) {
    var mappedFoods = props.foods.map( food => <li>{food}</li>)
    return (
        <div>
        <h1>My Fave Foods</h1>
        <ul>
            {mappedFoods}
        </ul>

        </div>
    )
}

export default FaveFood;