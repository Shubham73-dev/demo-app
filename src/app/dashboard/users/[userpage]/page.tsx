// page for dynamic-routing
const User = ({ params }: any) => {
  const decodeName = decodeURI(params.userpage);
  const decodeNameURI = decodeURI(params.userpage);

  return <div>This is user: {decodeName}</div>;
};

export default User;
