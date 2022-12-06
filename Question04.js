//4. Check if the string contains a word Script using includes() method.

let sampleString = 'Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.';

const word = 'development';

console.log(`Does the string contain the word : ${word} ? ${sampleString.includes(word) ? 'Yes' : 'No'}`);
