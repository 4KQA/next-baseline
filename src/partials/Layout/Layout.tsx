import { Container } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout ({ children, ...rest }: PropsWithChildren<LayoutProps>) {
  return (
    <Container maxWidth="container.xl" {...rest}>
      {children}
    </Container>
  )
}
