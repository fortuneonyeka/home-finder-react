import { Container, Modal,Stepper } from "@mantine/core"
import React, { useState } from 'react'
import AddLocation from "../addLocation/AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../uploadImage/UploadImage";

const AddPropertyModal = ({opened, setOpened}) => {
  const [active, setActive] = useState(0);
  const {user} = useAuth0()
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings:0,
      bathrooms: 0
    },
    userEmail: user?.email,
  })
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
   <Modal opened={opened} onClose={() => setOpened(false)} closeOnClickOutside size={"90rem"}>
    <Container h={"40rem"} w={"100%"}>
    <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
        <Stepper.Step label="Location" description="Address">
          <AddLocation nextStep={nextStep}  propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails}/>
        </Stepper.Step>
        <Stepper.Step label="Image" description="Property Image">
          <UploadImage nextStep={nextStep} prevStep={prevStep}  propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails}/>
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