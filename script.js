function uploadImages() {
  var input = document.getElementById("imageInput");
  var files = input.files;

  var formData = new FormData();

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    formData.append("images", file);
  }

  // Simulação do código backend em Java
  function processImages(images) {
    // Lógica para processar as imagens e criar o vídeo
    console.log("Processando imagens...");
    console.log(images);

    // Retornar a URL do vídeo resultante
    var videoUrl = "https://exemplo.com/video.mp4";
    return videoUrl;
  }

  var videoUrl = processImages(files);

  var videoElement = document.createElement("video");
  videoElement.src = videoUrl;
  videoElement.controls = true;
  document.getElementById("videoContainer").appendChild(videoElement);
}