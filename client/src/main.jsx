
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <BrowserRouter>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
