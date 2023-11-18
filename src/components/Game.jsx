import './Game.css';
import Lane from './Lane';

function Game() {
  return (
    <>
      <div className="lane">
        <Lane numberOfSlots={8} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={9} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={10} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={11} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={12} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={13} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={12} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={11} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={10} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={9} />
      </div>
      <div className="lane">
        <Lane numberOfSlots={8} />
      </div>
    </>
  );
}

export default Game;
