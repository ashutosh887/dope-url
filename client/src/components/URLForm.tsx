import { Box, Input, InputGroup, Button } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { SERVER_ENDPOINT } from "../config";
import axios from "axios";

const URLForm = () => {
  const [destination, setDestination] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINT}/api/url`, {
        destination: destination,
      })
      .then((response) => response.data);
    setShortUrl(result);
  }

  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(event) => setDestination(event.target.value)}
            placeholder="https://ashutosh887.vercel.app"
            width="300px"
          />
          <Button type="submit" disabled={true}>
            Create
          </Button>
        </InputGroup>
      </form>

      {shortUrl && (
        <a href={`/${shortUrl?.shortId}`} target="_blank">
          {window.location.origin}/{shortUrl?.shortId}
        </a>
      )}
    </Box>
  );
};

export default URLForm;
