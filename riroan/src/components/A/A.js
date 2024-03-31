import React from 'react'
import styles from './A.module.css'

export default function A(props) {
	return (
		<a target="#" href={props.href} style={props.style} className={styles.container}>
			{props.children}
		</a>
	)
}
