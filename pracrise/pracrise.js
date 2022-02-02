const data = new Date();
function  date() {
   document.getElementById('data').value = data;
}
function  names(){
   document.getElementById('names').value = "Usenhanov Daniyar";
}
function calculate(){
   document.getElementById('vis').style.display ="none";
   document.getElementById('time').style.display ="block";
   let Year = 2024 - data.getFullYear();
   let Month = 8 - data.getMonth();
   let day =5 - data.getDate();              //I know that it will not work , if our month is more than 8 , or our day greater than 5 and our day and hour more than 5 and 18
   let hours = 18 - data.getHours();         //But i didn't want to ctreate alghoritm for clearly calculating
   let  minutes = 0;
   if (data.getMinutes()>0) {
      let minutes = 60 - data.getMinutes();
      hours--;
   }
   document.getElementById('time').value="Time: Year: " + Year.toString( ) + " Months " +Month.toString() + " Days: " +day.toString() +" Hours: " +hours.toString() + " Minutes: " +minutes.toString();
}

function Divide(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first / second;
}
function Multiply(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first * second;
}