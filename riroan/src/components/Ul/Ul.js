import React from 'react'
import styles from './Ul.module.css'

export default function Ul(props) {
	return (
		<ul style={{ display: props.display ? 'block' : 'none', transition: '1s' }} className={styles.container}>
			{props.children}
		</ul>
	)
}
