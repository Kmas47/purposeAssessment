import { useEffect, useState } from 'react';
import { filteredData, aum } from '../api/apiEndPoint'
import styles from '../../styles/Home.module.css'

export default function Details() {

    const [ticker, setTicker] = useState([]);

    const [date, setDate] = useState([]);

    const [value, setValue] = useState([]);

    const dates = filteredData.then(e => {
        return e.data.map(f => {
            return f.date;
        })
    })

    const values = filteredData.then(e => {
        return e.data.map(f => {
            return f.value;
        })
    })

    const tickers = filteredData.then(e => {
        return e.tickers;
    })

    useEffect(() => {
        tickers.then(e => {
            setTicker(e);
        })

        if(date.length < 1) {
            dates.then(e => {
                setDate(e);
            })
        }

        if(value.length < 1) {
            values.then(e => {
                setValue(e);
            })
        }


    })

    if(ticker.length < 1) {
        return (<h1>Loading...</h1>);
    }

    let i = -1;
    return (
        <div className={styles.details}>
            
            <table className={styles.table}>
                <th className={styles.heading}>Index</th>
                <th className={styles.heading}>Ticker</th>
                <th className={styles.heading}>Date</th>
                <th className={styles.heading}>Net Asset Value</th>
                <th className={styles.heading}>Update Net Asset Value</th>
                <th className={styles.heading}>Update</th>
                
                { 
                    ticker.map((e) => {
                        {i++}
                        return(
                            <tr className={styles.row} key={i}>
                                <td>{i}</td>
                                <td>{e}</td> 
                                <td>{date[i]}</td> 
                                <td>{value[i]}</td>
                                <td><input className={styles.input} placeholder={`update the value of fund ${e}`}></input></td>
                                <td><button className={styles.update} onClick={() => {}}>Update</button></td>
                            </tr> 
                        ) 
                        
                    })
                    
                } 
            </table>
            <button className={styles.superUpdate}>Update All</button>
        </div>
        );  
        
}
