export function loadUnsplashPhotos(apiKey, appender) {
  const fragment = new DocumentFragment();

  fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const photos = JSON.parse(data);

      photos.forEach((photo) => {
        let img = document.createElement("img");
        img.classList.add("slider_image");
        img.src = photo.links.download;

        fragment.append(img);
      });

      appender.append(fragment);
    })
    .catch((err) => {
      console.log(err);
    });
}
