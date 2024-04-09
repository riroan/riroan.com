import React from 'react'
import styles from './Ul.module.css'

export default function Ul(props) {
	const defaultStyle = { transition: 'max-height 0.3s ease 0s, opacity 0.3s ease 0s', transformOrigin: 'center top' }
	const visibleStyle = { maxHeight: '500px', opacity: 1, pointerEvents: 'all', ...defaultStyle }
	const invisibleStyle = { maxHeight: '0px', opacity: 0, pointerEvents: 'none', ...defaultStyle }
	return (
		<ul style={props.display ? visibleStyle : invisibleStyle} className={styles.container}>
			{props.children}
		</ul>
	)
}
