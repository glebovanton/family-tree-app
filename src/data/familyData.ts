type Person = {
    id: string;
    name: string;
    photo: string;
    description: string;
    children: string[];
}

export const familyData: Person[] = [
    {
        id: '1',
        name: 'Иван Иванов',
        photo: '/images/ivan.jpg',
        description: 'Родился в 1950 году, увлекается рыбалкой.',
        children: ['2', '3'],
    },
    {
        id: '2',
        name: 'Мария Иванова',
        photo: '/images/maria.jpg',
        description: 'Родилась в 1980 году, любит готовить.',
        children: [],
    },
    {
        id: '3',
        name: 'Алексей Иванов',
        photo: '/images/alexey.jpg',
        description: 'Родился в 1985 году, работает программистом.',
        children: [],
    },
];
