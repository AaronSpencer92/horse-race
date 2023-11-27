import "./Game.css";
import Lane from "./Lane";
import { Dice, ColorDice } from "./Dice";
import { useState, useEffect } from "react";

function Game() {

  const initialHorseData = [
  {
    number: 2,
    slots: 8,
    currentSlot: 4,
  },
  {
    number: 3,
    slots: 9,
    currentSlot: 4,
  },
  {
    number: 4,
    slots: 10,
    currentSlot: 4,
  },
  {
    number: 5,
    slots: 11,
    currentSlot: 4,
  },
  {
    number: 6,
    slots: 12,
    currentSlot: 4,
  },
  {
    number: 7,
    slots: 13,
    currentSlot: 4,
  },
  {
    number: 8,
    slots: 12,
    currentSlot: 4,
  },
  {
    number: 9,
    slots: 11,
    currentSlot: 4,
  },
  {
    number: 10,
    slots: 10,
    currentSlot: 4,
  },
  {
    number: 11,
    slots: 9,
    currentSlot: 4,
  },
  {
    number: 12,
    slots: 8,
    currentSlot: 4,
  },
];

const gameStates = {ROLL_FOR_MODE: 'Roll For Mode', FORWARD: 'Forward', BACKWARD: 'Backward', GATE_LOTTO: 'Gate Lotto'};
const colors = {BLUE: 'blue', PURPLE: 'purple', CYAN: 'cyan', GREEN: 'green', RED: 'red', PINK: 'pink', ORANGE: 'orange', YELLOW: 'yellow'}

const initialDiceState = [6,6];
const initialColorDiceState = {color: colors.YELLOW, number: 6};

  const [dice, setDice] = useState(initialDiceState);
  const [colorDiceState, setColorDiceState] = useState(initialColorDiceState);
  const [horseData, setHorseData] = useState(initialHorseData);
  const [gameState, setGameState] = useState(gameStates.ROLL_FOR_MODE);

  function roll() {
    const newRoll = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDice(newRoll);
    const diceTotal = newRoll.reduce((sum, acc) => sum += acc);
    const rolledHorseIndex = horseData.findIndex(horse => horse.number === diceTotal);
    horseData[rolledHorseIndex].currentSlot += 1;

  }

  function colorRoll() {
    const colorList = Object.values(colors);
    const newColorIndex = Math.floor(Math.random() * colorList.length);
    const newColor = colorList[newColorIndex];
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setColorDiceState({color: newColor, number: newNumber})

  }

  function Lanes() {
    return horseData.map((horse) => {
      return (
        <div key={horse.number} className="lane">
          <Lane numberOfSlots={horse.slots} currentSlot={horse.currentSlot} />
        </div>
      );
    });
  }

  function NumberDice() {
    console.log(colorDiceState);
    return (<div className="dice-section" onClick={roll}>
          <Dice className="die" draw={dice[0]} />
          <Dice className="die" draw={dice[1]} />
        </div>)
  }

  function GameModeDice() {
    return (<div className="dice-section" onClick={colorRoll}>
          <ColorDice className="die" draw={colorDiceState.color} />
          <Dice className="die" draw={colorDiceState.number} />
        </div>)
  }

  return (
    <>
      <div className="section">
        <div className="flex-div">
          <Lanes />
        </div>
        <GameModeDice />
        
      </div>
    </>
  );
}

export default Game;
