function BinBar({ percentage }) {
  return (
    <div className="mb-3">
      <div className="font-bold ">{percentage}%</div>
      <div className="bg-slate-700 h-5">
        <div
          className={`bg-blue-500 h-5`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BinBar;
