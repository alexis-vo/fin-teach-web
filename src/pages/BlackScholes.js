import React from 'react';
import { BlockMath } from 'react-katex';

function BlackScholes() {
  const formula = `
    d_1 = \\frac{\\ln(\\frac{S_0}{K}) + \\left(r + \\frac{\\sigma^2}{2}\\right) t}{\\sigma \\sqrt{t}}, \\quad
    d_2 = d_1 - \\sigma \\sqrt{t}
  `;

  return (
    <div className="lesson-container">
      <h1>Black-Scholes Model</h1>
      <p>The Black-Scholes model is a mathematical model for pricing options.</p>
      
      <BlockMath math={formula} />
      
      <h2>Key Points</h2>
      <ul>
        <li>Used to price European call and put options.</li>
        <li>Assumes constant volatility and interest rates.</li>
        <li>Formula is based on stochastic calculus.</li>
      </ul>
    </div>
  );
}

export default BlackScholes;