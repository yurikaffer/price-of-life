'use client'
import React from 'react';
import './InputNumberStyles.css'
import { useGlobalContext } from '../../context/GlobalContext';

const InputNumberComponent: React.FC = () => {
    const { isChecked, numRecorrence, setNumRecorrence } = useGlobalContext();

    const subtractNumber = () => {
        if (numRecorrence !== 1 ){
            setNumRecorrence(numRecorrence -1)
        }
    }
    return (
        <>
            { isChecked && (
                <div className="number-control">
                    <input name="number" className="number-quantity" value={`${numRecorrence} x/mês`}/>
                    <div className="number-right" onClick={() => setNumRecorrence(numRecorrence +1)}></div>
                    <div className="number-left" onClick={subtractNumber}></div>
                </div>
                )
            }
        </>
    );
};

export default InputNumberComponent;