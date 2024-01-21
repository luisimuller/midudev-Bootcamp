import Header from "./Componentes/Header" 
import Content from "./Componentes/Content"


const App = () => {
 

  return (
    <>
    <Header title="Half Stack application development" />
    <Content part='Fundamentals of React' excercise='10' />
    <Content part='Using props to pass data' excercise='7' />
    <Content part='State of a component' excercise='14' />


    </>
  )
}

export default App