import { v4 } from 'uuid';

export const RECTANGLE_DATA = {
    [v4()]: {
        id: "c1",
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
        id: "c2",
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
        id: "c3",
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
        id: "c4",
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        color: "#FFFCCC",
        headingColor: "#E5C908",
        items: [],
        hover1: "Stuck? Try these questions:",
        hover2: "Lately, have you been paid for what you do? Have you ever been paid for what you do? If not, are other people being paid for this work?",
        hover3: "Are you already making a good living doing what it is that you’re doing? Can you eventually make a good living doing this work? Are there other people who can do what you do, but better?"
    },
};

export const MODAL_DATA = {
    'vocation': {
        name: 'Vocation',
        body1: 'This intersection represents your vocation.',
        body2: 'What are some steps can you take to enjoy your vocation more?',
        top: '45.9%',
        left: '26.8%',
        items: []
    },
    'profession': {
        name: 'Profession',
        body1: 'This intersection represents your profession.',
        body2: 'In your profession, how can you help the people and community around you?',
        top: '45.9%',
        left: '67.4%',
        items: []
    },
    'mission': {
        name: 'Mission',
        body1: 'This intersection represents your mission.',
        body2: 'What are some steps you can take to hone your craft?',
        top: '57%',
        left: '26.8%',
        items: []
    },
    'passion': {
        name: 'Passion',
        body1: 'This intersection represents your passion.',
        body2: 'Are you able to turn your passion into something you can be paid for?',
        top: '57%',
        left: '66.9%',
        items: []
    },
    'enjoyable': {
        body1: 'If you have an activity in this section, you will be comfortable, but you might feel empty.',
        body2: 'How can you make what you do more enjoyable?',
        top: '33.3%',
        left: '47.1%',
        items: []
    },
    'help': {
        body1: 'If you have an activity in this section, you will be satisfied, but you might feel useless.',
        body2: 'How can you help the world with what you do?',
        top: '51.3%',
        left: '64.9%',
        items: []
    },
    'monetize': {
        body1: 'If you have an activity in this section, you will be fulfilled, but you will not have wealth.',
        body2: 'Are you able to monetize this?',
        top: '68.4%',
        left: '46.8%',
        items: []
    },
    'skillset': {
        body1: 'If you have an activity in this section, you will be motivated, but you might feel uncertain about your skills.',
        body2: 'How can you improve your skillset?',
        top: '51.1%',
        left: '29%',
        items: []
    }
}

export const CIRCLE_DATA = {
    // Default parent container dimensions should be 800x800
    [v4()]: {
        id: 'r1',
        name: 'what you can be PAID FOR',
        items: [],
        top: '15%',
        left: '32%',
        width: '35%',
        maxWidth: '35%',
        height: '10%',
    },
    [v4()]: {
        id: 'r2',
        name: 'what the WORLD NEEDS',
        items: [],
        top: '36.5%',
        left: '6%',
        width: '16.2%',
        maxWidth: '18.8%',
        height: '32.3%'
    },
    [v4()]: {
        id: 'r3',
        name: 'what you LOVE',
        items: [],
        top: '80.3%',
        left: '32.3%',
        width: '33.9%',
        maxWidth: '35%',
        height: '11.1%'
    },
    [v4()]: {
        id: 'r4',
        name: 'what you are GOOD AT',
        items: [],
        top: '36.4%',
        left: '77%',
        width: '15%',
        maxWidth: '18.8%',
        height: '32.6%'
    },
    [v4()]: {
        id: 'r5',
        name: '', // blue yellow
        items: [],
        top: '27.9%',
        left: '24.9%',
        width: '16%',
        maxWidth: '18.8%',
        height: '16.8%'
    },
    [v4()]: {
        id: 'r6',
        name: '', // green blue
        items: [],
        top: '61.3%',
        left: '24.8%',
        width: '16.1%',
        maxWidth: '18.8%',
        height: '16.3%'
    },
    [v4()]: {
        id: 'r7',
        name: '', // green red
        items: [],
        top: '62.1%',
        left: '57.6%',
        width: '16.8%',
        maxWidth: '18.8%',
        height: '16%'
    },
    [v4()]: {
        id: 'r8',
        name: '', // center
        items: [],
        top: '45.3%',
        left: '40.6%',
        width: '14.9%',
        maxWidth: '18.8%',
        height: '15.6%'
    },
    [v4()]: {
        id: 'r9',
        name: '', // red yellow
        items: [],
        top: '28.8%',
        left: '57.5%',
        width: '16.5%',
        maxWidth: '18.8%',
        height: '15.9%'
    },
    [v4()]: {
        id: 'r10',
        name: '', // red yellow blue
        items: [],
        top: '32.1%',
        left: '42%',
        width: '14.4%',
        height: '11.1%',
        maxWidth: '15.6%',
    },

    [v4()]: {
        id: 'r11',
        name: '', // red blue green
        items: [],
        top: '62.9%',
        left: '42.4%',
        width: '13.6%',
        maxWidth: '14.4%',
        height: '10.5%',
    },

    [v4()]: {
        id: 'r12',
        name: '', // yellow blue green
        items: [],
        top: '46%',
        left: '28.4%',
        width: '10.6%',
        maxWidth: '12.5%',
        height: '14%',
    },

    [v4()]: {
        id: 'r13',
        name: '', // yellow green red
        items: [],
        top: '46.3%',
        left: '58.8%',
        width: '9.8%',
        maxWidth: '18.8%',
        height: '13.9%',
    },

    'add': {
        id: 'r14',
        name: '', // add activity
        items: [],
        top: '',
        left: '',
        width: '',
        height: ''
    },
};