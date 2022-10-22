let number = 0;
function check(number) {
  if (number > 5) {
    alert("You can't add more Player!");
    return false;
  }
  return true;
}
document.getElementById("first-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-1").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("secend-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-2").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("thard-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-3").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("forth-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-4").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("fifth-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-5").innerText;
    listItemsElements.appendChild(li);
  }
});

document.getElementById("six-btn").addEventListener("click", function () {
  number++;
  if (check(number)) {
    let listItemsElements = document.getElementById("player-list");
    let li = document.createElement("li");
    li.innerText = document.getElementById("player-6").innerText;
    listItemsElements.appendChild(li);
  }
});


// clalulate js

document
  .getElementById("btn-calculate")
  .addEventListener("click", function () {
    let parPlayerCost = parPlayerBuddget();
    let parPlayerBuddgetTotalAmount = parPlayerCost * number;

    let playerExpence = document.getElementById("expenses-toatl");
    playerExpence.innerText = parPlayerBuddgetTotalAmount;
  });

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    let playerExpence = document.getElementById("expenses-toatl");
    let playerExpenceString = playerExpence.innerText;
    let playerExpenceAmount = parseFloat(playerExpenceString);

    let managerINputField = document.getElementById("manager-input");
    let managerINputFieldString = managerINputField.value;
    let managerINputFieldAmount = parseFloat(managerINputFieldString);

    let coachInputfield = document.getElementById("coach-input");
    let coachInputfieldString = coachInputfield.value;
    let coachInputfieldAmount = parseFloat(coachInputfieldString);

    let totalCoast =
      playerExpenceAmount + managerINputFieldAmount + coachInputfieldAmount;

    let totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = totalCoast;
  });



  function disableButton(btn) {
    document.getElementById(btn.id).disabled = true;
  }
  
  function parPlayerBuddget() {
    let parPlayerBuddget = document.getElementById("perplayer-input");
    let parPlayerBuddgetString = parPlayerBuddget.value;
    let parPlayerBuddgetAmount = parseFloat(parPlayerBuddgetString);
  
    return parPlayerBuddgetAmount;
  }
  