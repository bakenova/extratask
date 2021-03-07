
exchange = document.getElementById("submit");
/*
1. Split message words and store it in an array.+
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array-
*/
let answer = () => {

let message = document.getElementById("message").value;
let messageWords = [];
let theMostFrequentWord;

messageWords=function(message){
    return message.toString().split(" ");
} 

var counts = {};
var max = -1;
var theMostFreqWord;

theMostFrequentWord=function(message){
   for(var i = 0, l = message.length; i < l; i++){
       var w = message[i];
       
       if(counts[w] === undefined){
           counts[w] = 1;
       }else{
           counts[w] = counts[w] + 1;
       }
       if(counts[w] > max){
            max = counts[w];
            theMostFreqWord = message[i];
       }
    }
    return theMostFreqWord;
};

//console.log(messageWords(message))
console.log(`The most frequent word of the message is "${theMostFrequentWord(message)}"`)
console.log(`The number of words in the message is ${messageWords(message).length}`)


// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

let num=Math.floor(Math.random()*randomPhrasesAndPictures.length);
if(num==0){
    document.getElementById("phrase").innerHTML = `A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey`;
    document.getElementById("picture").src = "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE";
}else if (num==1){
    document.getElementById("phrase").innerHTML = `We must all face the choice between what is right and what is easy. (c) Albus Dumbledore`;
    document.getElementById("picture").src="https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg";
}else {
    document.getElementById("phrase").innerHTML = `You are a wizard, Harry (c) Hagrid`; 
    document.getElementById("picture").src="https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg";
}

}
exchange.addEventListener('click', answer);