import React, {useState, useEffect} from 'react';
import Table from './Table/Table';
import Full from '../../assets/satisfied.jpg';

let hangry = 'I am HANGRY!';

const Cooker = () => {

    console.log('component rendered');

    const [stoveTemp, setStoveTemp] = useState(0);
    const [boiling, setBoiling] = useState(false);
    const [cooked, setCooked] = useState(false);
    const [eaten, setEaten] = useState(false);

    function Pot() {
        this.startBoiling = function() {
            if(stoveTemp >= 400){
                setBoiling(true);
            } else {
                alert('Burner not hot enough yet!')
            }
        }
    };

    let increment = () => {
        setStoveTemp(stoveTemp + 50);
    };

    let decrement = () => {
        if(stoveTemp == 0){
            setStoveTemp(0);
            alert("Can't set temperature below 0!")
        } else {
            setStoveTemp(stoveTemp - 50);
        }
    }

    let handleBoil = () => {
        setCooked(false);
        setEaten(false);
        let pastaPot = new Pot();
        pastaPot.startBoiling();
        console.log(pastaPot);
    };

    useEffect(() => {
        if(boiling === true){
            document.title = 'Cooking...'
            setTimeout(() => {
                alert('Tada! Your pasta finished cooking!');
                setBoiling(false);
                setCooked(true);
                document.title = 'Cooked!!!';
            }, 5000);
        }
    }, [boiling]);

    return (
        <div>
            <button onClick={() => decrement()}>- 50 degrees</button>
            <button onClick={increment}>+ 50 degrees</button>
            <p>{stoveTemp}</p>
            <button onClick={handleBoil}>Start Boiling!</button>

            {cooked === true && eaten === false ? <Table setEaten={setEaten} hangry={hangry} /> : null}
            {cooked === true && eaten === true ? <img src={Full} /> : null}
        </div>
    )
}

export default Cooker;