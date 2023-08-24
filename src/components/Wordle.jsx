import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    if(isCorrect){
        console.log('congrats you win')
        window.removeEventListener('keyup', handleKeyup)
      }
    
      if(turn > 5){
        console.log('unlucky of of cuesses')
        window.removeEventListener('keyup', handleKeyup)
      }
    

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

 

  useEffect(()=>{
    console.log(guesses, turn, isCorrect )
  }, [guesses, turn, isCorrect])
  return (
    <div>
    <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    <h1>current Guess = {currentGuess}</h1>
    <h1>{isCorrect ? 'YOU WIN' : 'GOOD TRY'}</h1>
    </div>
  )
}