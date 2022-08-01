import { Box, Heading } from "@chakra-ui/react"
import { SpecificStep1Component } from "./SpecificStep1Component"

export function Step1 () {
  return (
    <Box>
        <Heading fontSize="xl">Step 1</Heading>
        <SpecificStep1Component/>
    </Box>
  )
}
