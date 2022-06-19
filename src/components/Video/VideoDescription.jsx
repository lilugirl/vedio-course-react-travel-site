import { CONTENT_INFO } from "../../data";

const VideoDescription = ({ currentIndex }) => {
  const CurrentContent = CONTENT_INFO[Object.keys(CONTENT_INFO)[currentIndex]];
  return (
    <section className="text-description">
      <h1>{CurrentContent.h1}</h1>
      <h2>{CurrentContent.h2}</h2>
      <p>{CurrentContent.p}</p>
      <button>Expore</button>
    </section>
  );
};

export default VideoDescription;
