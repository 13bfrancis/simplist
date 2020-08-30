import React from "react";
import { Title } from "components/Title";

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Title style={{ textAlign: "left" }}>Simplist</Title>
            </li>
            <li>Sign Out</li>
          </ul>
        </nav>
      </header>
      <section>
        <button>add item</button>
        <div>
          <input type="text" placeholder="enter item name" />
        </div>
      </section>
      <main>
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
          <li>list item 4</li>
        </ul>
      </main>
    </>
  );
};
