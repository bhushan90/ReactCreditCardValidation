import React, { useState } from 'react';
import "./CreditCardStyle.css";
import cardImage from '../../src/cardImage.png'

function CreditCardValidation() {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        let strWithoutSpaces = [...value].filter(v => v != " ").join("");
        let val = ((strWithoutSpaces.length + 1) % 4 === 0 && strWithoutSpaces.length < 15) ? e.target.value + " " : e.target.value;
        setValue(val);
    }

    return (
        <>
            <div className='wrapper'>
                <input type='text' className="c-input" value={value} onChange={e => handleChange(e)} />
                <img className='image' src={cardImage} />
            </div>
            {[...value].filter(v => v != " ").join("").length != 16 && <p className="error">Invalid card number</p>}
        </>
    );
}

export default CreditCardValidation;