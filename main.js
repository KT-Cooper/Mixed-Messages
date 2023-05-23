// GLOBAL VARIABLES
const topicOne = 'Dad Jokes';
const topicTwo = 'Tongue Twisters';
const topicThree = 'Shakespeare Quotes';
let currentTopic = '';
let currentTopicList = '';

// PICK RANDOM QUOTE
function GenerateQuote(topicSelection) {
    const quoteNumber = Math.floor(Math.random()* 10) - 1;
    console.log(currentTopicList[quoteNumber]);
}

// RUNTIME
console.log("Welcome to Mixed Messages!");
console.log("What kind of message would you be interested in today?");
console.log(`1. ${topicOne}`);
console.log(`2. ${topicTwo}`);
console.log(`3. ${topicThree}`);
while (currentTopic === ''){
    const userTopic = prompt("Please enter number: ");//prompt is not defined
    if(userTopic === "1") {
        currentTopic = topicOne;
        currentTopicList = topicOneQuotes;
        console.log(`Show me some ${topicOne}!`);
    } else if (userTopic === "2") {
        currentTopic = topicTwo;
        currentTopicList = topicTwoQuotes;
        console.log(`I'd like to try some ${topicTwo}.`);
    } else if (userTopic === "3") {
        currentTopic = topicThree;
        currentTopicList = topicThreeQuotes;
        console.log(`I'm feeling like some ${topicThree} today.`);
    } else {
        console.log(`Invalid input!`);
    }
}
console.log(`How many ${currentTopic} would you like?`);
const userQuoteCount = prompt("Please enter number 1 - 10: ");//prompt is not defined
console.log(`Generating...`);
for(i = 0 ; i < userQuoteCount ; i++) {
    GenerateQuote(currentTopicList);
}
console.log(`Thank you for using Mixed Messages! Have a lovely day!`);


// TOPIC ONE QUOTES
 const topicOne1 = `Time flies like an arrow. Fruit flies like a banana.`;
 const topicOne2 = `I love dad jokes, but I don't have kids, which makes me a Faux Pa.`;
 const topicOne3 = `Your mom and I let astrology get between us. It just Taurus apart.`;
 const topicOne4 = `A guy walking into a bar, and lost the limbo contest.`;
 const topicOne5 = `Two peanuts went walking down the street. One was assaulted.`;
 const topicOne6 = `I had a dream that I weighed less than a thousandth of a gram. I was like, 0mg.`;
 const topicOne7 = `Every time I take my dog to the park, the ducks try to bite him. That's what I get for buying a pure bread dog.`;
 const topicOne8 = `Mom is mad at me because she asked me to sync her phone, so I threw it in the ocean.`;
 const topicOne9 = `I used to run a dating service for chickens, but I was struggling to make hens meet.`;
 const topicOne10 = `Justice is a dish best served cold. If it were served warm, it would be justwater.`;
 // SET QUOTES IN ARRAY
 const topicOneQuotes = [topicOne1, topicOne2, topicOne3, topicOne4, topicOne5, topicOne6, topicOne7, topicOne8, topicOne9, topicOne10];

// TOPIC TWO QUOTES
 const topicTwo1 = `Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzy wasn't fuzzy, was he?`;
 const topicTwo2 = `Betty Botter bought some butter but she said, "The butter's bitter. If I put it in my batter, it will make my batter bitter, but a bit of better butter will make my batter better." So 'twas better Betty Botter bought a bit of better butter.`;
 const topicTwo3 = `She sells seashells by the seashore.`;
 const topicTwo4 = `I've got a date at a quarter to eight; I'll see you at the gate, so don't be late.`;
 const topicTwo5 = `Eddie edited it.`;
 const topicTwo6 = `Nine nice night nurses nursing nicely.`;
 const topicTwo7 = `Fred fed Ted bread, and Ted fed Fred bread.`;
 const topicTwo8 = `A skunk sat on a stump and thunk the stump stunk, but the stump thunk the skunk stunk.`;
 const topicTwo9 = `Lesser leather never weathered wetter weather better.`;
 const topicTwo10 = `Peter Pipper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?`;
 // SET QUOTES IN ARRAY
 const topicTwoQuotes = [topicTwo1, topicTwo2, topicTwo3, topicTwo4, topicTwo5, topicTwo6, topicTwo7, topicTwo8, topicTwo9, topicTwo10];

// TOPIC THREE QUOTES
 const topicThree1 = `Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.`;
 const topicThree2 = `Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.`;
 const topicThree3 = `Give every man thy ear, but few thy voice.`;
 const topicThree4 = `Small cheer and great welcome makes a merry feast.`;
 const topicThree5 = `Neither a borrower nor a lender be.`;
 const topicThree6 = `Tis not enough to help the feeble up, but to support them after.`;
 const topicThree7 = `Modest doubt is called the beacon of the wise.`;
 const topicThree8 = `With mirth and laughter let old wrinkles come.`;
 const topicThree9 = `For sweetest things turn sourest by their deeds; lillies that fester smell far worse than weeds.`;
 const topicThree10 = `My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for bother are infinite.`;
 // SET QUOTES IN ARRAY
 const topicThreeQuotes = [topicThree1, topicThree2, topicThree3, topicThree4, topicThree5, topicThree6, topicThree7, topicThree8, topicThree9, topicThree10];