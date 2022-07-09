const elmVideo = document.getElementById('video')
const elmEmotion = document.getElementById('emotion')

navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

const cargarCamera = () => {
    navigator.getMedia (

        // Restricciones (contraints) *Requerido
        {
        video: true,
        audio: false
        },
        
        stream => elmVideo.srcObject = stream,
        console.error
    )
}

Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
]).then(cargarCamera)

elmVideo.addEventListener('play', async () => {
    const canvas = faceapi.createCanvasFromMedia(elmVideo)
    document.body.append(canvas)

    const displaySize = { width: elmVideo.width, height: elmVideo.height }
    // resize the overlay canvas to the input dimensions
    faceapi.matchDimensions(canvas, displaySize)

    setInterval( async () => {

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

        const detections = await faceapi.detectAllFaces(elmVideo)
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender()
            .withFaceDescriptors()
        
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

        console.log(detections)

    })

})




