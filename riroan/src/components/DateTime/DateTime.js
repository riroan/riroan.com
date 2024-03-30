import React from 'react'
import styles from './DateTime.module.css'

export default function DateTime(props) {
	return (
		<span className={styles.container} styles={props.style}>
			{props.children}
		</span>
	)
}
