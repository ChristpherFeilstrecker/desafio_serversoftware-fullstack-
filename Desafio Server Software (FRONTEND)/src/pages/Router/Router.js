import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./StyledRouter.css";
import IntroPage from '../IntroPage/IntroPage'

export const Router = () => {
  const [splash, setSplash] = useState(false)

  useEffect(() => {
    setSplash(true)
    setTimeout(() => {
      setSplash(false)
    }, 4000)
  }, [])

  return (
    <div>
      {splash ?
        <div className='splash-screm'>
          <div className="image-splash1">DESAFIO</div>
          <div className="image-splash2">SERVER SOFTWARES PARA VAREJO</div>
        </div>
        :
        <BrowserRouter className="page">
          <Routes id="routes">
            <Route exact path={"/"} element={<IntroPage />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}