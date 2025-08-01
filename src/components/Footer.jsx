import React from 'react'
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <footer className='bottom-0 text-[#0069AB] bg-white/50 flex items-center justify-center py-2 gap-2'>
      <p>Built By <a href="https://github.com/Isaacjosh23" target="_blank">Josh, </a>
      <a href="https://github.com/ouassimaelyakoubi" target="_blank">Ouassima </a>and
      <a href="https://www.linkedin.com/in/agilem" target="_blank"> Emily</a>
      </p>
      <div className='flex items-center gap-2'>
        <p className='text-[#0069AB]'>|</p>
        <FaGithub />
        <a href="https://github.com/chingu-voyages/V56-tier1-team-02" target="_blank"> View on GitHub</a>
      </div>

    </footer>
  )
}

export default Footer