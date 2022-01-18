import React from 'react'
import RowCoin from './RowCoin'

export const TableCoins = ({coins,search}) => {
        
        const titles = ['#','Coin','Price', 'Price Change','24hs Vol' ]
        
        const filterCoins = coins.filter((coin)=>
                coin.name.toLowerCase().includes(search.toLowerCase())
                |
                coin.symbol.toLowerCase().includes(search.toLowerCase())   
        );
        return (
                <table className="table table-dark mt-4 table-hover">
                        <thead>
                                <tr>
                                        {
                                                titles.map((title, index) =>(
                                                        <td
                                                                key={index}
                                                        >{title}</td>
                                                ))
                                        }
                                </tr>
                        </thead>
                        
                        <tbody>
                                {filterCoins.map((coin) => (
                                        
                                        
                                        <RowCoin
                                                coin={coin}
                                                key={coin.id}
                                                index={coin.market_cap_rank}
                                        />
                                        
                                ))}

                        </tbody>
                </table>
        )
}
