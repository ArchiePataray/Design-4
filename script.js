onload = () => {
  document.body.classList.remove("container");
};

        function backToMessage() {
  // Hide the flower container (change ID to match your container)
  document.getElementById("flower-container").classList.add("hidden"); 
  
  // Show the message page
  document.getElementById("messagePage").classList.remove("hidden");
}
  
