import React from "react";
import Car from './Car';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          My cars:
        </h1>
        <Car model="BMW" color="Red" />
        <Car model="Benz" color="Blue">new text for this Car</Car>
        <Car model="Ferrari" color="Yellow" />
        <Car model="bugatti" color="black">I am Supercar</Car>
      </div>
    )
  }
}

export default App