export default function quotes() {
    const quoteData = [
    {
        id: 1,
        quotation: "An investment in knowledge pays the best interest.",
        author: "Benjamin Franklin",
        img: ""
    },
    {
        id: 2,
        quotation: "Bottoms in the investment world don't end with four-year lows; they end with 10- or 15-year lows.",
        author: "Jim Rogers",
        img: ""
    },
    {
        id: 3,
        quotation: "Be fearful when others are greedy. Be greedy when others are fearful.",
        author: "Warren Buffett",
        img: ""
    },
    {
        id: 4,
        quotation: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.",
        author: "George Soros",
        img: ""
    },
    {
        id: 5,
        quotation: "Given a 10% chance of a 100 times payoff, you should take that bet every time.",
        author: "Jeff Bezos",
        img: ""
    },
    {
        id: 6,
        quotation: "Don't look for the needle in the haystack. Just buy the haystack!",
        author: "John Bogle",
        img: ""
    },
    {
        id: 7,
        quotation: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
        author: "Phillip Fisher",
        img: ""
    },
    {
        id: 8,
        quotation: "How many millionaires do you know who have become wealthy by investing in savings accounts?",
        author: "Robert G. Allen",
        img: ""
    },
    {
        id: 9,
        quotation: "Courage taught me no matter how bad a crisis gets ... any sound investment will eventually pay off.",
        author: "Carlos Slim Helu",
        img: ""
    },
    {
        id: 10,
        quotation: "The individual investor should act consistently as an investor and not as a speculator.",
        author: "Ben Graham",
        img: ""
    }

]

return quoteData[Math.floor(Math.random() * quoteData.length)]

}

/*
,
    {
        id: ---,
        quotation: "",
        author: "",
        img: ""
    }
*/