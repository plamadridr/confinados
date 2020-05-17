//const element = document.createElement('h1')
//element.innerText = "Hello React"
//const container = document.getElementById('root')
//container.appendChild(element)


import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

//const element = <h1>Hello React II</h1>
const container = document.getElementById('root')

// ReactDom.render(_que_, _on_)
//ReactDom.render(element, container)
ReactDom.render(<App/>, container)