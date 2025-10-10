const quoteElement = document.getElementById("quote");

const quoteList = [
  "You have power over your mind—not outside events. Realize this, and you will find strength. – Marcus Aurelius",
  "We suffer more often in imagination than in reality. – Seneca",
  "He who fears death will never do anything worthy of a living man. – Seneca",
  "Waste no more time arguing about what a good man should be. Be one. – Marcus Aurelius",
  "If it is not right, do not do it. If it is not true, do not say it. – Marcus Aurelius",
  "The happiness of your life depends upon the quality of your thoughts. – Marcus Aurelius",
  "It is not things that disturb us, but our opinions about things. – Epictetus",
  "Dwell on the beauty of life. Watch the stars, and see yourself running with them. – Marcus Aurelius",
  "No man is free who is not master of himself. – Epictetus",
  "The best revenge is not to be like your enemy. – Marcus Aurelius",
  "Luck is what happens when preparation meets opportunity. – Seneca",
  "First say to yourself what you would be; and then do what you have to do. – Epictetus",
  "Don’t explain your philosophy. Embody it. – Epictetus",
  "Wealth consists not in having great possessions, but in having few wants. – Epictetus",
  "Sometimes even to live is an act of courage. – Seneca",
];

const usedIdx = new Set();
function generateQuote() {
  if (usedIdx.size === quoteList.length) {
    usedIdx.clear();
  }
  let randomIdx;
  do {
    randomIdx = Math.floor(Math.random() * quoteList.length);
  } while (usedIdx.has(randomIdx));
  console.log(`Your Random index is ${randomIdx}`);
  usedIdx.add(randomIdx);
  console.log(usedIdx);
  const quote = quoteList[randomIdx];
  quoteElement.innerHTML = quote;
}
