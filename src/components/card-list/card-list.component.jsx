import Card from "../Card/card.component";
const CardList = ({ monster }) => {
  return (
    <div className="w-2/3 grid grid-cols-4 gap-5 mt-0 mx-auto">
      {monster.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
