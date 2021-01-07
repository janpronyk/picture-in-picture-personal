console.log('Working!')

const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// prompt user to select media stream

async function selectMediaStream() {
    try {

       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = _ => {
           videoElement.play();
       }

    } catch (error) {
        console.log('Error selecting media stream', error);
    }
}


button.addEventListener('click', async _ => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})


// On load
selectMediaStream();