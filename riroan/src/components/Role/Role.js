import React from 'react'
import styles from './Role.module.css'

export default function Role(props) {
	return (
		<span style={props.style} className={styles.container}>
			{props.children}
		</span>
	)
}
