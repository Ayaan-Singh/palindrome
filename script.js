function palindrome(myString) {
    var input = myString.replace(/[^A-Z0-9]/ig,"").toLowerCase()
    var reversedinput = input.split('').reverse().join('');
    
if (input === reversedinput) {                  
   
    document.write(  myString + " is a palindrome")
}
else { document.write (myString + " is  not a palindrome") }  }
palindrome ("madam") 