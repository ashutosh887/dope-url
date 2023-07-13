import { Box, Button, Text } from "@chakra-ui/react";
import bg from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";
import routes from "../config/routes";

function NotFound() {
  const navigate = useNavigate();

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
      <Box
        pos="relative"
        padding="6"
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

        <Button onClick={() => navigate(routes.HOME)} size="sm">
          Home
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
