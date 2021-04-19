import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            {...register("email")}
            label="E-mail"
            type="email"
            error={errors.email}
            name="email"
          />
          <Input
            {...register("password")}
            label="Senha"
            error={errors.password}
            type="password"
            name="password"
          />
        </Stack>
        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
