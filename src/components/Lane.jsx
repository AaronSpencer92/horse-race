import './Lane.css';
import dot from '../assets/dot.png';
import horse from '../assets/horse2.png';
import PropTypes from 'prop-types';
function Lane(props) {
  const horseSlot = 4;
  const { numberOfSlots } = props;
  function Slots() {
    const slots = [];
    for (let i = 0; i < 13; i++) {
      if (i >= numberOfSlots) {
        slots.push(<div />);
      } else if (i === horseSlot) {
        slots.push(
          <div className="empty-slot">
            <img src={horse} className="horse" />
          </div>
        );
      } else {
        slots.push(
          <div className="empty-slot">
            <img src={dot} className="dot" />
          </div>
        );
      }
    }
    return slots.reverse();
  }

  return (
    <>
      <div className="slots">
        <Slots />
      </div>
    </>
  );
}

Lane.propTypes = {
  numberOfSlots: PropTypes.number,
};

export default Lane;
