import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useState } from "react";
const Home = lazy(() => import("./pages/Home/index"));
const FavoriteContacts = lazy(() => import("./pages/FavoriteContacts/index"));


function App() {
  const store = useSelector((state) => state);
  const favoriteData = useSelector((state) => state.favoriteData)
  const favoriteId = useSelector((state) => state.favoriteId)
  console.log("--->",favoriteId,favoriteData);
  // const[favoriteData,setFavoriteData]=useState([])
  

  // useEffect(() => {
  //   console.log(favoriteDAta);
  //   addFavorite()
  // }, [favoriteData])
  
  // function addFavorite() {
  //   const alredadyExist = favoriteData.find((el) => el.id === favoriteId.id)
   
    
  //   if (!alredadyExist) {
  //     setFavoriteData((prev) => [...prev,favoriteId])
  //     console.log("********",favoriteData);
  //   }
  // }

  function controlDobleContact() {
    
  }

  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home
                />
              </Suspense>
            }
          />

          <Route
            path="/FavoriteContacts"
            element={
              <Suspense>
                <FavoriteContacts
                favoriteData={favoriteData}
                />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
