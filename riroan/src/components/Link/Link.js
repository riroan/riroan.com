import React from 'react'
import styles from './Link.module.css'
import Assist from '../Assist'

export default function Link(props) {
	return (
		<div className={styles.container}>
			{props.children}{' '}
			<Assist>
				{props.desc}
			</Assist>
		</div>
	)
}
