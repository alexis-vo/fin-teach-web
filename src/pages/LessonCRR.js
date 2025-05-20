import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import './LessonCRR.css';

function LessonCRR() {
  return (
    <div className="lesson-container">
      <h1>📈 Cox-Ross-Rubinstein Model</h1>
      <p className="subtitle">
        The CRR model is a discrete-time model used to price options using a binomial tree.
      </p>

      <div className="section">
        <h2>🧮 Formula</h2>
        <p>We define the up and down factors as:</p>
        <BlockMath math="u = e^{\sigma \sqrt{\Delta t}}, \quad d = \frac{1}{u}" />

        <p>The risk-neutral probability is:</p>
        <BlockMath math="p = \frac{e^{r \Delta t} - d}{u - d}" />

        <p>Then we compute the option price by traversing the binomial tree backward.</p>
      </div>

      <div className="section">
        <h2>🌳 Example</h2>
        <p>
          Suppose a call option on a stock with current price $100, strike $105, volatility 20%, interest rate 5%, and maturity in 1 year.
        </p>
        <p>Using 2 steps, we compute <code>u</code>, <code>d</code>, and <code>p</code> as shown, then build the tree to find the option value.</p>
      </div>
    </div>
  );
}

export default LessonCRR;