// Welcome message
function welcome()
{
    alert("Welcome to FreshVeggie Shop 🥬");
}

// Dark mode toggle
function toggleMode()
{
    document.body.classList.toggle("dark");
}

// Order alert
function orderVeg(item)
{
    alert(item + " added to your order!");
}

// Text animation
let text = document.getElementById("text");

if(text)
{
    text.style.color = "green";
    text.style.fontSize = "40px";
}