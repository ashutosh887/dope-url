import { Box, Button, Text } from "@chakra-ui/react";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        pos="relative"
        zIndex="2"
        padding="6"
        border="2px solid white"
        display="flex"
        flexDirection="column"
        rounded="lg"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,0,0,0.3)"
      >
        <Text fontSize="xl" fontWeight={400} color="white" margin="4">
          Not found!
        </Text>

        <Button onClick={() => navigate("/")} size="sm">
          Home
        </Button>
      </Box>
      <Background />
    </Box>
  );
}

export default NotFound;
