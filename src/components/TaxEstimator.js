import React, { useState, useEffect } from "react";

const TaxEstimator = () => {
  const [income, setIncome] = useState(50000);
  const [tax, setTax] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTax((income * 0.25).toFixed(2)); // Assume flat 25% tax
      setLoading(false);
    }, 3000);
  }, [income]);

  return (
    <div style={{ backgroundColor: "#fff3cd", padding: "15px", margin: "10px 0", borderRadius: "5px" }}>
      <h2>Remote App: 3 Tax Estimator</h2>
      {loading ? <p>Calculating...</p> : <p>Estimated Tax: ${tax}</p>}
    </div>
  );
};

export default TaxEstimator;
