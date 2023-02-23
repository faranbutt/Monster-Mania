const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div
      key={id}
      className="m-4 p-4 justify-center text-center card-container flex flex-col bg-green-400 border-2 border-gray-600 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
    >
      <img
        src={`https://robohash.org/${id}/?set=set2`}
        alt={`monster ${name}`}
        width={180}
        height={180}
      />
      <h2 className="flex text text-3xl font-bold p-3">{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
