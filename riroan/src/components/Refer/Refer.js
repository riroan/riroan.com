import React from 'react'
import styles from './Refer.module.css'

export default function Refer(props) {
	return (
		<div style={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
