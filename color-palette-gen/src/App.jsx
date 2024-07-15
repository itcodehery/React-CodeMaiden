import { useState } from 'react'
import './App.css'

function App() {
  const [colorList, setList] = useState([])
  const [defaultValue, setDefaultValue] = useState(5)

  function generateColorList() {
    let colorArray = []
    for (let i = 0; i < defaultValue; i++) {
      let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
      colorArray.push(color)
    }
    setList(colorArray)
  }

  function renderColorBlock(index, color) {
    return <div className='colorblock' key={index} style={{ backgroundColor: color, width: '100px', height: '100px', border: '10px' }}></div>
  }

  return (
    <>
      <div className='appbar'>
        <h2>Simple Color Palette Generator</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <button onClick={generateColorList}>Generate Color Palette</button>
          <input type='range' min={2} max={10} value={defaultValue} onInput={
            (e) => {
              setDefaultValue(e.target.value)
            }
          } />
          <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>{defaultValue}</div>
        </div>
      </div>
      <div className='palette'>
        {
          colorList.map((color, index) => {
            return (
              renderColorBlock(index, color)
            )
          })
        }

      </div>

    </>
  )
}

export default App


