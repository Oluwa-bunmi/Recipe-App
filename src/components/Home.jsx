import React from "react";

import "../App.css";

const Home = ({recipe}) => {
 
 
 
  return (
    <div>
      {/* <div className="container"> */}

      {/* return ( */}
      {/* <div className="movie" key={recipe.id}>
        <div>
          <img src={recipe.image} alt="" />
        </div>
        <div>
          <p>{recipe.title}</p>
        </div>
      </div> */}
      {/* ); */}
      {/* })} */}
      {/* </div> */}

      {recipe.map((recipe) => {
      return(
        <div className="container" key={
          recipe.id
        }>
          <div className="movie">
             <div>
          <img src={recipe.image} alt="" />
        </div>
         <div>
          <p>{recipe.title}</p>
        </div>
            
          </div>
        </div>
      )
     })}


    </div>
  );
};

export default Home;
