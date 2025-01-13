// src/app/page.tsx
'use client';

import FamilyTree from '@/components/FamilyTree';

export default function HomePage() {
  return (
      <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Family Tree</h1>
          <FamilyTree />
      </div>
  );
}
