let age=prompt("Enter the age");
let hasTest=prompt("Enter the test status");
if(age>=18)
{
	if(hasTest==="Pass")
	{
		console.log("You are take the licence");
	}
	else if(hasTest==="Fail")
	{
		console.log("Reapply the licence");
	}
	else
	{
		console.log("Error");
	}
}
else
{
	console.log("You are not eligible");
}