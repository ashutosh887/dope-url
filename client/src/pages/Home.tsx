import { Box } from "@chakra-ui/react";
import URLForm from "../components/URLForm";
import bg from "../assets/bg.jpg";

function Home() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={bg}
      bgSize="cover"
      background={`${bg} no-repeat center center fixed`}
    >
      <URLForm />
    </Box>
  );
}

export default Home;
