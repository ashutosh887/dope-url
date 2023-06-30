import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_ENDPOINT } from "../config";
import axios from "axios";
import { Box, Spinner } from "@chakra-ui/react";

function RedirectContainer() {
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState();

  const { shortId } = useParams();

  useEffect(() => {
    async function getData() {
      return await axios
        .get(`${SERVER_ENDPOINT}/api/url/${shortId}`)
        .then((res) => setDestination(res.data?.destination))
        .catch((error) => setError(error.message));
    }
    getData();
  }, [shortId]);

  if (!destination && !error) {
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

  return <p>{error && JSON.stringify(error)}</p>;
}

export default RedirectContainer;
