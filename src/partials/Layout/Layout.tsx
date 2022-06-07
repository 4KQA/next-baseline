import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function Layout({ children, ...rest }: PropsWithChildren<any>) {
  return (
    <Container maxWidth="container.xl" {...rest}>
      {children}
    </Container>
  );
}
