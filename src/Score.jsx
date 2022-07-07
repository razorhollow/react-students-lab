const Score = (props) => {
  console.log(props.student.scores)
  return (
    <>
      <div>
        {props.student.scores.map(score =>
          <>
            <h4>Test Date: {score.date} | Score: {score.score}</h4>
            <h4></h4>
          </> )}
      </div>
    </>
  )
}

export default Score