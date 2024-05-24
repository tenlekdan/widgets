import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Ratting.scss";
import { useState } from 'react';
export default function Ratting() {

    let [ratedValue, setRatedValue] = useState(0);
    function handleRatting(rateNumber: number) {
        setRatedValue(rateNumber)

        //api call to set the ratting.
    }

    function getClass(contextValue: number): string {
        return contextValue <= ratedValue ? 'rated' : '';
    }
    return (
        <div className="btn-grp">
            <a className={getClass(1)} aria-label="One star" onClick={() => handleRatting(1)}><FontAwesomeIcon icon={faStar} /></a>
            <a className={getClass(2)} aria-label="Two star" onClick={() => handleRatting(2)}><FontAwesomeIcon icon={faStar} /></a>
            <a className={getClass(3)} aria-label="Three star" onClick={() => handleRatting(3)}><FontAwesomeIcon icon={faStar} /></a>
            <a className={getClass(4)} aria-label="Four star" onClick={() => handleRatting(4)}><FontAwesomeIcon icon={faStar} /></a>
            <a className={getClass(5)} aria-label="Five star" onClick={() => handleRatting(5)}><FontAwesomeIcon icon={faStar} /></a>
        </div>
    )
}