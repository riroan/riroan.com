import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation, Trans } from 'react-i18next'
import styles from './AppMinimal.module.css'
import UtilitySetMinimal from './components/UtilitySetMinimal'

export default function AppMinimal() {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const detail = useSelector(state => state.detail.detail)
	const { t } = useTranslation()

	useEffect(() => {
		const referrer = document.referrer
		fetch('https://visit.riroan.com/referrer', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ referrer: referrer }),
		})
	}, [])

	return (
		<div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
			<div className={styles.inner}>
				{/* Header / Profile */}
				<header className={styles.header}>
					<h1 className={styles.name}>{t('7943af7b87')}</h1>
					<p className={styles.subtitle}>riroan</p>
					<div className={styles.info}>
						<span>Kakao Server Developer</span>
						<span className={styles.dot}>·</span>
						<span>{t('c46e70dd31')}</span>
						<span className={styles.dot}>·</span>
						<span>riroan@naver.com</span>
					</div>
				</header>

				{/* About */}
				<section className={styles.section}>
					<p className={styles.aboutTitle}>{t('eb5ef1d22a')}</p>
					<ul className={styles.aboutList}>
						<li>{t('2e0cbb47d6')}</li>
						<li>{t('7f208f8376')}</li>
						<li>{t('4c1aaa94b1')}</li>
						<li>{t('80cae4f4db')}</li>
						<li>{t('f4038fa07c')}</li>
					</ul>
				</section>

				{/* Work Experience */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Work Experience</h2>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<a href="https://www.kakaocorp.com/page/" className={styles.link}>{t('0a2ff93ca8')}</a>
							<span className={styles.date}>2024. 03. -</span>
						</div>
						<p className={styles.role}>Server Developer</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<a href="https://www.kakaocorp.com/page/" className={styles.link}>{t('0a2ff93ca8')}</a>
							<span className={styles.date}>2024. 01. - 2024. 02.</span>
						</div>
						<p className={styles.role}>Server Developer (Intern)</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span>{t('57e3da99f5')}</span>
							<span className={styles.date}>2023. 03. - 2023. 12.</span>
						</div>
						<p className={styles.role}>Backend Developer</p>
					</div>
				</section>

				{/* Projects */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Projects</h2>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span className={styles.projectName}>APAP</span>
							<span className={styles.date}>2021. 06. - 2021. 12.</span>
						</div>
						<p className={styles.projectSub}>Abnormal Pattern Alarmer Platform</p>
						<p className={styles.techStack}>Python · FastAPI · Pytorch · AWS · Computer Vision · React · Typescript</p>
						<p className={styles.refer}>
							<a href="https://www.youtube.com/watch?v=VJRN_Xnvn_0" className={styles.link}>Demo</a>
						</p>
						<p className={styles.desc}>
							<Trans t={t} i18nKey="c61a814bcd">
								<a href="https://www.swmaestro.org/sw/bbs/B0000006/view.do?nttId=25024&menuNo=200015&pageIndex=5" className={styles.link}></a>
							</Trans>
						</p>
						<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
							<div className={styles.detailInner}>
								<ul className={styles.detailList}>
									<li>{t('1790d92249')}</li>
									<li>{t('c60b1c2b97')}</li>
									<li>{t('12ef35fe5c')}</li>
									<li>{t('40c04ca7f4')}
										<ul>
											<li>{t('da0063aebf')}</li>
											<li>{t('07b9cd5e7a')}</li>
										</ul>
									</li>
									<li>{t('ebae4fa95e')}
										<ul>
											<li><a href="https://github.com/MVIG-SJTU/AlphAction" className={styles.link}>AlphAction</a></li>
											<li><a href="https://github.com/ultralytics/yolov5" className={styles.link}>Yolo V5</a></li>
											<li><a href="https://github.com/zengwb-lx/Yolov5-Deepsort-Fastreid" className={styles.link}>Deepsort + FastReid</a></li>
										</ul>
									</li>
									<li>
										<Trans t={t} i18nKey="b70db4b6bd">
											<a href="https://atomicdesign.bradfrost.com/chapter-2/" className={styles.link}></a>
										</Trans>
									</li>
									<li>{t('3898ae82bb')}
										<ul>
											<li>{t('0f335c363b')}</li>
											<li>{t('b426109233')}</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span className={styles.projectName}>MKCloud</span>
							<span className={styles.date}>2023. 01. - 2023. 05.</span>
						</div>
						<p className={styles.techStack}>Typescript · React · Java · Spring · MySQL · Nginx · Oracle Cloud · Docker · Github Action</p>
						<p className={styles.refer}>
							<a href="https://cloud.riroan.com/" className={styles.link}>Site</a>
							<span className={styles.dot}>·</span>
							<a href="https://github.com/riroan/MKCloud" className={styles.link}>Github</a>
						</p>
						<p className={styles.desc}>{t('aaad563e6f')}</p>
						<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
							<div className={styles.detailInner}>
								<ul className={styles.detailList}>
									<li><Trans t={t} i18nKey="91ff0ec607"><a href="https://riroan.tistory.com/123" className={styles.link}></a></Trans></li>
									<li><Trans t={t} i18nKey="9e23e4d1cc"><a href="https://riroan.tistory.com/124" className={styles.link}></a></Trans></li>
									<li>{t('eea9e2270d')}</li>
									<li><Trans t={t} i18nKey="b85f775faa"><a href="https://jwt.io/" className={styles.link}></a></Trans></li>
									<li>{t('2a8b68e180')}</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span className={styles.projectName}>Kunsolved</span>
							<span className={styles.date}>2022. 04. - 2022. 10.</span>
						</div>
						<p className={styles.techStack}>Typescript · React · Python · FastAPI · MySQL · AWS · Docker · Github Action</p>
						<p className={styles.refer}>
							<a href="https://bj.riroan.com/" className={styles.link}>Site</a>
							<span className={styles.dot}>·</span>
							<a href="https://github.com/riroan/Kunsolved" className={styles.link}>Github</a>
						</p>
						<p className={styles.desc}>{t('85c8632fa3')}</p>
						<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
							<div className={styles.detailInner}>
								<ul className={styles.detailList}>
									<li>{t('eea9e2270d')}</li>
									<li>{t('9e6fcd0428')}</li>
									<li><Trans t={t} i18nKey="67b5ff53fc"><a href="https://www.chartjs.org/" className={styles.link}></a></Trans></li>
									<li>{t('e8b73c5fe8')}</li>
									<li><Trans t={t} i18nKey="e94e03d3a3"><a href="https://aws.amazon.com/ko/certificate-manager/" className={styles.link}></a></Trans></li>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span className={styles.projectName}>Lollang</span>
							<span className={styles.date}>2022. 04.</span>
						</div>
						<p className={styles.techStack}>Python</p>
						<p className={styles.refer}>
							<a href="https://playlollang.wonj.in/" className={styles.link}>Site</a>
							<span className={styles.dot}>·</span>
							<a href="https://github.com/riroan/lollang" className={styles.link}>Github</a>
						</p>
						<p className={styles.desc}>{t('e9fbbf3246')}</p>
						<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
							<div className={styles.detailInner}>
								<ul className={styles.detailList}>
									<li>{t('a4f08266bc')}</li>
									<li><Trans t={t} i18nKey="b050f72248"><a href="https://github.com/riroan/lollang/wiki/lollang-Grammar" className={styles.link}></a></Trans></li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Education</h2>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<a href="https://www.konkuk.ac.kr/konkuk/index.do" className={styles.link}>{t('b77b273bca')}</a>
						</div>
						<p className={styles.role}>{t('6f47aa3042')}</p>
						<p className={styles.desc}>GPA 3.75/4.50 (CSE 3.75/4.50)</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<a href="https://ssls.sen.hs.kr/" className={styles.link}>{t('879bce12bb')}</a>
						</div>
						<p className={styles.role}>{t('eca4809d9e')}</p>
						<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
							<div className={styles.detailInner}>
								<ul className={styles.detailList}>
									<li>{t('7e09f00865')}</li>
									<li>{t('c85c922296')}</li>
									<li>{t('c1eed5bc97')}</li>
									<li>{t('0a236ab86f')}</li>
									<li>{t('9806c430d7')}</li>
									<li>{t('668d73beac')}</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<a href="https://yangkang.sen.ms.kr/" className={styles.link}>{t('ed5a10dd46')}</a>
						</div>
						<p className={styles.role}>{t('3e00dd6c38')}</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<a href="https://yangmok.sen.es.kr/" className={styles.link}>{t('4dd85a8789')}</a>
						</div>
						<p className={styles.role}>{t('3e00dd6c38')}</p>
						<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
							<div className={styles.detailInner}>
								<ul className={styles.detailList}>
									<li>{t('1655bfd10d')}</li>
									<li>{t('1fa589f622')}</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Skills</h2>

					<div className={styles.skillGroup}>
						<h3 className={styles.skillTitle}>Programming Languages</h3>
						<p className={styles.skillItems}>Python · C++ · Javascript · Typescript · Java</p>
					</div>

					<div className={styles.skillGroup}>
						<h3 className={styles.skillTitle}>Frameworks</h3>
						<p className={styles.skillItems}>FastAPI · React · Openstack</p>
					</div>

					<div className={styles.skillGroup}>
						<h3 className={styles.skillTitle}>AI</h3>
						<p className={styles.skillItems}>TensorFlow · Computer Vision</p>
					</div>

					<div className={styles.skillGroup}>
						<h3 className={styles.skillTitle}>DevOps</h3>
						<p className={styles.skillItems}>Docker · Docker-Compose · Kubernetes · Github Action · Nginx · Jenkins</p>
					</div>

					<div className={styles.skillGroup}>
						<h3 className={styles.skillTitle}>Mathematics</h3>
						<p className={styles.skillItems}>Number Theory · Calculus · Abstract Algebra · Linear Algebra</p>
					</div>
				</section>

				{/* Achievements */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Achievements</h2>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<a href="https://icpc.global/" className={styles.link}>ICPC</a>
							<span className={styles.achievementSub}>International Collegiate Programming Contest</span>
						</div>
						<ul className={styles.achievementList}>
							<li><a href="https://riroan.tistory.com/88" className={styles.link}>2022, Asia Seoul Regional Contest</a></li>
							<li>2018, Asia Seoul Regional Contest</li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<a href="https://www.facebook.com/codingcompetitions/hacker-cup" className={styles.link}>Meta Hacker Cup</a>
						</div>
						<ul className={styles.achievementList}>
							<li>2023, Competed in Round 2</li>
							<li><a href="https://riroan.tistory.com/85" className={styles.link}>2022, Competed in Round 2</a></li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<a href="https://ucpc.me/" className={styles.link}>UCPC</a>
							<span className={styles.achievementSub}>{t('fd42059b90')}</span>
						</div>
						<ul className={styles.achievementList}>
							<li><a href="https://riroan.tistory.com/71" className={styles.link}>2022, 41<sup>th</sup> place</a></li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<a href="https://scpc.space/" className={styles.link}>SCPC</a>
							<span className={styles.achievementSub}>{t('ad42f02925')}</span>
						</div>
						<ul className={styles.achievementList}>
							<li>2025, 17<sup>th</sup> place on Div. 2</li>
							<li><a href="https://riroan.tistory.com/174" className={styles.link}>2024, 14<sup>th</sup> place on Div. 2</a></li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<span>{t('5703ef86fc')}</span>
						</div>
						<ul className={styles.achievementList}>
							<li><a href="https://riroan.tistory.com/166" className={styles.link}><Trans t={t} i18nKey="2b50a2d01e"><sup></sup></Trans></a></li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<span>{t('ec45e1419e')}</span>
						</div>
						<ul className={styles.achievementList}>
							<li><a href="https://riroan.tistory.com/151" className={styles.link}><Trans t={t} i18nKey="88c76e7c86"><sup></sup></Trans></a></li>
							<li><a href="https://riroan.tistory.com/175" className={styles.link}><Trans t={t} i18nKey="3b866dda48"><sup></sup></Trans></a></li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<a href="https://career.programmers.co.kr/top_programmers/introduce" className={styles.link}>{t('3f5d3b124c')}</a>
						</div>
						<ul className={styles.achievementList}>
							<li><a href="https://riroan.tistory.com/86" className={styles.link}>{t('e10bb9ddc4')}</a></li>
						</ul>
					</div>

					<div className={styles.achievement}>
						<div className={styles.entryHeader}>
							<span>{t('3dc944de58')}</span>
						</div>
						<ul className={styles.achievementList}>
							<li>{t('a520cb971c')}</li>
						</ul>
					</div>
				</section>

				{/* Algorithm Experiences */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Algorithm Experiences</h2>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://www.acmicpc.net/user/riroan" className={styles.link}>{t('7c6fc03ca2')}</a>
							<span className={styles.algoRating}><Trans t={t} i18nKey="9ce277c6e8"><sup></sup></Trans></span>
						</div>
						<p className={styles.algoDesc}><Trans t={t} i18nKey="69aa42060f"><sup></sup></Trans></p>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://solved.ac/profile/riroan" className={styles.link}>{t('5d37da82e2')}</a>
							<span className={styles.algoRating} style={{ color: '#00B4FC' }}>Diamond I</span>
						</div>
						<p className={styles.algoDesc}><Trans t={t} i18nKey="f27eded4a9"><sup></sup></Trans></p>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://solved.ac/profile/riroan/arena" className={styles.link}>{t('4e1e0d7819')}</a>
							<span className={styles.algoRating} style={{ color: '#30A1E5' }}><Trans t={t} i18nKey="8de4ecceb6"><sup></sup></Trans></span>
						</div>
						<p className={styles.algoDesc}><Trans t={t} i18nKey="1978eb4b0b"><sup></sup></Trans></p>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://codeforces.com/profile/riroan" className={styles.link}>Codeforces</a>
							<span className={styles.algoRating} style={{ color: '#AA00AA' }}>{t('ee90d8cb6f')}</span>
						</div>
						<p className={styles.algoDesc}>{t('d6e76f1353')}</p>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://atcoder.jp/users/riroan" className={styles.link}>Atcoder</a>
							<span className={styles.algoRating} style={{ color: '#00C0C0' }}>{t('05d8ff4f18')}</span>
						</div>
						<p className={styles.algoDesc}>{t('473137965e')}</p>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://profiles.topcoder.com/riroan" className={styles.link}>Topcoder</a>
							<span className={styles.algoRating} style={{ color: '#6666FF' }}>{t('bb55c41fa8')}</span>
						</div>
						<p className={styles.algoDesc}>{t('f0eb7f05da')}</p>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://www.acmicpc.net/category/454" className={styles.link}>KUPC</a>
							<span className={styles.algoRating}>Konkuk University Programming Contest</span>
						</div>
						<p className={styles.algoDesc}>{t('530fa7ad9c')}</p>
						<ul className={styles.detailList}>
							<li>
								<Trans t={t} i18nKey="eea448938a"><a href="https://github.com/riroan/KUPC/blob/main/problem/main.pdf" className={styles.link}></a></Trans>
								<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
									<div className={styles.detailInner}>
										<ul>
											<li>{t('3a7e8687a3')}</li>
											<li>{t('9874255b12')}</li>
											<li>{t('2ac5268a79')}</li>
											<li>{t('e164f9d021')}</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<Trans t={t} i18nKey="564079684c"><a href="https://www.acmicpc.net/category/989" className={styles.link}></a></Trans>
								<div className={`${styles.detailWrapper} ${detail ? styles.detailWrapperOpen : ''}`}>
									<div className={styles.detailInner}>
										<ul>
											<li><a href="https://www.acmicpc.net/problem/30463" className={styles.link}>{t('b6f1c50fe7')}</a></li>
											<li><a href="https://www.acmicpc.net/problem/30462" className={styles.link}>MEXchange</a></li>
										</ul>
									</div>
								</div>
							</li>
							<li><Trans t={t} i18nKey="451c29349c"><a href="https://www.acmicpc.net/category/detail/4345" className={styles.link}></a></Trans></li>
							<li><Trans t={t} i18nKey="27f162d455"><a href="https://www.acmicpc.net/category/detail/4461" className={styles.link}></a></Trans></li>
							<li><Trans t={t} i18nKey="dc8b66ca11"><a href="https://www.acmicpc.net/category/detail/4606" className={styles.link}></a></Trans></li>
						</ul>
					</div>

					<div className={styles.algoEntry}>
						<div className={styles.algoHeader}>
							<a href="https://www.acmicpc.net/category/408" className={styles.link}>APC</a>
							<span className={styles.algoRating}>Ajou University Programming Contest</span>
						</div>
						<p className={styles.algoDesc}>{t('dda64fb4b4')}</p>
						<ul className={styles.detailList}>
							<li><Trans t={t} i18nKey="a53a4c11bf"><a href="https://www.acmicpc.net/category/detail/4380" className={styles.link}></a></Trans></li>
						</ul>
					</div>
				</section>

				{/* Activities */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Activities</h2>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span><Trans t={t} i18nKey="2959cdd843"><a href="https://www.kakaotechcampus.com/" className={styles.link}></a></Trans></span>
							<span className={styles.date}>2025. 07. - 2025. 08.</span>
						</div>
						<p className={styles.desc}><Trans t={t} i18nKey="5f2b0fcf6b"></Trans></p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span><Trans t={t} i18nKey="3b161a077a"><a href="https://fastapi.tiangolo.com/" className={styles.link}></a></Trans></span>
							<span className={styles.date}>2024. 01.</span>
						</div>
						<p className={styles.desc}><Trans t={t} i18nKey="fe7a212f7e"><a href="https://github.com/tiangolo/fastapi/pulls?q=is%3Apr+is%3Aclosed+author%3Ariroan" className={styles.link}></a></Trans></p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span><a href="https://www.swmaestro.org/sw/main/main.do" className={styles.link}>{t('f20ed21cf8')}</a> <Trans t={t} i18nKey="d3cd603b84"><sup></sup></Trans></span>
							<span className={styles.date}>2021. 06. - 2021. 12.</span>
						</div>
						<p className={styles.desc}>{t('1e8bf396d3')}</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span>{t('da1b06b73d')}</span>
							<span className={styles.date}>2019. 05. - 2020. 12.</span>
						</div>
						<p className={styles.desc}>{t('f25db7c579')}</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span>{t('eefd8527c4')}</span>
							<span className={styles.date}>2024. 08.</span>
						</div>
						<p className={styles.refer}>
							<a href="https://github.com/strong-trash/hack_seoul_backend" className={styles.link}>Github</a>
						</p>
						<p className={styles.desc}>{t('0defe675b7')}</p>
					</div>
				</section>

				{/* Seminars */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Seminars</h2>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span>{t('b6751e45ef')}</span>
							<span className={styles.date}>2024. 04.</span>
						</div>
						<p className={styles.desc}>{t('b77b273bca')}, Alkon</p>
					</div>

					<div className={styles.entry}>
						<div className={styles.entryHeader}>
							<span>{t('6164be8d27')}</span>
							<span className={styles.date}>2024. 12.</span>
						</div>
						<p className={styles.desc}>{t('b77b273bca')}, Konnect</p>
					</div>
				</section>

				{/* Certificates */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Certificates</h2>

					<div className={styles.certEntry}>
						<span className={styles.certName}>JLPT</span>
						<span className={styles.certDate}>2026. 02.</span>
						<span className={styles.certDesc}>N4</span>
					</div>

					<div className={styles.certEntry}>
						<span className={styles.certName}>PCCP Lv4</span>
						<span className={styles.certDate}>2022. 11.</span>
						<span className={styles.certDesc}>{t('6244137e69')}</span>
					</div>

					<div className={styles.certEntry}>
						<span className={styles.certName}>{t('0ca47e58ef')}</span>
						<span className={styles.certDate}>2022. 09.</span>
					</div>

					<div className={styles.certEntry}>
						<span className={styles.certName}>OPIC</span>
						<span className={styles.certDate}>2022. 09.</span>
						<span className={styles.certDesc}>IM2</span>
					</div>

					<div className={styles.certEntry}>
						<span className={styles.certName}>{t('17060ac013')}</span>
						<span className={styles.certDate}>2022. 04.</span>
						<span className={styles.certDesc}><Trans t={t} i18nKey="8f0f5b6e68"><a href="https://tosc.sejong.ac.kr/" className={styles.link}></a></Trans></span>
					</div>

					<div className={styles.certEntry}>
						<span className={styles.certName}>TOPCIT</span>
						<span className={styles.certDate}>2021. 10.</span>
						<span className={styles.certDesc}>{t('501e913fc0')}</span>
					</div>
				</section>

				{/* Games */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Games</h2>

					<div className={styles.gameEntry}>
						<h3 className={styles.gameTitle}>{t('15c4d561d9')}</h3>
						<p className={styles.gameAccounts}>
							<a href="https://www.op.gg/summoners/kr/%EB%AA%85%EA%B8%B0%EB%AA%85%EA%B8%B0%EA%B9%80%EB%AA%85%EA%B8%B0-KMG" className={styles.link}>명기명기김명기#KMG</a>
							<span className={styles.dot}>·</span>
							<a href="https://www.op.gg/summoners/kr/%EB%9D%B5%EA%B8%B0%EB%AA%85%EA%B8%B0%EA%B9%80%EB%AA%85%EA%B8%B0-KR1" className={styles.link}>띵기명기김명기#KR1</a>
						</p>
					</div>

					<div className={styles.gameEntry}>
						<h3 className={styles.gameTitle}>{t('e6db6ba937')}</h3>
						<p className={styles.gameAccounts}>
							<a href="https://maple.gg/u/%ED%95%99%EB%8B%A4%EB%A6%AC%EC%A0%91%EA%B8%B0" className={styles.link}>학다리접기</a>
							<span className={styles.gameSub}>@{t('55f275bfca')}</span>
						</p>
					</div>

					<div className={styles.gameEntry}>
						<h3 className={styles.gameTitle}>{t('7cd8cc1140')}</h3>
						<p className={styles.gameAccounts}>하스스톤#33537</p>
					</div>
				</section>

				{/* Contact */}
				<footer className={styles.footer}>
					<div className={styles.footerLinks}>
						<a href="mailto:riroan@naver.com" className={styles.footerLink}>{t('fd61ef6507')}</a>
						<a href="https://riroan.tistory.com" className={styles.footerLink}>{t('76b5550d8c')}</a>
						<a href="https://www.instagram.com/dding_gi_98" className={styles.footerLink}>{t('dd95a7137b')}</a>
						<a href="https://github.com/riroan" className={styles.footerLink}>{t('5f37ad7846')}</a>
						<a href="https://www.linkedin.com/in/riroan/" className={styles.footerLink}>{t('1ffb0f1615')}</a>
						<a href="https://www.acmicpc.net/user/riroan" className={styles.footerLink}>{t('459b12e1f1')}</a>
						<a href="https://solved.ac/profile/riroan" className={styles.footerLink}>{t('1070ba1d4e')}</a>
						<a href="https://codeforces.com/profile/riroan" className={styles.footerLink}>{t('4a3c941612')}</a>
						<a href="https://atcoder.jp/users/riroan" className={styles.footerLink}>{t('f6003e126a')}</a>
						<a href="https://profiles.topcoder.com/riroan" className={styles.footerLink}>{t('df23d19230')}</a>
					</div>
				</footer>
			</div>
			<UtilitySetMinimal />
		</div>
	)
}
