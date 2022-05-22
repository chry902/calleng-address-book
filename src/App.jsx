import styles from "./styles.module.scss";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";
const Home = lazy(() => import("./pages/Home/index"));
const FavoriteContacts = lazy(() => import("./pages/FavoriteContacts/index"));

function App() {
  const [favorite, setFavorite] = useState([]);

  console.log("oggetto da app", favorite);
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home setFavorite={setFavorite} />
              </Suspense>
            }
          />

          <Route
            path="/FavoriteContacts"
            element={
              <Suspense>
                <FavoriteContacts favorite={favorite} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
