import React from 'react'
import styles from './Item.module.css'

export default function Item(props) {
	const marginLeft = props.depth * 30 - 20 || 10
	return (
		<div style={{ marginLeft: marginLeft }} className={styles.container}>
			{props.children}
		</div>
	)
}
