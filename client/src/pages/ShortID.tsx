import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_ENDPOINT } from "../config";
import axios from "axios";
import bg from "../assets/bg.jpg";
import { Box, Spinner, Text } from "@chakra-ui/react";

function RedirectContainer() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${SERVER_ENDPOINT}/api/url/${id}`);
        const { data } = response;
        setDestination(data?.destination);
      } catch (error) {
        setError(JSON.stringify(error));
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [id]);

  useEffect(() => {
    if (destination) {
      window.location.href = destination;
      // Replace the current history entry with a new one
      window.history.replaceState(null, "", window.location.href);
    } else if (!loading && error) {
      // Redirect to the homepage after a delay
      const redirectTimeout = setTimeout(() => {
        navigate("/");
      }, 2500);

      return () => {
        clearTimeout(redirectTimeout);
      };
    }
  }, [destination, loading, error, navigate]);

  if (loading) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Box>
    );
  }

  if (error) {
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
          rounded="lg"
          backgroundColor="rgba(0,0,0,0.3)"
        >
          <Text fontSize="xl" fontWeight={300} color="white">
            No such route exists!
          </Text>
          <Text fontSize="2xl" fontWeight={500} color="white">
            Redirecting to homepage...
          </Text>
        </Box>
      </Box>
    );
  }

  return null;
}

export default RedirectContainer;
