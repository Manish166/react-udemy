const video=document.querySelector("video")
const remoteCam=document.querySelector("remoteCam")
const constraints={video: true,audio: true}
const Connection = new RTCPeerConnection

navigator.mediaDevices.getUserMedia(constraints)
    .then(stream=>{
        var video = document.querySelector('video');
        video.srcObject=stream
        video.Play()
    })
    .catch(err=>{console.log(err)})

createOffer => {
    Connection.createOffer()
    .then(offer=>{
        return Connection.setLocalDescription(offer)
    })
}