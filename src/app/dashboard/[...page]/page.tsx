// page for catch-all-segment
const page = ({ params }: any) => {
  console.log(params.page);

  return (
    <div>
      <h1>Welcome to page: {params.page[params.page.length - 1]}</h1>
    </div>
  );
};

export default page;
