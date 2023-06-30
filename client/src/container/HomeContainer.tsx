import { Box } from "@chakra-ui/react";
import Background from "../components/Background";
import URLForm from "../components/URLForm";

const HomeContainer = () => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <URLForm />
      <Background />
    </Box>
  );
};

export default HomeContainer;
