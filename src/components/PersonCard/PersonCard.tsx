import React from 'react';
import './PersonCard.scss'
import Link from 'next/link';

interface Person {
    id: string;
    name: string;
    photo: string;
    description: string;
}

const PersonCard = ({ person }: { person: Person }) => {
    return (
        <Link href={`/${person.id}`}>
            <div className="p-4 border rounded-lg hover:shadow-lg cursor-pointer">
                <img
                    src={person.photo}
                    alt={person.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold">{person.name}</h3>
            </div>
        </Link>
    );
};

export default PersonCard;
