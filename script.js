onload = () => {
  document.body.classList.remove("container");
};

   function backToMessage() {
  // 1. Hide the gift/flower page
  document.getElementById("giftPage").classList.add("hidden");
  
  // 2. Show the letter/message page
  document.getElementById("messagePage").classList.remove("hidden");
}

// Ensure your "Open Gift" button also uses the correct ID:
function showGift() {
  document.getElementById("messagePage").classList.add("hidden");
  document.getElementById("giftPage").classList.remove("hidden");
