import ScoreBoard from "./ScoreBoard";

const Header = function ({ score }) {
  return (
    <>
      <div className="header">
        <h1 className="title">Candy Crush</h1>
        <ScoreBoard score={score} className="score-display" />
      </div>
    </>
  );
};

export default Header;
