var loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function(){
  banner = document.getElementById("banner").style.display = "none";
  dashboard = document.getElementById("dashboard").style.display = "flex";
});

  //Deposit Function
  var depositBtn = document.getElementById("depositBtn");
  depositBtn.addEventListener('click', function(){

  //depositAmount--> The value being deposited.
   var depositAmount = document.getElementById("depositAmount").value;
   var depositNumber = parseFloat(depositAmount);

   var currentDeposit = document.getElementById("currentDeposit").innerText;
   var currentDepositNumber = parseFloat(currentDeposit);

   var mainDeposit = depositNumber + currentDepositNumber;
   document.getElementById("currentDeposit").innerText = mainDeposit;


   //Total Balance Function
   var totalBalance = document.getElementById("currentBalance").innerText;
   var totalBalanceNumber = parseFloat(totalBalance);

   var newTotalBalance = totalBalanceNumber + depositNumber;
   document.getElementById("currentBalance").innerText = newTotalBalance;

   
 });



//Total Withdrawal Function
 var withdrawalBtn = document.getElementById("withdrawalBtn");
 withdrawalBtn.addEventListener('click', function(){

   //withdrawalAmount--> The value being withdrawn.
   var withdrawalAmount = document.getElementById("withdrawalAmount").value;
   var withdrawalNumber = parseFloat(withdrawalAmount);

   var currentWithdrawal = document.getElementById("currentWithdrawal").innerText;
   var currentWithdrawalNumber = parseFloat(currentWithdrawal);

   var mainWithdrawal = currentWithdrawalNumber + withdrawalNumber;
   document.getElementById("currentWithdrawal").innerText = mainWithdrawal;


  //Total Balance Function
    var totalBalance = document.getElementById("currentBalance").innerText;
    var totalBalanceNumber = parseFloat(totalBalance);

    var newTotalBalance = totalBalanceNumber - withdrawalNumber;
    document.getElementById("currentBalance").innerText = newTotalBalance;

 });
