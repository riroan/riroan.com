import React from 'react'
import styles from './H3.module.css'

export default function H3(props) {
	return (
		<div style={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
