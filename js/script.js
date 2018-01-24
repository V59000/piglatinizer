/*global $*/
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
$("#btn").click(function(){
	var x = $("#info").val();
	var newWord = sentenceToPigLatin(x);
	$("#result").text(newWord);
});

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin (word){
    return word + "ay";
}

// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
function sentenceToPigLatin (sentence){
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++ ){
    //newArray.push(wordToPigLatin(words[i]));
    var word = words[i];
    var newArray = wordToPigLatin(word);
    words[i] = newArray;
    }
   
    return newArray;
}
