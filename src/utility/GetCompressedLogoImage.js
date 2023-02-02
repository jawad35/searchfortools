import imageCompression from "browser-image-compression"

async function handleImageUploadLogo(event, states, setStates) {
  const imageFile = event.target.files[0]
  if (imageFile.size > 3000000) {
    setStates({ ...states, showLogoImageError: true, EventLogoImage: "" })
  } else {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options)
      imageCompression.getDataUrlFromFile(compressedFile).then((res) => {
        setStates({ ...states, EventLogoImage: res, showLogoImageError: false })
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default handleImageUploadLogo
