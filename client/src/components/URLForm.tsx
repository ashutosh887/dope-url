import { Box, Input, InputGroup, Button, Tooltip } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { SERVER_ENDPOINT } from "../config";
import axios from "axios";
import { CopyIcon } from "@chakra-ui/icons";

const URLForm = () => {
  const [destination, setDestination] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setIsGenerating(!isGenerating);
    event.preventDefault();
    setShortUrl("");

    await axios
      .post(`${SERVER_ENDPOINT}/api/url`, {
        destination: destination,
      })
      .then((response) => {
        response.data;
        setShortUrl(`${window.location.origin}/${response?.data?.shortId}`);
      })
      .catch((error) => {
        alert(error.response.data.errors["0"]);
        setShortUrl("");
        setIsGenerating(false);
      });

    setIsGenerating(false);
  }

  return (
    <Box pos="relative" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(event) => setDestination(event.target.value)}
            placeholder="https://ashutosh887.vercel.app"
            width="300px"
            margin="2px"
          />
          <Button
            type="submit"
            margin="2px"
            colorScheme="telegram"
            isLoading={isGenerating}
            spinnerPlacement="start"
          >
            Create
          </Button>
        </InputGroup>
      </form>

      {shortUrl && (
        <Box
          padding="2"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>

          <Tooltip label="Copy">
            <Button
              size="sm"
              onClick={() => navigator.clipboard.writeText(shortUrl)}
            >
              <CopyIcon />
            </Button>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default URLForm;
