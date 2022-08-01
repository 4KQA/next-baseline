import { Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import { Step1 } from "../../views/checkout/Step1"
import { Step2 } from "../../views/checkout/Step2"

const steps = [{ component: <Step1 /> }, { component: <Step2 /> }]

export default function CheckoutSteps () {
  const [currenStepIndex, setCurrentStepIndex] = useState(0)
  return (
    <div>
      <Box marginY="12">
        {/* Render the current Step view */}
        {steps[currenStepIndex].component}
      </Box>

      <Box>
        {/* Change step index to render different Step views */}
        <Button onClick={() => setCurrentStepIndex(0)}>Goto step 1</Button>
        <Button onClick={() => setCurrentStepIndex(1)}>Goto Step 2</Button>
      </Box>
    </div>
  )
}
