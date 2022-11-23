import { ErroContainer } from "./ErrorPage.styled";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../json/error.json')
    })
  }, [])

  return (
    <ErroContainer>
      <section>
        <div className="container" ref={container}></div>
        <h1>Algo deu errado!</h1>
        <h2>404 - Página não encontrada</h2>
        <Link to={`/`}>
          <button>Voltar ao início</button>
        </Link>
      </section>
    </ErroContainer>
  )
}
