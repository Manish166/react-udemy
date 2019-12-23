(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    .then(onInint)
}
},{}]},{},[1]);
