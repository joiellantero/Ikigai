import React, { useState, createContext } from 'react';

export const RecContext = createContext();

export const RecProvider = props => {
    const [columns, setColumn] = useState({
        [v4()]: {
            heading1: "What the world",
            heading2: "NEEDS",
            color: "#E1E5FF",
            headingColor: "#283972",
            items: [],
            hover1: "Stuck? Try these questions:",
            hover2: "Are you helping to solve an actual problem?",
            hover3: "Is what you’re doing bringing beauty or utility to others, helping out, and shaping the world around you?"
        },
        [v4()]: {
            heading1: "What you",
            heading2: "LOVE",
            color: "#CCFFF0",
            headingColor: "#009F6F",
            items: [],
            hover1: "Stuck? Try these questions:",
            hover2: "What are some activities truly enjoy doing about? Is there an activity or cause you enthusiastically talk about for hours on end?",
            hover3: "If you weren’t concerned about money, what would you be doing?"
        },
        [v4()]: {
            heading1: "What you are",
            heading2: "GOOD AT",
            color: "#FFE4E4",
            headingColor: "#FF5B5B",
            items: [],
            hover1: "Stuck? Try these questions:",
            hover2: "Is there an activity that your friends/family/community have sought your advice/opinion on before?",
            hover3: "Are you among the best in your workplace/community at this? With some more education and experience, could you master what you do?"
        },
        [v4()]: {
            heading1: "What You Can Be",
            heading2: "PAID FOR",
            color: "#FFFCCC",
            headingColor: "#E5C908",
            items: [],
            hover1: "Stuck? Try these questions:",
            hover2: "Lately, have you been paid for what you do? Have you ever been paid for what you do? If not, are other people being paid for this work?",
            hover3: "Are you already making a good living doing what it is that you’re doing? Can you eventually make a good living doing this work? Are there other people who can do what you do, but better?"
        },
    });
    return (
        <RecContext.Provider>
            {props.children}
        </RecContext.Provider>
    );
}