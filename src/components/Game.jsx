import './Game.css';
import Lane from './Lane';
import { Dice, ColorDice } from './Dice';
import { useState, useEffect } from 'react';

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

  const gameStates = {
    ROLL_FOR_MODE: 'Roll For Mode',
    FORWARD: 'Forward',
    BACKWARD: 'Backward',
    GATE_LOTTO: 'Gate Lotto',
    SLOPPY_SECONDS: 'Sloppy Seconds',
  };
  const colors = {
    BLUE: 'blue',
    PURPLE: 'purple',
    CYAN: 'cyan',
    GREEN: 'green',
    RED: 'red',
    PINK: 'pink',
    ORANGE: 'orange',
    YELLOW: 'yellow',
  };
  const FORWARD_COLORS = [
    colors.BLUE,
    colors.PURPLE,
    colors.CYAN,
    colors.ORANGE,
  ];
  const BACWARD_COLORS = [colors.GREEN, colors.RED, colors.PINK];
  const GATE_LOTTO_COLORS = [colors.YELLOW];

  const initialDiceState = [6, 6];
  const initialColorDiceState = { color: colors.YELLOW, number: 6 };

  const [dice, setDice] = useState(initialDiceState);
  const [singleDie, setSingleDie] = useState(6);
  const [colorDiceState, setColorDiceState] = useState(initialColorDiceState);
  const [horseData, setHorseData] = useState(initialHorseData);
  const [gameState, setGameState] = useState(gameStates.ROLL_FOR_MODE);
  const [remainingRolls, setRemainingRolls] = useState(0);
  const [lottoHorseIndex, setLottoHorseIndex] = useState(null);
  const [sloppySecondsValue, setSloppySecondsValue] = useState(null);

  function roll() {
    const newRoll = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDice(newRoll);
    const diceTotal = newRoll.reduce((sum, acc) => (sum += acc));
    const rolledHorseIndex = horseData.findIndex(
      (horse) => horse.number === diceTotal
    );
    if (gameState === gameStates.GATE_LOTTO) {
      setLottoHorseIndex(rolledHorseIndex);
      return;
    }
    if (gameState === gameStates.SLOPPY_SECONDS) {
      horseData[rolledHorseIndex].currentSlot += sloppySecondsValue;
      setSloppySecondsValue(null);
      return;
    }
    if (gameState === gameStates.FORWARD) {
      horseData[rolledHorseIndex].currentSlot += 1;
    } else if (gameState === gameStates.BACKWARD) {
      horseData[rolledHorseIndex].currentSlot -= 1;
    }
    const currentRemainingRolls = remainingRolls;
    setRemainingRolls(remainingRolls - 1);
    if (currentRemainingRolls <= 1) {
      setGameState(gameStates.ROLL_FOR_MODE);
    }
  }

  function colorRoll() {
    const colorList = Object.values(colors);
    const newColorIndex = Math.floor(Math.random() * colorList.length);
    const newColor = colorList[newColorIndex];
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setColorDiceState({ color: newColor, number: newNumber });

    setRemainingRolls(newNumber);
    if (FORWARD_COLORS.includes(newColor)) {
      setGameState(gameStates.FORWARD);
    } else if (BACWARD_COLORS.includes(newColor)) {
      setGameState(gameStates.BACKWARD);
    } else if (GATE_LOTTO_COLORS.includes(newColor)) {
      setGameState(gameStates.GATE_LOTTO);
    }
  }

  function singleRoll() {
    if (gameState === gameStates.GATE_LOTTO && lottoHorseIndex) {
      const numberChosen = 4;
      const newNumber = Math.floor(Math.random() * 6) + 1;
      console.log(numberChosen);
      console.log(newNumber);
      console.log(lottoHorseIndex);
      setSingleDie(newNumber);
      if (numberChosen === newNumber) {
        horseData[lottoHorseIndex].currentSlot =
          horseData[lottoHorseIndex].slots - 1;
      } else {
        const difference = Math.round(Math.abs(numberChosen - newNumber));
        console.log(difference);
        horseData[lottoHorseIndex].currentSlot =
          horseData[lottoHorseIndex].currentSlot - difference;
        setGameState(gameStates.SLOPPY_SECONDS);
        setSloppySecondsValue(Math.round(difference / 2));
      }
      setLottoHorseIndex(null);
    }
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
    return (
      <div onClick={roll}>
        <Dice className="die" draw={dice[0]} />
        <Dice className="die" draw={dice[1]} />
      </div>
    );
  }

  function GameModeDice() {
    return (
      <div onClick={colorRoll}>
        <ColorDice className="die" draw={colorDiceState.color} />
        <Dice className="die" draw={colorDiceState.number} />
      </div>
    );
  }

  function SingleDie() {
    return (
      <div onClick={singleRoll}>
        <Dice className="die" draw={singleDie} />
      </div>
    );
  }

  return (
    <>
      <div className="section">
        <div className="flex-div">
          <Lanes />
        </div>
        <div className="dice-section">
          <GameModeDice />
          <NumberDice />
          <SingleDie />
          <span>{gameState}</span>
          <span>Remaining Rolls: {remainingRolls} </span>
        </div>
      </div>
    </>
  );
}

export default Game;
