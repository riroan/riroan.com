import React from 'react'
import styles from './TechStack.module.css'

export default function TechStack(props) {
	return (
		<div styles={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
