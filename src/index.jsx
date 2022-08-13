const React = {

  memory: {
    copiedArray: []
  },


  createElement: (...args) => {
    const [tag, props, ...children] = args;
    if(typeof tag === 'function'){
     return tag(props)
    }
    const element = { tag, props: { ...props, children } };
    return element;
  },

  useState: (propValue) => {
    let value = propValue
    const setValue = (value) => {
      value = propValue
    }
    return [value, setValue]
  },



  useEffect: (fn, depsArray) => {
    this.memory.copiedArray === JSON.parse(JSON.stringify(depsArray))    
    if(depsArray.forEach((dependency, index) => dependency !== this.memory.copiedArray[index])){
    fn()
    } else {
      return 
    }
  },

};

const App = () => {
  return <div>
    <h1 className="here">HERE WE GO</h1>
    <p>Some random text!</p>
  </div>
}

const render = (reactElement, container) => {
  const actualDomElement = document.createElement(reactElement.tag)
  if(reactElement.props){
    Object.keys(reactElement.props).filter((prop) => prop !== 'children').forEach((prop) => actualDomElement[prop] = reactElement[prop])
  }
  container.appendChild(actualDomElement)

}


render(<App/>, document.getElementById('my-root'))