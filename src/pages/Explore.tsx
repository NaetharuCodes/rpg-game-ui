/*
  - Move around 
  - Look
  - Interact
  - Talk with
  - Attack
  - Cast
  - Flee
  - Use Item
 */

import ExploreButton from "../components/ExploreButton/ExploreButton";

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div id="explore-screen" className="bg-red-400 h-[800px] w-[1200px]">
        The main Screen
      </div>
      <div
        id="explore-buttons"
        className="flex justify-between w-[1200px] bg-green-200"
      >
        <div>
          <ExploreButton onClick={() => {}} text="North" />
          <ExploreButton onClick={() => {}} text="South" />
          <ExploreButton onClick={() => {}} text="East" />
          <ExploreButton onClick={() => {}} text="West" />
        </div>
        <div>
          <ExploreButton onClick={() => {}} text="Look" />
          <ExploreButton onClick={() => {}} text="Talk" />
        </div>
        <div>
          <ExploreButton onClick={() => {}} text="Fight" />
          <ExploreButton onClick={() => {}} text="Flee" />
        </div>
        <div>
          <ExploreButton onClick={() => {}} text="Cast" />
          <ExploreButton onClick={() => {}} text="Item" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
