import { Center, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Center h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#00A8A6"
        size="xl"
      />
    </Center>
  );
};
