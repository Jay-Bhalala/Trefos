const imageForm = document.querySelector("imageForm")
const imageInput = document.querySelector("#imageInput")

imageForm.addEventListener("submit", async event => {
    event.preventDefault()
    const file = imageInput.files[0]

    //get secure url form our server

    //post the image directly to the s3 bucket

    //post request to my server to store any extra data

})