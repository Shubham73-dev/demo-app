import Link from "next/link";

const studentlist = async () => {
  //   const subURL = "subparams";
  //   const demo = `/studentlist/${subURL}`;
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <>
      <h1>Students:</h1>

      <ul>
        {users.map((item: any) => (
          <li>
            <Link href={`/studentlist/${item.name}${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default studentlist;
