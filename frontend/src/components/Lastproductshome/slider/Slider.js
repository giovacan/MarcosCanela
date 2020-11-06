import React from 'react'
import useSlider from './useSlider'
import Rightcontroller from './Rightcontrol.js'
import Leftcontroller from './Leftcontrol.js'

function Slider({ id, children }) {
	const numberOfSlides = children ? 1 : children.length || null
	const slider = useSlider(id, numberOfSlides)
	const { handleLeftControlClick, handleRightControlClick } = slider

	return (
		<div className='slider'>
			<button className='control previous' onClick={handleLeftControlClick}>
				<Leftcontroller id='previous' />
			</button>
			<div className='slider-box'>
				<div className='slide'></div>
			</div>
			<button className='control next' onClick={handleRightControlClick}>
				<Rightcontroller id='next' />
			</button>
		</div>
	)
}

export default Slider