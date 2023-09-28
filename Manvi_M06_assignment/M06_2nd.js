let feedback = window.prompt("Give your feedback");
if (feedback.length>10 && feedback.length<30)
{
    alert("Thanks! Here is your 15% discount");
}
else if(feedback.length>=30){
    alert("We really appreciate your feedback! Here is your 30% discount");
}
else{
    alert("hope to see you again.")
}