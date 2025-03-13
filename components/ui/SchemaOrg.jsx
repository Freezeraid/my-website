'use client'

export default function SchemaOrg({ schemas }) {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
  
  return (
    <>
      {schemaArray.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
