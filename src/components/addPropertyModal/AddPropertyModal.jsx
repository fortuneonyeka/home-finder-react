import { Container, Modal,Stepper } from "@mantine/core"
import React, { useState } from 'react'
import AddLocation from "../addLocation/AddLocation";

const AddPropertyModal = ({opened, setOpened}) => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
   <Modal opened={opened} onClose={() => setOpened(false)} closeOnClickOutside size={"90rem"}>
    <Container h={"40rem"} w={"100%"}>
    <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
        <Stepper.Step label="Location" description="Address">
          <AddLocation />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
    </Container>
   </Modal>
  )
}

export default AddPropertyModal