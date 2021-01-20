import { v4 } from 'uuid';

export const DATA_COLUMNS = {
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

export const MODALS = {
    'vocation': {
        name: 'Vocation',
        body1: 'This intersection represents your vocation.',
        body2: 'What are some steps can you take to enjoy your vocation more?',
        top: '367px',
        left: '214px',
        items: []
    },
    'profession': {
        name: 'Profession',
        body1: 'This intersection represents your profession.',
        body2: 'In your profession, how can you help the people and community around you?',
        top: '367px',
        left: '539px',
        items: []
    },
    'mission': {
        name: 'Mission',
        body1: 'This intersection represents your mission.',
        body2: 'What are some steps you can take to hone your craft?',
        top: '456px',
        left: '214px',
        items: []
    },
    'passion': {
        name: 'Passion',
        body1: 'This intersection represents your passion.',
        body2: 'Are you able to turn your passion into something you can be paid for?',
        top: '456px',
        left: '535px',
        items: []
    }
}

export const CIRCLEDATA2 = {
    [v4()]: {
        id: 'r1',
        name: 'what you can be PAID FOR',
        items: [],
        top: '118px',
        left: '254px',
        width: '283px',
        maxWidth: '283px',
        height: '82px',
    },
    [v4()]: {
        id: 'r2',
        name: 'what the WORLD NEEDS',
        items: [],
        top: '292px',
        left: '48px',
        width: '130px',
        maxWidth: '150px',
        height: '258px'
    },
    [v4()]: {
        id: 'r3',
        name: 'what you LOVE',
        items: [],
        top: '642px',
        left: '259px',
        width: '271px',
        maxWidth: '283px',
        height: '89px'
    },
    [v4()]: {
        id: 'r4',
        name: 'what you are GOOD AT',
        items: [],
        top: '291px',
        left: '616px',
        width: '120px',
        maxWidth: '150px',
        height: '261px'
    },
    [v4()]: {
        id: 'r5',
        name: '', // blue yellow
        items: [],
        top: '223px',
        left: '199px',
        width: '128px',
        maxWidth: '150px',
        height: '134px'
    },
    [v4()]: {
        id: 'r6',
        name: '', // green blue
        items: [],
        top: '490px',
        left: '198px',
        width: '129px',
        maxWidth: '150px',
        height: '130px'
    },
    [v4()]: {
        id: 'r7',
        name: '', // green red
        items: [],
        top: '497px',
        left: '461px',
        width: '134px',
        maxWidth: '150px',
        height: '128px'
    },
    [v4()]: {
        id: 'r8',
        name: '', // center
        items: [],
        top: '362px',
        left: '325px',
        width: '119px',
        maxWidth: '150px',
        height: '125px'
    },
    [v4()]: {
        id: 'r9',
        name: '', // red yellow
        items: [],
        top: '230px',
        left: '460px',
        width: '132px',
        maxWidth: '150px',
        height: '127px'
    },
    [v4()]: {
        id: 'r10',
        name: '', // red yellow blue
        items: [],
        top: '257px',
        left: '336px',
        width: '115px',
        height: '89px',
        maxWidth: '125px',
    },

    [v4()]: {
        id: 'r11',
        name: '', // red blue green
        items: [],
        top: '503px',
        left: '339px',
        width: '109px',
        maxWidth: '115px',
        height: '84px',
    },

    [v4()]: {
        id: 'r12',
        name: '', // yellow blue green
        items: [],
        top: '368px',
        left: '227px',
        width: '85px',
        maxWidth: '100px',
        height: '112px',
    },

    [v4()]: {
        id: 'r13',
        name: '', // yellow green red
        items: [],
        top: '370px',
        left: '470px',
        width: '78px',
        maxWidth: '150px',
        height: '111px',
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