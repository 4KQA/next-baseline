import { Box, Fade, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import Logo from "./logo.svg";

function Example() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      translateY: [20, 0],
    });
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexFlow="column nowrap"
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0, translateY: 20 }}
        transition={{
          translateY: { duration: 2, ease: "easeOut" },
        }}
      >
        <Logo width="25vw" height="auto" />
      </motion.div>
      <br />
      <motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{
          opacity: { delay: 0.5, duration: 3 },
        }}
      >
        <Text fontSize="xl" fontWeight={100}>
          Baseline
        </Text>
      </motion.div>
    </Box>
  );
}

export default Example;
