const urname = prompt("What is your name?");
const urlovename = prompt("What is their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;  //1-100

if (loveScore > 70) {
  alert("Your love Score is " + loveScore + " %." + "You Love each Other like Krishna loves Radha 🤝❤️😍");
  document.write("Your love Score is " + loveScore + " %." + "You Love each Other like Krishna loves Radha 🤝❤️😍");
  document.write("❤️" + urname + " & " + urlovename + "❤️" );
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love Score is " + loveScore + "%.🤗");
  document.write("Your love Score is " + loveScore + "%.🤗");
  document.write("❤️" + urname + " & " + urlovename + "❤️" );
}
if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%"," You go together like oil and water.😅");
  document.write("Your love score is " + loveScore +  "%"," You go together like oil and water.😅");
  document.write("❤️" + urname + " & " + urlovename + "❤️" );
}