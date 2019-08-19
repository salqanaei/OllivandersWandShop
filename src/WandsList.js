import React from "react";
import WandsCard from "./WandsCard";

function WandsList(props) {
  const wandsarray = props.wands.map((wand, i) => (
    <WandsCard key={i} wands={wand} />
  ));

  return <div className="row">{wandsarray}</div>;
}

export default WandsList;
