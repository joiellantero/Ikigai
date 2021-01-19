import { v4 } from 'uuid';

export const MODALS = {
    ['vocation']: {
        name: 'Vocation',
        body1: 'This intersection represents your vocation.',
        body2: 'What are some steps can you take to enjoy your vocation more?',
        top: '378px',
        left: '227px',
        items: []
    },
    ['profession']: {
        name: 'Profession',
        body1: 'This intersection represents your profession.',
        body2: 'In your profession, how can you help the people and community around you?',
        top: '378px',
        left: '554px',
        items: []
    },
    ['mission']: {
        name: 'Mission',
        body1: 'This intersection represents your mission.',
        body2: 'What are some steps you can take to hone your craft?',
        top: '441px',
        left: '225px',
        items: []
    },
    ['passion']: {
        name: 'Passion',
        body1: 'This intersection represents your passion.',
        body2: 'Are you able to turn your passion into something you can be paid for?',
        top: '443px',
        left: '554px',
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
    'add': {
        id: 'r10',
        name: '', // add activity
        items: [],
        top: '',
        left: '',
        width: '',
        height: ''
    },
};