"use client";

const student = ({ params }: any) => {
  const decodedURI = decodeURI(params.student);

  return (
    <>
      <h1>Student details</h1>
      <h3>Name: {decodedURI}</h3>
    </>
  );
};

export default student;
