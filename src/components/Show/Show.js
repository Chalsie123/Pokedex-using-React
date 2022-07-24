import React, { useState } from 'react';

function Show(props) {
    const [clickpokemon, clickState] = useState([]);
    const [clicked, clickedState] = useState(false);

    async function submithandler() {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.Name}`);
        const data = await url.json()
        console.log(data)
        clickState(data)
        clickedState(true)
    }

    function showlesss() {
        clickedState(false)
    }

    return (
        <>
            {clicked ? (clickpokemon.sprites.other.dream_world.front_default !== null) ? (<img src={clickpokemon.sprites.other.dream_world.front_default}></img>) : (<p>No Image</p>) : <p className="blank"></p>}<br></br>
            {clicked ? (<>
                <p>Types   - {clickpokemon.types.map((item =>
                    <p className="iter">{item.type.name},</p>))}</p>
                <p>Height - {clickpokemon.height * 10}cm</p>
                <p>Weight - {clickpokemon.weight * 0.1}kg</p>
                <p>Abilities - {clickpokemon.abilities.map((item) =>
                    <p className="iter">{item.ability.name},</p>)}</p>

            </>
            ) : (<p className="blank"></p>)
            }<br></br>
            <h3>{props.Name}</h3>
            {!clicked ? (<button onClick={submithandler}>Show More</button>) : (<button onClick={showlesss}>Show Less</button>)} <br></br>
        </>
    )
}

export default Show;