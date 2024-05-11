Can we have more than 1 html file in our poject?
Question 2 : <body>
     <h1>People entered : </h1>
     <h2 id="count-el">0</h2>
     <button id="'increment-btn" onClick="increament()">INCREMENT</button>
     <script src="./index.js">
        
     </script>
         
</body>
explain this onClick in button and it will get activated onClick of button.

Solution : In index.js we will write the function but the main question is what if there are many js files so solution is : 
 1. Inline Event Handlers:
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="increment.js" defer></script>
</head>
<body>
    <h1>People entered : </h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
</body>
</html>

In increment.js:
function increment() {
    var count = parseInt(document.getElementById('count-el').innerText);
    count++;
    document.getElementById('count-el').innerText = count;
}

2. Centralized Event Handling:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="controller.js" defer></script>
    <script src="increment.js" defer></script>
</head>
<body>
    <h1>People entered : </h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn">INCREMENT</button>
</body>
</html>

controller.js:

document.getElementById('increment-btn').addEventListener('click', increment);

increment.js
function increment() {
    var count = parseInt(document.getElementById('count-el').innerText);
    count++;
    document.getElementById('count-el').innerText = count;
}

3. Event Delegation:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="increment.js" defer></script>
</head>
<body>
    <h1>People entered : </h1>
    <h2 id="count-el">0</h2>
    <div id="container">
        <button id="increment-btn">INCREMENT</button>
    </div>
</body>
</html>

increment.js:
document.getElementById('container').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'increment-btn') {
        increment();
    }
});

function increment() {
    var count = parseInt(document.getElementById('count-el').innerText);
    count++;
    document.getElementById('count-el').innerText = count;
}
 
 Question : What is DOM?
 Answer : The DOm is how we use javascript to modify a website