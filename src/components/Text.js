import React, {useState} from "react";

const Text = ({render, children, style, left, top, width, span, hover, height, noblack, ...props}) => {
	const [_hover, setHover] = useState(false);
	const [contact, setContact] = useState(false);
	
	const hoverOn = () => setHover(true);
	const hoverOff = () => setHover(false);
	const toggleContact = () => setContact(!contact);
	
	const contstyles = {
		position: left || top ? 'absolute' : 'static',
		left: typeof left === 'string' ? left : `${left}%`,
		top: typeof top === 'string' ? top : `${top}%`,
		width: width ? `${width}px` : 'fit-content',
		height: height ? `${height}px` : 'fit-content',
		zIndex: 1,
		...style
	};
	
	const textstyles = {
		fontSize: 15,
		fontFamily: 'Menlo',
		color: noblack ? 'black' : (hover ? (_hover ? hover : 'white') : 'white'),
		marginBottom: 6,
		backgroundColor: noblack ? 'none' : 'black',
		...style
	};
	
	if (!children) {
		return null
	}
	
	return typeof children === 'string'
		? <span onMouseEnter={hoverOn} onMouseLeave={hoverOff} style={{...textstyles, ...contstyles}} {...props}>{children}</span>
		: <div style={contstyles}>
			<p>
				{children.map(w => {
					return span ? <>
							<span style={{...textstyles, lineHeight: 1.5}} {...props}>{w}</span>
						</>
						: <p {...props}><span style={{...textstyles, lineHeight: 1.5}}>{w}</span></p>
				})}
			</p>
		</div>
};

export default Text
