document.querySelector("button").addEventListener("click", (e) => {
    const imageLink = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg";
    const downloadSize = 5049999;
    let timeStart, timeEnd;
  
    const downloadSrc = new Image();
    document.querySelector(".loader-content").classList.add("hide");
    document.querySelector(".loader").classList.remove("hide");
    timeStart = new Date().getTime();
  
    downloadSrc.src = imageLink + "?nn=" + timeStart;
  
    downloadSrc.onload = function () {
      timeEnd = new Date().getTime();
      const timeDuration = (timeEnd - timeStart) / 1000;
      const loadedBytes = downloadSize * 8;
      const totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);
  
      let i = 0;
      const animate = () => {
        if (i < totalSpeed) {
          document.querySelector(".content").innerHTML = `${i.toFixed(2)} <small> Mbps </small>`;
          setTimeout(animate, 30);
          i += 1.02;
        } else {
          document.querySelector(".content").innerHTML = `${totalSpeed} <small> Mbps </small>`;
          document.querySelector("button").innerHTML = "Test Again"; // Add this line
        }
      };
  
      animate();
      document.querySelector(".content").innerHTML = `${totalSpeed} <small> Mbps </small>`;
      document.querySelector(".loader-content").classList.remove("hide");
      document.querySelector(".loader-content").classList.add("result");
      document.querySelector(".loader").classList.add("hide");
      document.querySelector(".content").classList.remove("hide");
      
    };
});
