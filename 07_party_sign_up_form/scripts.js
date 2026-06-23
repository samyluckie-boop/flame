function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
  let message 
  if (name == ''){
    message = 'Please enter both ya sod'
  } else if (region == ''){
    message = 'Srsly, both'
  } else {
    message = `${name} from ${region}, hello! We do hope you enjoy your stay.`
  }

 
  document.getElementById("output").innerText = message;
}

document.getElementById("signupButton").onclick = showSignupMessage
