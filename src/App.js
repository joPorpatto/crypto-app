import axios from "axios";
import { useEffect, useState } from "react";
import { TableCoins } from "./components/TableCoins";
import './index.css'


function App() {

        const [coins, setCoins] = useState([ ]) 
        const [search, setSearch] = useState("")
        
        const getInfo = async () =>{

                try {
                        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                        
                        setCoins(res.data)
                }
                catch (error) {
                        console.log(error)                
                }
                
        }

        const handleChange=(e) =>{
                setSearch(e.target.value);

        }

        useEffect(() => {
                getInfo()
        }, [])
  
        return (
                <div className="container">

                        <h1 className="text-center mt-3">Precios de las criptomonedas según la capitalización de mercado </h1>
                        <div className="row">

                                <input
                                        type= "text"
                                        placeholder="Buscar criptomoneda"
                                        className="form-control bg-dark text-light border-0 mt-4 "
                                        autoFocus
                                        onChange={handleChange}
                               
                               />

                                <TableCoins
                                        coins={coins}
                                        search= {search}
                                />

                        </div>
                        

                </div>

        );
}

export default App;
