import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function DefaultLayout({ children }: PropsWithChildren<any>) {
  return <Container maxW="container.xl">{children}</Container>;
}

export default DefaultLayout;
