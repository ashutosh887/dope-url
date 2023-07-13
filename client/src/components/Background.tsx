import bgImage from "../assets/bg.jpg";

function Background() {
  return (
    <img
      src={bgImage}
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        zIndex: 1,
        position: "fixed",
      }}
    />
  );
}

export default Background;
