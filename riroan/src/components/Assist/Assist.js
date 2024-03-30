import React from 'react'
import styles from './Assist.module.css'

export default function Assist(props) {
	return <span style={props.style} className={styles.container}>{props.children}</span>
}
