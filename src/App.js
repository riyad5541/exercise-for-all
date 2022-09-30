import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Gymnasium from './Components/Gymnasium/Gymnasium';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gymnasium></Gymnasium>
      <h3>Some important question and answer</h3>
      <h4>1.How does react work?</h4>
      <p>Ans: React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries</p>
      <h4>2.Difference between props and state?</h4>
      <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
      <h4>3.What does useEffect do without data load?</h4>
      <p>The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
    </div>
  );
}

export default App;
