const video = document.querySelector('#video');
const button = document.querySelector('#button');
const btnTwo = document.querySelector('#ButtonTwo');

// Caputer screen or tab , to pass it to video element 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onlloadmetadata = () => {
            video.play();
        } 
    } catch (error){
        console.log(error);
    }
}

btnTwo.addEventListener('click', selectMediaStream);

button.addEventListener('click', async () => {
    console.log('enter')
    // Disable button
    button.disabled = true;
    // Start Picture in Picute
    await video.requestPictureInPicture();
    // Enable Button
    button.disabled = false;
});

// on load
