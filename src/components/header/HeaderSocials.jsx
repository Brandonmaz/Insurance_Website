import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaYoutubeSquare} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brandonmazikowski/" rel="noreferrer" target="_blank" className=""><BsLinkedin/></a>
        <a href="https://www.youtube.com/channel/UC7FbSkWbm5wZIt8DCfKrxKw" rel="noreferrer" target="_blank" className=""><FaYoutubeSquare/></a>
        <a href="https://www.facebook.com/brandonmazikowski/" rel="noreferrer" target="_blank" className=""><AiFillFacebook /></a>
    </div>
  )
}

export default HeaderSocials