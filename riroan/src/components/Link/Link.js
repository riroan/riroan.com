import React from 'react'
import styles from './Link.module.css'
import Assist from '../Assist'
import { useSelector } from 'react-redux'

export default function Link(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<div className={styles.container}>
			{props.children}{' '}
			<Assist>
				{props.desc}
			</Assist>
		</div>
	)
}
