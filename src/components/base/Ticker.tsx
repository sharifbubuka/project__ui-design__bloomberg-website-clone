/* eslint-disable @next/next/no-img-element */
import { FC, useState, ReactNode } from "react";
import ReactTicker from "react-ticker";
import { GrPlayFill, GrPauseFill } from "react-icons/gr";
import { indices } from "../../data/indices.data";

type Props = {
  data: Index[];
};

const makeIndicesUI = (indices: Index[]) => {
  // const indicesUI = ReactNode[];
  // indices.map(index => {
  //     indicesUI.push
  // })
};

const Ticker: FC<Props> = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="border border-black border-r-0 relative h-8">
      <button
        onClick={() => setPlaying((prevState) => !prevState)}
        className="absolute bg-white hover:bg-black- hover:text-white z-10 w-10 border-r border-r-black h-full flex justify-center items-center"
      >
        {/* <img src="icons/pause.svg" alt="Pause Button" className="" /> */}
        {playing ? (
          <GrPauseFill className="stroke-inherit text-green-500" />
        ) : (
          <GrPlayFill />
        )}
      </button>
      <ReactTicker move={playing}>
        {({ index }) => (
          <div>
            <h1 className="px-3 text-sm h-7 flex items-center">
              {indices[index] && indices[index].label}
              {() => <span>dsd</span>}
            </h1>
          </div>
        )}
      </ReactTicker>
    </div>
  );
};

export default Ticker;
