let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10!";

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

function refundTenDollars() {
  totalDonations = totalDonations - 10;
  console.log(totalDonations)
  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;


  let message = "Fine. Here's your $10 back!";

  if (totalDonations < 0){
    totalDonations = 0
    console.log('inside the if , totalDonations')
  }


  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }


  document.getElementById("thankYouMessage").innerText = message;
}

document.getElementById("giveButton").onclick = giveTenDollars
document.getElementById("refundButton").onclick = refundTenDollars   
