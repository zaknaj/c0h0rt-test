import "./styles.css";
import { ReactComponent as Logo } from "./logo.svg";
import { MerchantCard } from "./lib/MerchantCard";
import { useEffect, useState } from "react";
import { MerchantType } from "./types/Merchant";

const apiUrl = "http://localhost:3001/";

export const App = () => {
  const [merchants, setMerchants] = useState<MerchantType[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setMerchants(res?.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Logo className="cohort-logo" />
      <div className="merchants">
        {merchants.map((m) => (
          <MerchantCard key={`merchant_${m.id}`} merchant={m} />
        ))}
      </div>
    </div>
  );
};
