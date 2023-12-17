import React from "react";

const Stats = ({ allItems }) => {

  const itemsNumber = allItems.length;
  const itemsPacked = allItems.filter((item) => item.packed).length;
  const itemPercentage = Math.round((itemsPacked / itemsNumber) * 100);
  console.log(itemPercentage); 

  if(!itemsNumber) return <footer className="stats"><em>Start adding items for your journey.</em></footer>

  return (
    <footer className="stats">
      {itemPercentage === 100 ? (
        <em>You have everything.Ready to go!</em>
      ) : (
        <em>
          You have {itemsNumber} items on your list and you packed {itemsPacked}
          ({itemPercentage}%).
        </em>
      )}
    </footer>
  );
};

export default Stats;
