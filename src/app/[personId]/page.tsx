// Import necessary functions and components
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { familyData } from "@/data/familyData";

type PersonPageProps = {
    params: Promise<{ personId: string }>;
};

// The page component for individual person details
export default async function PersonPage({ params }: PersonPageProps) {
    // Await the params and destructure personId
    const { personId } = await params;

    // Find the person object by personId from the familyData
    const person = familyData.find((p) => p.id === personId);

    // If the person is not found, trigger the 404 page
    if (!person) {
        notFound();
    }

    // Render the person's details
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <img
                    src={`/images/${person.photo[0]}`} // Assuming the photos are in the public/images folder
                    alt={person.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover"
                />
                <h1 className="text-2xl font-bold text-center mt-4">{person.name}</h1>
                <p className="mt-4 text-gray-700">{person.description}</p>
                <Link href="/" passHref>
                    <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Назад
                    </button>
                </Link>
            </div>
        </div>
    );
}
