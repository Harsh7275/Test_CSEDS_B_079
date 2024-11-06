document.getElementById('getJoke').addEventListener('click', fetchJoke);  
document.getElementById('clearJoke').addEventListener('click', clearJoke);  

function fetchJoke() {  
    fetch('https://v2.jokeapi.dev/joke/Any')  
        .then(response => response.json())  
        .then(data => {  
            let joke;  
            if (data.type === 'single') {  
                joke = data.joke;  
            } else {  
                joke = `${data.setup} - ${data.delivery}`;  
            }  
            document.getElementById('joke').innerText = joke;  
            document.getElementById('charCount').innerText = joke.length;  
        })  
        .catch(error => console.error('Error fetching joke:', error));  
}  

function clearJoke() {  
    document.getElementById('joke').innerText = 'Press the button for a joke!';  
    document.getElementById('charCount').innerText = '0';  
}

let a =document.getElementById("getJoke");
let b =document.getElementById("joke");
a.addEventListener("mouseenter",function(){
  b.style.backgroundColor="lightblue"
 })

 a.addEventListener("mouseleave",function(){
  b.style.backgroundColor=" #d2c4c4"
 })
