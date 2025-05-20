import React from 'react';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Wolf of Paris-Saclay</h1>
        <p>Learn the basics of money, saving, and investing — taught by someone learning too.</p>
      </header>

      <main className="App-main">
        <section className="intro">
          <h2>👋 Welcome !</h2>
          <p>
            This site shares what I learn about personal finance as I teach myself from scratch.
            Whether you're a student or just starting, you'll find beginner-friendly lessons here.
          </p>
        </section>

        <section className="lessons">
          <h2>📚 Upcoming Lessons</h2>
          <ul>
            <li>Budgeting Basics</li>
            <li>Understanding Credit Cards</li>
            <li>Intro to Investing</li>
            <li>How to Save Smart</li>
          </ul>
        </section>

        <section className="cta">
          <p>💡 New content every week. Stay tuned!</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2025 The Wolf of Paris-Saclay</p>
      </footer>
    </div>
  );
}

export default HomePage;