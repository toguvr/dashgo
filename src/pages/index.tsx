import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <Flex w="100vw" align="center" justify="center" h="100vh">
      <Flex
        as="form"
        width="100%"
        maxW="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input label="E-mail" type="email" name="email" />
          <Input label="Senha" type="password" name="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
