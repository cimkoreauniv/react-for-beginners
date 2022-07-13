import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [balance, setBalance] = useState("");
  const [coinSelected, setCoinSelected] = useState(null);
  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await response.json();
      setCoins(json);
      setLoading(false);
    }
    fetchCoins();
  }, []);
  function onChange(event) {
    setBalance(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input type="number" placeholder="USDs you have" value={balance} onChange={onChange} />
      <div>
        {loading ? <strong>Loading...</strong> :
          (<select onChange={event => setCoinSelected(event.target.value)}>
            <option key="" value="">Select a coin</option>
            {coins.map(coin => {
              //console.log({ symbol: coin.symbol, price: coin.quotes.USD.price });
              return <option key={coin.id} value={`${coin.symbol} ${coin.quotes.USD.price}`}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>
            })}
          </select>)}
      </div>
      {coinSelected && balance ? `${balance} USD is ${balance / coinSelected.split(' ')[1]} ${coinSelected.split(' ')[0]}` : null}
    </div>
  );
}
export default App;
