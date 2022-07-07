const Score = (props) => {
  return (
    <>
      <div>
        {props.student.scores.map(score =>
          <div key={score.date}>
            <h4>Test Date: {score.date} | Score: {score.score}</h4>
            <h4></h4>
          </div> )}
      </div>
    </>
  )
}

export default Score