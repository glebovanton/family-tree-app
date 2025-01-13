import React from 'react';
import './FamilyTree.scss';
import { familyData } from '@/data/familyData';
import PersonCard from '@/components/PersonCard';

const FamilyTree = () => {
    // Recursive rendering of the tree structure
    const renderTree = (personId: string) => {
        const person = familyData.find((p) => p.id === personId);

        if (!person) return null;

        return (
            <div className="tree-node flex flex-col items-center">
                {/* Render current person */}
                <PersonCard person={person} />
                {/* Render children recursively */}
                {person.children && person.children.length > 0 && (
                    <div className="children flex flex-wrap justify-center gap-4 mt-4">
                        {person.children.map((childId) => {
                            const childPerson = familyData.find((p) => p.id === childId);
                            if (!childPerson) return null;

                            return (
                                <div key={childPerson.id} className="child">
                                    {renderTree(childPerson.id)}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="family-tree-container p-4 bg-gray-50 rounded-lg shadow-lg">
            {/* Start from the root node */}
            {renderTree('1')}
        </div>
    );
};

export default FamilyTree;
