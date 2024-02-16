// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Easy.css'; 
import { Link } from 'react-router-dom'; 


const Easy = () => {
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(0);
  const attemptsLeft = 10;
  const [hint, setHint] = useState('');
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (attempts >= attemptsLeft) {
      handleGameOver(false); 
    }
  }, [attempts]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function giveHint() {
    const hintLow = Math.floor(numberToGuess * 0.7);
    const hintHigh = Math.ceil(numberToGuess * 1.3);
    setHint(`คำใบ้ : คำตอบอยู่ระหว่างตัวเลข${hintLow} และ ${hintHigh}.`);
    if (hintLow === hintHigh) {
      setHint(`Hint: The number is ${hintLow}.`);
    }
  }

  function guessNumber() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }
    setAttempts(attempts + 1);
    if (userGuess === numberToGuess) {
      handleGameOver(true); 
    } else {
      const result = userGuess < numberToGuess ? "Too low! ลองทายใหม่สิ" : "Too high! ลองทายใหม่สิ";
      setResult(result);
    }
    document.getElementById("guessInput").value = "";
  }

  function handleGameOver(isWin) {
    const message = isWin ? "แม่เจ้าโว๊ย ชนะ!!!" : "ขี้แพ้จังอ่ะ!!!";
    // eslint-disable-next-line no-unused-vars
    const homePage = "/Home";
    // eslint-disable-next-line no-unused-vars
    const playAgainPage = isWin ? "/Easy" : "/Normal";
    setResult(message);
    setGameOver(true);
  }

  function resetGame() {
    setNumberToGuess(generateRandomNumber());
    setAttempts(0);
    setHint('');
    setResult('');
    setGameOver(false);
  }

  return (
    <div className="ScreenEs">
      <div className="Headers">
        <div className="BackHome">
          <Link to="/Home">
            <button id="Back">Home</button>
          </Link>
        </div>
        <div className="Game">
          <button id="Reset" onClick={resetGame}>Reset</button>
        </div>
      </div>
      <div className="mainFeats">
        <div className="HintS">
          <button onClick={giveHint}>คำใบ้</button>
        </div>
        <div>
          <p>{hint}</p>
        </div>
        <div className="inputS">
          <input type="number" id="guessInput" min="1" max="100"/>
        </div>
        <div className = "RuN">
          <button className="large-button" onClick={guessNumber}>ทาย</button>
        </div>
        <div className="resultS">
          <p>{result}</p>
        </div>
        <div className="attempts">
          <p>Attempts Left: <span>{attemptsLeft - attempts}</span></p>
        </div>
      </div>
      {gameOver && (
        <div id="gameOverModal" className="MainPOP">
          <div className="Pop">
            <h1>{result}</h1>
            <div className="buttonPop">
              <Link to="/home" className="buttonPop-button1">
                <button className="buttonPop-btnText">Home</button>
              </Link>
              <Link to="/easy" className="buttonPop-button2">
                <button className="buttonPop-btnText" onClick={(e) => {e.preventDefault();window.location.reload();}}>Again</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Easy;
