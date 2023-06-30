import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

function getWindowDimentions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Background() {
  const [dimensions, setDimensions] = useState(getWindowDimentions());

  useEffect(() => {
    function handleResize() {
      setDimensions(getWindowDimentions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const img = `https://source.unsplash.com/random/${dimensions.width}x${dimensions.height}`;

  return (
    <Image
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      right="0"
      zIndex="1"
      src={img}
      alt="bg"
    />
  );
}

export default Background;
