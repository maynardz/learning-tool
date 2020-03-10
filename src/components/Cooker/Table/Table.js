import React, {useState} from 'react';
import './Table.css';
import Pasta from '../../../assets/pasta.jpg';

const Table = (props) => {
    console.log(props);

    const [satisfied, setSatisfied] = useState(props.hangry);
    console.log(satisfied);

    let handleChange = () => {
        props.setEaten(true)
    }

    return(
        <div>
            <h3>{satisfied}</h3>
            <img src={Pasta} onClick={handleChange} />
        </div>
    )
}

export default Table;