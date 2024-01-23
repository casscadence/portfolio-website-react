import './index.scss'

const AnimatedLettersB = ({ letterAnim, strArray }) => {
  return (
    <>
      {strArray.map((char, i) => (
        <span key={i} className={`${letterAnim} idx _${i}`} style={{newVar: `${i}`}}>
          {char}
        </span>
      ))}
    </>
  )
}

export default AnimatedLettersB