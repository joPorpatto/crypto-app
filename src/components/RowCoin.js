import React from 'react'

const RowCoin = ({coin,index}) => {
        
        return (
                <tr>
                        <td className="text-muted">{index}</td>
                        <td>
                                <img 
                                        src={coin.image} 
                                        alt={coin.name} 
                                        style={{width: '10%'}} 
                                        className="img-fliud me-3"
                                />
                                <span>  {coin.name}</span>
                                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
                        </td> 
                        <td>
                                {coin.current_price.toLocaleString()} US$
                        </td> 
                        <td
                                className={
                                        (coin.price_change_percentage_24h >0)
                                                ? "text-success"
                                                : "text-danger"

                                }

                        >
                                {coin.price_change_percentage_24h} %
                                
                        </td> 
                        <td>
                                {coin.total_volume.toLocaleString()} US$
                        </td> 
                </tr>
        )
}

export default RowCoin
