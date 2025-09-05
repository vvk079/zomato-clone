import React from "react";
import Reel from "../../components/Reel";

import "../../styles/reels.css";

const videos = [
  { id: 1, url: "https://ik.imagekit.io/5i6ssknfy/ed0baee9-16ba-4068-aaba-8d7b2cbffc2f_mmxDsSzjx", description: "Nice product you’ll love!" },
  { id: 2, url: "https://ik.imagekit.io/5i6ssknfy/ed0baee9-16ba-4068-aaba-8d7b2cbffc2f_mmxDsSzjx", description: "Check this amazing dish." },
  { id: 3, url: "https://ik.imagekit.io/5i6ssknfy/ed0baee9-16ba-4068-aaba-8d7b2cbffc2f_mmxDsSzjx", description: "Special discount offer!" },
];

const ReelsPage = () => {
  return (
    <div className="reels-container">
      {videos.map((v) => (
        <Reel key={v.id} video={v} />
      ))}
    </div>
  );
};

export default ReelsPage;
