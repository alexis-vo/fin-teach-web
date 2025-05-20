import React from 'react';
import './LessonIntro.css';

function LessonIntro() {
  return (
    <div className="lesson-container">
      <h1>📘 Introduction to Finance</h1>
      <p className="subtitle">Finance helps people and institutions manage money and make decisions.</p>

      <div className="section">
        <h2>🏦 Corporate Finance</h2>
        <p>How businesses raise, invest, and manage money to maximize value for shareholders.</p>
        <ul>
          <li>Capital structure (debt vs. equity)</li>
          <li>Investment decisions (buy machines? hire people?)</li>
          <li>Risk and return</li>
        </ul>
      </div>

      <div className="section">
        <h2>💳 Personal Finance</h2>
        <p>How individuals plan their finances to meet life goals and stay financially healthy.</p>
        <ul>
          <li>Budgeting and saving</li>
          <li>Investing (stocks, bonds, real estate)</li>
          <li>Credit cards, loans, and interest</li>
        </ul>
      </div>

      <div className="section">
        <h2>🏛️ Public Finance</h2>
        <p>How governments collect and spend money to serve the public.</p>
        <ul>
          <li>Taxes and government budgets</li>
          <li>Public debt and fiscal policy</li>
          <li>Welfare, education, and infrastructure</li>
        </ul>
      </div>
    </div>
  );
}

export default LessonIntro;