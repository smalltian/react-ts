import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './views/app/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux'
import { enthusiasm } from './reducers'
import { StoreState } from './types'
import { Provider } from 'react-redux'

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
})

// as HTMLElement 类型语言，也叫转换
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root') as HTMLElement)
registerServiceWorker()
