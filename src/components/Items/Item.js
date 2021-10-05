import React, { useState } from "react";
import { constant } from "./constants";
function Item(props) {
    const {
        data,
        fetchData
    } = props;

    function checkAnswer(e) {
        setLoading(true);
        e.preventDefault();
        if(answer.toLowerCase()===data.answer.toLowerCase()){
            setResult(constant.WRITE_ANSWER)
        }else{
            setResult(constant.WRONG_ANSWER)
        }
        setTimeout(() => {
            fetchData();
            setAnswer('');
            setResult('');
            setLoading(false);
        }, 3000);
    }
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false)
    return(
        <div>
            <form onSubmit={checkAnswer}>
                <div>
                    <label>{data.question} </label>
                </div> 
                <div>
                    <label>{constant.ANSWER} : </label>
                        <input
                            type="text" 
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    <button
                        type="submit"
                        className="button"
                        disabled={!answer}
                    >
                      {loading? 'Loading...' : 'Submit'}
                    </button>
                </div>
                {result&&<div className="label">
                    {result===constant.WRITE_ANSWER&&<span className="label success">{constant.WRITE_ANSWER}</span>}
                    {result===constant.WRONG_ANSWER&&<span className="label danger">{constant.WRONG_ANSWER}</span>}
                </div>}
            </form>
        </div>
    )
}
export default Item;