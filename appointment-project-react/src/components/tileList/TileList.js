import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return tiles.map((tile, index) => <Tile key={index} tile={tile} />);
};
