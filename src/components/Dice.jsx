import "./Dice.css";
import PropTypes from "prop-types";
import die1 from '../../public/Die_face_1b.svg';
import die2 from '../../public/Die_face_2b.svg';
import die3 from '../../public/Die_face_3b.svg';
import die4 from '../../public/Die_face_4b.svg';
import die5 from '../../public/Die_face_5b.svg';
import die6 from '../../public/Die_face_6b.svg';
import dieBlue from '../../public/die_face_blue.png';
import diePurple from '../../public/die_face_purple.png';
import dieCyan from '../../public/die_face_cyan.png';
import dieGreen from '../../public/die_face_green.png';
import dieRed from '../../public/die_face_red.png';
import diePink from '../../public/die_face_pink.png';
import dieOrange from '../../public/die_face_orange.png';
import dieYellow from '../../public/die_face_yellow.png';

export function Dice(props) {
  if (props.draw === 1) {
    return <img src={die1} className="dice"/>;
  } else if (props.draw === 2) {
    return <img src={die2} className="dice" />;
  } else if (props.draw === 3) {
    return <img src={die3} className="dice" />;
  } else if (props.draw === 4) {
    return <img src={die4} className="dice" />;
  } else if (props.draw === 5) {
    return <img src={die5} className="dice" />;
  } else if (props.draw === 6) {
    return <img src={die6} className="dice" />;
  }
}

export function ColorDice(props) {
  if (props.draw === 'blue') {
    return <img src={dieBlue} className="dice"/>;
  } else if (props.draw === 'purple') {
    return <img src={diePurple} className="dice" />;
  } else if (props.draw === 'cyan') {
    return <img src={dieCyan} className="dice" />;
  } else if (props.draw === 'green') {
    return <img src={dieGreen} className="dice" />;
  } else if (props.draw === 'red') {
    return <img src={dieRed} className="dice" />;
  } else if (props.draw === 'pink') {
    return <img src={diePink} className="dice" />;
  } else if (props.draw === 'orange') {
    return <img src={dieOrange} className="dice" />;
  } else if (props.draw === 'yellow') {
    return <img src={dieYellow} className="dice" />;
  }
}

Dice.propTypes = {
  draw: PropTypes.number,
};

ColorDice.propTypes = {
  draw: PropTypes.string,
};
