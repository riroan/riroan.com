import React from 'react'
import styles from './H2.module.css'

export default function H2(props) {
	return (
		<div style={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
