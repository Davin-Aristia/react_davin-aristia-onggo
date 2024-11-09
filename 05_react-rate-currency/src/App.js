import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [rates, setRates] = useState([])

  const round = (num) => {
    num = Math.round(num + "e+6");
    return Number(num + "e-6");
  }

  useEffect(() => {
    let currencies = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"]
    let tempRates = []

    axios.get("https://api.currencyfreaks.com/v2.0/rates/latest", {
      params: {
        'apikey': process.env.REACT_APP_CURRENCY_KEY,
      }
    })
    .then(res => {(
      currencies.forEach((currency) => {
        let rate = parseFloat(res.data.rates[currency]);
        tempRates.push({
          "currency": currency,
          "buy": round(rate * 1.05),
          "rate": round(rate),
          "sell": round(rate * 0.95),
        })
      }))
      setRates(tempRates)
    })
    .catch((error) => {
      console.error("Error fetching currencies:", error);
      setRates([]);
    });
  }, [])

  return (
    <div className="App">
      <table className="table table_custom text-center table-dark table-borderless">
        <thead>
          <tr className="fs-4">
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {
            rates.map((rate) => (
              <tr className="fs-4" key={rate.currency}>
                <td>{rate.currency}</td>
                <td>{rate.buy}</td>
                <td>{rate.rate}</td>
                <td>{rate.sell}</td>
              </tr>
            ))
          }
          <tr className="fs-8">
            <td colSpan="4">
              Rates are based from 1 USD
              <br/>
              This application uses API from https://currencyfreaks.com.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
