const Stats = ({items}) => {
    if(items.length === 0 ) return <footer className="stats">Start adding some items to your packing list</footer>
    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(((packedItems/numItems) * 100));
    return (
      <footer className="stats">
        <em>
          {percentage === 100 ? "You got everything! Ready to go ✈️" : `💼 you have ${numItems} items on your list , and you have already packed ${packedItems} (${percentage}%)`}
        </em>
      </footer>
    );
  };

export default Stats;