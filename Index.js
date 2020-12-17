var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
function Switch()
{
    window.confirm("The Website is not owned by me, do you really want to check it out?");
    window.location.href = "https://www.soundsnap.com/tags/flute";
}