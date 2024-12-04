import { createRoot } from 'react-dom/client'
import './index.css'
import TelaImoveis from './telaImoveis'
import { BrowserRouter, Route, Routes } from 'react-router'
import NovoImovel from './novoImovel'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<TelaImoveis />} />
      <Route path='/novo' element={<NovoImovel />} />
    </Routes>
  </BrowserRouter>,
)
