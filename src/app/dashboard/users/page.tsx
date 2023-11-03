import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      {data.map((item: any) => (
        <Link href={`/dashboard/users/${item.name}`} key={item.id}>
          <li>{item.name}</li>
        </Link>
      ))}
    </main>
  );
}

// import Link from "next/link";

// export default function Page({ data }: any) {
//   return (
//     <main>
//       {data.map((item: any) => (
//         <Link href={`/dashboard/users/${item.name}`} key={item.id}>
//           <li>{item.name}</li>
//         </Link>
//       ))}
//     </main>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return {
//     props: { data },
//   };
// }
