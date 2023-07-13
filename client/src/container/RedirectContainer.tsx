import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_ENDPOINT } from "../config";
import axios from "axios";
import { Box, Spinner, Text } from "@chakra-ui/react";
import Background from "../components/Background";

function RedirectContainer() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { shortId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${SERVER_ENDPOINT}/api/url/${shortId}`
        );
        const { data } = response;
        setDestination(data?.destination);
      } catch (error) {
        setError(JSON.stringify(error));
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [shortId]);

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
      >
        <Box
          pos="relative"
          zIndex="2"
          padding="6"
          border="2px solid white"
          rounded="lg"
          backgroundColor="rgba(0,0,0,0.3)"
        >
          <Text fontSize="xl" fontWeight={400} color="white">
            No such route exists!
          </Text>
          <Text fontSize="2xl" fontWeight={600} color="white">
            Redirecting to homepage...
          </Text>
        </Box>
        <Background />
      </Box>
    );
  }

  return null; // You can customize the component to render when there is no destination or error
}

export default RedirectContainer;
