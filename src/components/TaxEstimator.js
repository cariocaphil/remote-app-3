import React, { useState, useEffect } from "react";

const tileStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    textAlign: "center",
    transition: "transform 0.2s ease-in-out",
};

const tileHoverStyle = {
    transform: "scale(1.05)",
};

const TaxEstimator = () => {
  const [income, setIncome] = useState(50000);
  const [taxRate, setTaxRate] = useState(25);
  const [taxAmount, setTaxAmount] = useState(null);
  const [netIncome, setNetIncome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulating an API call with a delay
    setTimeout(() => {
      const calculatedTax = (income * taxRate) / 100;
      const calculatedNetIncome = income - calculatedTax;

      setTaxAmount(calculatedTax.toFixed(2));
      setNetIncome(calculatedNetIncome.toFixed(2));
      setLoading(false);
    }, 1000);
  }, [income, taxRate]);

  return (
      <div style={tileStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = tileHoverStyle.transform)}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      <h2>Remote App 3: Tax Estimator</h2>
      <p>Calculate estimated tax and net income based on your earnings.</p>

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

      <br />

      {loading ? (
        <p>Calculating tax...</p>
      ) : (
        <>
          <h3>Tax Due: <span style={{ fontWeight: "bold" }}>€{taxAmount}</span></h3>
          <h3>Net Income: <span style={{ fontWeight: "bold" }}>€{netIncome}</span></h3>
        </>
      )}
    </div>
  );
};

export default TaxEstimator;
