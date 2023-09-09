import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import UserDetailsContext from "../../context/UserDetailsContext"
import useProperties from "../../hooks/useProperties.jsx"
import React, { useContext } from 'react'
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createProperty, createResidency } from "../../utils/api";

const Facilities = ({propertyDetails, setPropertyDetails, prevStep, setOpened, setActive}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      bathrooms: propertyDetails.facilities.bathrooms,
      parking: propertyDetails.facilities.parking,
    },
    validate: {
    
      bedrooms: (value) => value < 1 ? "Must be 1 (one) bedroom or higher" : null,
      bathrooms: (value) => value < 1 ? "Must be 1 (one) bathroom or higher" : null,
    },
  });


  const {bedrooms, bathrooms, parking} = form.values

  const handleSubmit = () => {
    const {hasErrors} = form.validate();

    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev, 
        facilities: {bedrooms, bathrooms, parking},
      }));
      mutate()
    }
  };

  
// uploading logic

const {user} = useAuth0()
const {
  userDetails: {token},
} = useContext(UserDetailsContext);
const {refetch: refetchProperties} = useProperties()


const {mutate, isLoading} = useMutation({
  mutationFn: () => createResidency({
    ...propertyDetails, facilities: {bedrooms, bathrooms, parking}
  }, token),
  onError: ({response}) =>toast.error(response.data.message, {position: "bottom-right"}),
  onSettled: () => {
    toast.success("Property Added Successfully", {position:"bottom-right"})

    setPropertyDetails({
      title:"",  
      description: "",
      price: 0,
      country: "",
      city: "",
      address: "",
      image: null,
      facilities: {
        bedrooms:0,
        bathrooms:0,
        parking:0
      },
      userEmail: user?.email,
    })
    setOpened(false)
    setActive(0)
    refetchProperties()
  }
})

  return (
    <Box maw={"50%"} mx="auto" my="lg">
      <form 
      onSubmit={(e) =>{
        e.preventDefault();
        handleSubmit()
      }}>
     
          <NumberInput  withAsterisk label="No Bedrooms" placeholder="2" min={0}
        {...form.getInputProps("bedrooms")}/>

          <NumberInput  withAsterisk label="No Bathrooms" placeholder="2" min={0}
        {...form.getInputProps("bathrooms")}/>

          <NumberInput label="parking Space" placeholder="2" min={0}
        {...form.getInputProps("parking")}/>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep} >Back</Button>
          <Button type="sumbit" color="green"  disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  )
}

export default Facilities