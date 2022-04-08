import React from 'react'
import Lottie from 'react-lottie'
import Animation from './data'

const Loader = ({ height, width, animation, className }) => {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animation ? Animation[animation] : Animation.BlueButtonLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className={className}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  )
}

export default Loader
