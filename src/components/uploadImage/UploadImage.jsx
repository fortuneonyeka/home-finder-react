import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"
import "./uploadImage.css"
import { Button, Group } from "@mantine/core"

const UploadImage = ({propertyDetails, setPropertyDetails, nextStep, prevStep}) => {

  const [imageUrl, setImageUrl] = useState(propertyDetails.image)
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  const handleNext = () => {
    setPropertyDetails((prev) => ({...prev, image: imageUrl}))
    nextStep()
  }

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dd6iakosn",
        uploadPreset: "jsfpd5vk",
        maxFiles: 1
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url)
        }
      }
    )

  }, [])
  return (
    <div className="flexColCenter uploadWrapper">
      {
        !imageUrl ? (
          <div onClick={() => widgetRef.current.open()} className="flexColCenter uploadZone">
            <AiOutlineCloudUpload size={50} color="gray"/>
            <span>Upload Image</span>
          </div>
        ): (
          <div onClick={() => widgetRef.current.open()} className="uploadedImage">
            <img src={imageUrl} alt="" />
          </div>
        )
      }

  <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button variant="default" onClick={handleNext} disabled={!imageUrl}>Next</Button>
        
      </Group>
    </div>
  )
}

export default UploadImage