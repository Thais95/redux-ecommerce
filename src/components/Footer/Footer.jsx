import React from 'react'
import { ContainerFooter } from './Footer.style'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaVimeo,
  FaYoutubeSquare,
  FaRssSquare
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <ContainerFooter>
      <div className="Container">
        <h2>League of Legends</h2>
        <p>
          League of Legends is a multiplayer online battle arena video game
          developed and published by Riot Games. It was released in October
          2009 for Microsoft Windows and March 2013 for macOS.
        </p>
        <div className="ContainerIcon">
          <i>
            <FaFacebookSquare />
          </i>
          <i>
            <FaTwitterSquare />
          </i>
          <i>
            <FaVimeo />
          </i>
          <i>
            <FaYoutubeSquare />
          </i>
          <i>
            <FaRssSquare />
          </i>
        </div>
        <div>
          <p>Copyright &copy;2022</p>
        </div>
      </div>
    </ContainerFooter>
  )
}
