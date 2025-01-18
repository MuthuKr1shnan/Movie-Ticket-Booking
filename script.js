function spark(event) {
  let i = document.createElement("i");
  // Set the position of the element based on the mouse event
  i.style.left = event.pageX + "px";
  i.style.top = event.pageY + "px";

  // Randomly scale the element
  i.style.transform = `scale(${Math.random() * 2 + 1})`;

  // Set random transition values
  i.style.setProperty("--x", getRandomTransitionValue());
  i.style.setProperty("--y", getRandomTransitionValue());
  document.body.appendChild(i);

  // Remove the element after 2 seconds
  setTimeout(() => {
    document.body.removeChild(i);
  }, 2000);
};

function getRandomTransitionValue() {
  // Generate a random value between -200 and 200 pixels
  return `${Math.random() * 400 - 200}px`;
}

// Add event listener to track mouse movements and create spark effect
document.addEventListener("mousemove", spark);




//Profile Pic adding 

var a = document.getElementById("preview")
var b = document.getElementById("fileInput")
var c = document.getElementById("drop-area")
var submit = document.getElementById("submit")



window.addEventListener('DOMContentLoaded', () => {

  // Retrieve stored image from localStorage
  const savedImage = localStorage.getItem('uploadedImage');
  const preview = document.getElementById('preview');
  const savedImg = localStorage.getItem('uploadedImg');

  // Retrieve user data from localStorage
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  const savedUsername = localStorage.getItem('username');

  // Display user data
  document.getElementById('nameout').textContent = savedName || 'No name saved';
  document.getElementById('emailout').textContent = savedEmail || 'No email saved';
  document.getElementById('usernameout').textContent = savedUsername || 'No username saved';



  // Display image if available
  // if (savedImage) {
  //   preview.innerHTML = `<img src="${savedImage}" alt="Uploaded Image">`;
  // } else {
  //   preview.innerHTML = 'No image found. Please upload an image.';
  // }
  if (savedImg) {
    preview.innerHTML = `<img src="${savedImg}" alt="Uploaded Image">`;
  } else {
    preview.innerHTML = 'No image found. Please upload an image.';
  }


});


c.addEventListener('dragover', (event) => {
  event.preventDefault();
  c.classList.add('dragover');
  
});

c.addEventListener('dragleave', () => {
  c.classList.remove('dragover');
 
});

// Handle file drop
c.addEventListener('drop', (event) => {
  event.preventDefault();
  c.classList.remove('dragover');
  const files = event.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files) {
  const file = files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('uploadedImg', reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please upload a valid image file.');
  }
}

// Save data to localStorage (name, email, username)

function saveData() {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  // Check if the fields are empty manually (alternative to using required attribute)
  if (name === '' || email === '' || username === '') {
    var nam = document.getElementById("name")
    nam.classList.add("input-error")
    var emil = document.getElementById("email")
    emil.classList.add("input-error")
    var usernam = document.getElementById("username")
    usernam.classList.add("input-error")


   

    return;

    
  } 
  
  else {



    window.location.href = 'ticket.html';
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);

    // Display stored data
    document.getElementById('nameout').textContent = name;
    document.getElementById('emailout').textContent = email;
    document.getElementById('usernameout').textContent = username;

    document.getElementById("inputform").reset()





  }


}

// Save uploaded image to localStorage as Base64 string
function saveImageToLocalStorage(files) {
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem('uploadedImage', reader.result); // Save the image as Base64
  };
  reader.readAsDataURL(files); // Convert file to Base64
}

// // Event listener for file input to handle image uploads
// const fileInput = document.getElementById('fileInput');
// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith('image/')) {
//     handleFiles(file); // Save image to localStorage
//   } else {
//     alert('Please upload a valid image file.');
//   }
// });
// Event listener for file input to handle image uploads 2.0
fileInput.addEventListener('change', () => {
  const files = fileInput.files;
  handleFiles(files);
});

c.addEventListener('click', () => {
  b.click();
});


const form = document.getElementById('inputform');

// Add event listener to the form's submit event
form.addEventListener("submit",(event) => {
  event.preventDefault(); // Prevent default form submission
  saveData(); // Call the saveData function

});
