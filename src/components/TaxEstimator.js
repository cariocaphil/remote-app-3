import React, { useState, useEffect } from "react";

const TaxEstimator = () => {
  const [income, setIncome] = useState(50000);
  const [taxRate, setTaxRate] = useState(25);
  const [taxAmount, setTaxAmount] = useState(null);
  const [netIncome, setNetIncome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a slow API response (random delay between 3-7 seconds)
    const delay = Math.floor(Math.random() * 4000) + 3000; // 3000-7000ms

    setTimeout(() => {
      const calculatedTax = (income * taxRate) / 100;
      const calculatedNetIncome = income - calculatedTax;

      setTaxAmount(calculatedTax.toFixed(2));
      setNetIncome(calculatedNetIncome.toFixed(2));
      setLoading(false);
    }, delay);
  }, [income, taxRate]);

  return (
    <div style={{ backgroundColor: "#fff3cd", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
      <h2>Tax Estimator</h2>
      {loading ? <p>Loading tax data... (this app loads slower!) ⏳</p> : (
        <>
          <label>
            Annual Income (€):
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px", width: "120px" }}
            />
          </label>

          <br />

          <label>
            Tax Rate (%):
            <select
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="25">25%</option>
              <option value="30">30%</option>
              <option value="35">35%</option>
              <option value="40">40%</option>
            </select>
          </label>

          <h3>Tax Due: <span style={{ fontWeight: "bold" }}>€{taxAmount}</span></h3>
          <h3>Net Income: <span style={{ fontWeight: "bold" }}>€{netIncome}</span></h3>
        </>
      )}
    </div>
  );
};

export default TaxEstimator;
