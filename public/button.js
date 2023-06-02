function displayImage(){
    let input = document.getElementById("imageInput");
    let imageDisplay = document.getElementById("imageDisplay");
      if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      imageDisplay.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }

}
