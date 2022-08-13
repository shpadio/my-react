const React = {
  createElement: (...args) => {
    const [tag, props, ...children] = args;
    if(typeof tag === 'function'){
     return tag(props)
    }
    const element = { tag, props: { ...props, children } };
    return element;
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