
document.getElementById('laplacian').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");
  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
  cv.Laplacian(src, dst, cv.CV_8U, 3, 2, 1, cv.BORDER_DEFAULT);
  cv.imshow('outputCanvas', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('sobelX').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");
  let src = cv.imread('imageSrc');
  let dstx = new cv.Mat();
  //convert to binary
  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
  cv.Sobel(src, dstx, cv.CV_8U, 1, 1, 5, 1, 0, cv.BORDER_DEFAULT);
  cv.imshow('outputCanvas2', dstx);
  src.delete();
  dstx.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('sobelY').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dsty = new cv.Mat();
  //convert to binary
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
  cv.Sobel(src, dsty, cv.CV_8U, 0, 2, 3, 1, 0, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas5', dsty);
  src.delete();
  dsty.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('edge').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");
  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
// You can try more different parameters
  cv.Canny(src, dst, 150, 255, 3, cv.BORDER_DEFAULT);
  cv.imshow('outputCanvas3', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('houg').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");
  let src = cv.imread('imageSrc');
  //let dst = new cv.Mat();
 
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
// You can try more different parameters
  cv.Canny(src, dst, 200, 255, 3, cv.BORDER_DEFAULT);
  
  cv.imshow('outputCanvas4', dst);
  
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('edge2').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");
  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
// You can try more different parameters
  cv.Canny(src, dst,128, 255, 3, cv.BORDER_DEFAULT);
  cv.imshow('outputCanvas6', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};