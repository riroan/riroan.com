import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation, Trans } from 'react-i18next'
import UtilitySetMinimal from '../minimal/components/UtilitySetMinimal'

export default function PortfolioLight() {
	const [loaded, setLoaded] = useState(false)
	const [activeSection, setActiveSection] = useState('about')
	const detail = useSelector(state => state.detail.detail)
	const { t } = useTranslation()

	useEffect(() => {
		setLoaded(true)
	}, [])

	useEffect(() => {
		const referrer = document.referrer
		fetch('https://visit.riroan.com/referrer', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ referrer: referrer }),
		}).catch(() => {})
	}, [])

	const scrollToSection = id => {
		setActiveSection(id)
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div
			style={{
				minHeight: '100vh',
				backgroundColor: '#fafafa',
				fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
				color: '#1a1a1a',
				overflowX: 'hidden',
			}}
		>
			{/* Google Fonts */}
			<style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        ::selection {
          background: #1a1a1a;
          color: #fafafa;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineExpand {
          from { width: 0; }
          to { width: 60px; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .nav-link {
          position: relative;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #1a1a1a;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .project-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .skill-tag {
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: #1a1a1a;
          color: #fafafa;
        }

        .contact-link {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .contact-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #1a1a1a;
          transform: translateX(-101%);
          transition: transform 0.4s ease;
        }

        .contact-link:hover::before {
          transform: translateX(0);
        }

        .section-link {
          color: #1a1a1a;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .section-link::after {
          content: '↗';
          font-size: 0.7em;
          vertical-align: super;
          margin-left: 2px;
          opacity: 0.5;
        }

        .section-link:hover {
          color: #555;
        }

        .section-link:hover::after {
          opacity: 1;
        }

        .detail-list {
          list-style: disc;
          margin-left: 20px;
          margin-top: 12px;
        }

        .detail-list li {
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .detail-list ul {
          list-style: circle;
          margin-left: 20px;
          margin-top: 8px;
        }

        .detail-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease-out;
        }

        .detail-wrapper.open {
          grid-template-rows: 1fr;
        }

        .detail-inner {
          overflow: hidden;
        }
      `}</style>

			{/* Navigation */}
			<nav
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					padding: '24px 48px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'rgba(250, 250, 250, 0.9)',
					backdropFilter: 'blur(10px)',
					zIndex: 100,
					opacity: loaded ? 1 : 0,
					transition: 'opacity 0.6s ease',
				}}
			>
				<div
					style={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: '24px',
						fontWeight: 300,
						letterSpacing: '2px',
					}}
				>
					riroan
				</div>
				<div
					style={{
						display: 'flex',
						gap: '40px',
						fontSize: '13px',
						letterSpacing: '1px',
						textTransform: 'uppercase',
					}}
				>
					{['about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map(item => (
						<span key={item} className={`nav-link ${activeSection === item ? 'active' : ''}`} onClick={() => scrollToSection(item)}>
							{item}
						</span>
					))}
				</div>
			</nav>

			{/* Hero Section */}
			<section
				style={{
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					padding: '0 48px',
					paddingTop: '80px',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
						width: '100%',
					}}
				>
					<div
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(40px)',
							transition: 'all 0.8s ease 0.2s',
						}}
					>
						<p
							style={{
								fontSize: '14px',
								letterSpacing: '3px',
								textTransform: 'uppercase',
								color: '#888',
								marginBottom: '24px',
							}}
						>
							Server Developer @ Kakao
						</p>
					</div>

					<h1
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(48px, 8vw, 96px)',
							fontWeight: 300,
							lineHeight: 1.1,
							marginBottom: '40px',
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(40px)',
							transition: 'all 0.8s ease 0.4s',
						}}
					>
						{t('7943af7b87')}
						<br />
						<span style={{ fontWeight: 500 }}>riroan</span>
					</h1>

					<div
						style={{
							width: loaded ? '60px' : '0',
							height: '1px',
							backgroundColor: '#1a1a1a',
							marginBottom: '40px',
							transition: 'width 0.8s ease 0.8s',
						}}
					/>

					<div
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(40px)',
							transition: 'all 0.8s ease 0.6s',
							display: 'flex',
							flexWrap: 'wrap',
							gap: '24px',
							fontSize: '15px',
							color: '#555',
						}}
					>
						<span>{t('c46e70dd31')}</span>
						<span style={{ color: '#ccc' }}>·</span>
						<span>riroan@naver.com</span>
						<span style={{ color: '#ccc' }}>·</span>
						<span>1998. 09. 09.</span>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				style={{
					minHeight: '100vh',
					padding: '120px 48px',
					backgroundColor: '#fff',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						01 — About
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						{t('eb5ef1d22a')}
					</h2>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '60px',
						}}
					>
						<div>
							<ul
								style={{
									listStyle: 'none',
									padding: 0,
								}}
							>
								{[t('2e0cbb47d6'), t('7f208f8376'), t('4c1aaa94b1'), t('80cae4f4db'), t('f4038fa07c')].map((item, index) => (
									<li
										key={index}
										style={{
											fontSize: '16px',
											lineHeight: 2,
											color: '#444',
											marginBottom: '8px',
											paddingLeft: '20px',
											position: 'relative',
										}}
									>
										<span
											style={{
												position: 'absolute',
												left: 0,
												color: '#888',
											}}
										>
											—
										</span>
										{item}
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3
								style={{
									fontSize: '14px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
									marginBottom: '24px',
									color: '#888',
								}}
							>
								Info
							</h3>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '12px',
									fontSize: '15px',
									color: '#444',
								}}
							>
								<div>
									<span style={{ color: '#888', marginRight: '12px' }}>Position</span>
									Kakao Server Developer
								</div>
								<div>
									<span style={{ color: '#888', marginRight: '12px' }}>Location</span>
									{t('c46e70dd31')}
								</div>
								<div>
									<span style={{ color: '#888', marginRight: '12px' }}>Email</span>
									riroan@naver.com
								</div>
								<div>
									<span style={{ color: '#888', marginRight: '12px' }}>MBTI</span>
									INFP
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Work Experience Section */}
			<section
				id="experience"
				style={{
					padding: '120px 48px',
					backgroundColor: '#fafafa',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						02 — Experience
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Work Experience
					</h2>

					<div style={{ display: 'grid', gap: '40px' }}>
						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fff',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									<a href="https://www.kakaocorp.com/page/" className="section-link">
										{t('0a2ff93ca8')}
									</a>
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2024. 03. -</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>Server Developer</p>
						</div>

						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fff',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									<a href="https://www.kakaocorp.com/page/" className="section-link">
										{t('0a2ff93ca8')}
									</a>
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2024. 01. - 2024. 02.</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>Server Developer (Intern)</p>
						</div>

						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fff',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									{t('57e3da99f5')}
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2023. 03. - 2023. 12.</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>Backend Developer</p>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				style={{
					padding: '120px 48px',
					backgroundColor: '#fff',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						03 — Projects
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Projects
					</h2>

					<div style={{ display: 'grid', gap: '40px' }}>
						{/* APAP */}
						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fafafa',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									APAP
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2021. 06. - 2021. 12.</span>
							</div>
							<p style={{ fontSize: '14px', color: '#888', marginBottom: '16px' }}>Abnormal Pattern Alarmer Platform</p>
							<p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666', marginBottom: '16px' }}>
								<Trans t={t} i18nKey="c61a814bcd">
									<a href="https://www.swmaestro.org/sw/bbs/B0000006/view.do?nttId=25024&menuNo=200015&pageIndex=5" className="section-link"></a>
								</Trans>
							</p>
							<div style={{ marginBottom: '16px' }}>
								<a href="https://www.youtube.com/watch?v=VJRN_Xnvn_0" className="section-link" style={{ fontSize: '14px' }}>
									Demo
								</a>
							</div>
							<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
								{['Python', 'FastAPI', 'Pytorch', 'AWS', 'Computer Vision', 'React', 'Typescript'].map(tag => (
									<span key={tag} style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>
										{tag}
									</span>
								))}
							</div>
							<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
								<div className="detail-inner">
									<ul className="detail-list">
										<li>{t('1790d92249')}</li>
										<li>{t('c60b1c2b97')}</li>
										<li>{t('12ef35fe5c')}</li>
										<li>
											{t('40c04ca7f4')}
											<ul>
												<li>{t('da0063aebf')}</li>
												<li>{t('07b9cd5e7a')}</li>
											</ul>
										</li>
										<li>
											{t('ebae4fa95e')}
											<ul>
												<li>
													<a href="https://github.com/MVIG-SJTU/AlphAction" className="section-link">
														AlphAction
													</a>
												</li>
												<li>
													<a href="https://github.com/ultralytics/yolov5" className="section-link">
														Yolo V5
													</a>
												</li>
												<li>
													<a href="https://github.com/zengwb-lx/Yolov5-Deepsort-Fastreid" className="section-link">
														Deepsort + FastReid
													</a>
												</li>
											</ul>
										</li>
										<li>
											<Trans t={t} i18nKey="b70db4b6bd">
												<a href="https://atomicdesign.bradfrost.com/chapter-2/" className="section-link"></a>
											</Trans>
										</li>
										<li>
											{t('3898ae82bb')}
											<ul>
												<li>{t('0f335c363b')}</li>
												<li>{t('b426109233')}</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* MKCloud */}
						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fafafa',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									MKCloud
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2023. 01. - 2023. 05.</span>
							</div>
							<p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666', marginBottom: '16px' }}>{t('aaad563e6f')}</p>
							<div style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
								<a href="https://cloud.riroan.com/" className="section-link" style={{ fontSize: '14px' }}>
									Site
								</a>
								<a href="https://github.com/riroan/MKCloud" className="section-link" style={{ fontSize: '14px' }}>
									Github
								</a>
							</div>
							<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
								{['Typescript', 'React', 'Java', 'Spring', 'MySQL', 'Nginx', 'Oracle Cloud', 'Docker', 'Github Action'].map(tag => (
									<span key={tag} style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>
										{tag}
									</span>
								))}
							</div>
							<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
								<div className="detail-inner">
									<ul className="detail-list">
										<li>
											<Trans t={t} i18nKey="91ff0ec607">
												<a href="https://riroan.tistory.com/123" className="section-link"></a>
											</Trans>
										</li>
										<li>
											<Trans t={t} i18nKey="9e23e4d1cc">
												<a href="https://riroan.tistory.com/124" className="section-link"></a>
											</Trans>
										</li>
										<li>{t('eea9e2270d')}</li>
										<li>
											<Trans t={t} i18nKey="b85f775faa">
												<a href="https://jwt.io/" className="section-link"></a>
											</Trans>
										</li>
										<li>{t('2a8b68e180')}</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Kunsolved */}
						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fafafa',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									Kunsolved
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2022. 04. - 2022. 10.</span>
							</div>
							<p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666', marginBottom: '16px' }}>{t('85c8632fa3')}</p>
							<div style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
								<a href="https://bj.riroan.com/" className="section-link" style={{ fontSize: '14px' }}>
									Site
								</a>
								<a href="https://github.com/riroan/Kunsolved" className="section-link" style={{ fontSize: '14px' }}>
									Github
								</a>
							</div>
							<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
								{['Typescript', 'React', 'Python', 'FastAPI', 'MySQL', 'AWS', 'Docker', 'Github Action'].map(tag => (
									<span key={tag} style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>
										{tag}
									</span>
								))}
							</div>
							<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
								<div className="detail-inner">
									<ul className="detail-list">
										<li>{t('eea9e2270d')}</li>
										<li>{t('9e6fcd0428')}</li>
										<li>
											<Trans t={t} i18nKey="67b5ff53fc">
												<a href="https://www.chartjs.org/" className="section-link"></a>
											</Trans>
										</li>
										<li>{t('e8b73c5fe8')}</li>
										<li>
											<Trans t={t} i18nKey="e94e03d3a3">
												<a href="https://aws.amazon.com/ko/certificate-manager/" className="section-link"></a>
											</Trans>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Lollang */}
						<div
							className="project-card"
							style={{
								padding: '48px',
								backgroundColor: '#fafafa',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									marginBottom: '12px',
								}}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: '28px',
										fontWeight: 400,
									}}
								>
									Lollang
								</h3>
								<span style={{ fontSize: '13px', color: '#888' }}>2022. 04.</span>
							</div>
							<p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666', marginBottom: '16px' }}>{t('e9fbbf3246')}</p>
							<div style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
								<a href="https://playlollang.wonj.in/" className="section-link" style={{ fontSize: '14px' }}>
									Site
								</a>
								<a href="https://github.com/riroan/lollang" className="section-link" style={{ fontSize: '14px' }}>
									Github
								</a>
							</div>
							<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
								<span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>Python</span>
							</div>
							<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
								<div className="detail-inner">
									<ul className="detail-list">
										<li>{t('a4f08266bc')}</li>
										<li>
											<Trans t={t} i18nKey="b050f72248">
												<a href="https://github.com/riroan/lollang/wiki/lollang-Grammar" className="section-link"></a>
											</Trans>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section
				style={{
					padding: '120px 48px',
					backgroundColor: '#fafafa',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						04 — Education
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Education
					</h2>

					<div style={{ display: 'grid', gap: '32px' }}>
						<div
							style={{
								padding: '32px 0',
								borderBottom: '1px solid #eee',
							}}
						>
							<h3
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: '24px',
									fontWeight: 400,
									marginBottom: '8px',
								}}
							>
								<a href="https://www.konkuk.ac.kr/konkuk/index.do" className="section-link">
									{t('b77b273bca')}
								</a>
							</h3>
							<p style={{ fontSize: '15px', color: '#666', marginBottom: '4px' }}>{t('6f47aa3042')}</p>
							<p style={{ fontSize: '14px', color: '#888' }}>GPA 3.75/4.50 (CSE 3.75/4.50)</p>
						</div>

						<div
							style={{
								padding: '32px 0',
								borderBottom: '1px solid #eee',
							}}
						>
							<h3
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: '24px',
									fontWeight: 400,
									marginBottom: '8px',
								}}
							>
								<a href="https://ssls.sen.hs.kr/" className="section-link">
									{t('879bce12bb')}
								</a>
							</h3>
							<p style={{ fontSize: '15px', color: '#666' }}>{t('eca4809d9e')}</p>
							<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
								<div className="detail-inner">
									<ul className="detail-list">
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

						<div
							style={{
								padding: '32px 0',
								borderBottom: '1px solid #eee',
							}}
						>
							<h3
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: '24px',
									fontWeight: 400,
									marginBottom: '8px',
								}}
							>
								<a href="https://yangkang.sen.ms.kr/" className="section-link">
									{t('ed5a10dd46')}
								</a>
							</h3>
							<p style={{ fontSize: '15px', color: '#666' }}>{t('3e00dd6c38')}</p>
						</div>

						<div
							style={{
								padding: '32px 0',
							}}
						>
							<h3
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: '24px',
									fontWeight: 400,
									marginBottom: '8px',
								}}
							>
								<a href="https://yangmok.sen.es.kr/" className="section-link">
									{t('4dd85a8789')}
								</a>
							</h3>
							<p style={{ fontSize: '15px', color: '#666' }}>{t('3e00dd6c38')}</p>
							<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
								<div className="detail-inner">
									<ul className="detail-list">
										<li>{t('1655bfd10d')}</li>
										<li>{t('1fa589f622')}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				style={{
					padding: '120px 48px',
					backgroundColor: '#fff',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						05 — Skills
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Skills
					</h2>

					<div style={{ display: 'grid', gap: '48px' }}>
						<div>
							<h3
								style={{
									fontSize: '14px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
									marginBottom: '24px',
									color: '#888',
								}}
							>
								Programming Languages
							</h3>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
								{['Python', 'C++', 'Javascript', 'Typescript', 'Java'].map(skill => (
									<span
										key={skill}
										className="skill-tag"
										style={{
											padding: '10px 20px',
											border: '1px solid #ddd',
											fontSize: '13px',
											letterSpacing: '0.5px',
											cursor: 'default',
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3
								style={{
									fontSize: '14px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
									marginBottom: '24px',
									color: '#888',
								}}
							>
								Frameworks
							</h3>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
								{['FastAPI', 'React', 'Openstack'].map(skill => (
									<span
										key={skill}
										className="skill-tag"
										style={{
											padding: '10px 20px',
											border: '1px solid #ddd',
											fontSize: '13px',
											letterSpacing: '0.5px',
											cursor: 'default',
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3
								style={{
									fontSize: '14px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
									marginBottom: '24px',
									color: '#888',
								}}
							>
								AI
							</h3>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
								{['TensorFlow', 'Computer Vision'].map(skill => (
									<span
										key={skill}
										className="skill-tag"
										style={{
											padding: '10px 20px',
											border: '1px solid #ddd',
											fontSize: '13px',
											letterSpacing: '0.5px',
											cursor: 'default',
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3
								style={{
									fontSize: '14px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
									marginBottom: '24px',
									color: '#888',
								}}
							>
								DevOps
							</h3>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
								{['Docker', 'Docker-Compose', 'Kubernetes', 'Github Action', 'Nginx', 'Jenkins'].map(skill => (
									<span
										key={skill}
										className="skill-tag"
										style={{
											padding: '10px 20px',
											border: '1px solid #ddd',
											fontSize: '13px',
											letterSpacing: '0.5px',
											cursor: 'default',
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3
								style={{
									fontSize: '14px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
									marginBottom: '24px',
									color: '#888',
								}}
							>
								Mathematics
							</h3>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
								{['Number Theory', 'Calculus', 'Abstract Algebra', 'Linear Algebra'].map(skill => (
									<span
										key={skill}
										className="skill-tag"
										style={{
											padding: '10px 20px',
											border: '1px solid #ddd',
											fontSize: '13px',
											letterSpacing: '0.5px',
											cursor: 'default',
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Achievements Section */}
			<section
				id="achievements"
				style={{
					padding: '120px 48px',
					backgroundColor: '#fafafa',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						06 — Achievements
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Achievements
					</h2>

					<div style={{ display: 'grid', gap: '32px' }}>
						{/* ICPC */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
								<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400 }}>
									<a href="https://icpc.global/" className="section-link">
										ICPC
									</a>
								</h3>
								<span style={{ fontSize: '14px', color: '#888' }}>International Collegiate Programming Contest</span>
							</div>
							<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/88" className="section-link">
										2022, Asia Seoul Regional Contest
									</a>
								</li>
								<li style={{ fontSize: '15px', color: '#666' }}>2018, Asia Seoul Regional Contest</li>
							</ul>
						</div>

						{/* Meta Hacker Cup */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, marginBottom: '12px' }}>
								<a href="https://www.facebook.com/codingcompetitions/hacker-cup" className="section-link">
									Meta Hacker Cup
								</a>
							</h3>
							<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
								<li style={{ fontSize: '15px', color: '#666' }}>2023, Competed in Round 2</li>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/85" className="section-link">
										2022, Competed in Round 2
									</a>
								</li>
							</ul>
						</div>

						{/* UCPC */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
								<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400 }}>
									<a href="https://ucpc.me/" className="section-link">
										UCPC
									</a>
								</h3>
								<span style={{ fontSize: '14px', color: '#888' }}>{t('fd42059b90')}</span>
							</div>
							<ul style={{ listStyle: 'none', padding: 0 }}>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/71" className="section-link">
										2022, 41<sup>th</sup> place
									</a>
								</li>
							</ul>
						</div>

						{/* SCPC */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
								<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400 }}>
									<a href="https://scpc.space/" className="section-link">
										SCPC
									</a>
								</h3>
								<span style={{ fontSize: '14px', color: '#888' }}>{t('ad42f02925')}</span>
							</div>
							<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
								<li style={{ fontSize: '15px', color: '#666' }}>
									2025, 17<sup>th</sup> place on Div. 2
								</li>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/174" className="section-link">
										2024, 14<sup>th</sup> place on Div. 2
									</a>
								</li>
							</ul>
						</div>

						{/* 서울대학교 프로그래밍 경시대회 */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, marginBottom: '12px' }}>{t('5703ef86fc')}</h3>
							<ul style={{ listStyle: 'none', padding: 0 }}>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/166" className="section-link">
										<Trans t={t} i18nKey="2b50a2d01e">
											<sup></sup>
										</Trans>
									</a>
								</li>
							</ul>
						</div>

						{/* 건국대학교 프로그래밍 경시대회 */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, marginBottom: '12px' }}>{t('ec45e1419e')}</h3>
							<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/151" className="section-link">
										<Trans t={t} i18nKey="88c76e7c86">
											<sup></sup>
										</Trans>
									</a>
								</li>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/175" className="section-link">
										<Trans t={t} i18nKey="3b866dda48">
											<sup></sup>
										</Trans>
									</a>
								</li>
							</ul>
						</div>

						{/* 탑 프로그래머스 */}
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, marginBottom: '12px' }}>
								<a href="https://career.programmers.co.kr/top_programmers/introduce" className="section-link">
									{t('3f5d3b124c')}
								</a>
							</h3>
							<ul style={{ listStyle: 'none', padding: 0 }}>
								<li style={{ fontSize: '15px', color: '#666' }}>
									<a href="https://riroan.tistory.com/86" className="section-link">
										{t('e10bb9ddc4')}
									</a>
								</li>
							</ul>
						</div>

						{/* 소프트웨어 경진대회 */}
						<div style={{ padding: '24px 0' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, marginBottom: '12px' }}>{t('3dc944de58')}</h3>
							<ul style={{ listStyle: 'none', padding: 0 }}>
								<li style={{ fontSize: '15px', color: '#666' }}>{t('a520cb971c')}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Algorithm Experiences Section */}
			<section
				style={{
					padding: '120px 48px',
					backgroundColor: '#fff',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						07 — Algorithm
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Algorithm Experiences
					</h2>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
						{/* BOJ */}
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
								<a href="https://www.acmicpc.net/user/riroan" className="section-link">
									{t('7c6fc03ca2')}
								</a>
							</h3>
							<p style={{ fontSize: '14px', color: '#888', marginBottom: '12px' }}>
								<Trans t={t} i18nKey="9ce277c6e8">
									<sup></sup>
								</Trans>
							</p>
							<p style={{ fontSize: '14px', color: '#666' }}>
								<Trans t={t} i18nKey="69aa42060f">
									<sup></sup>
								</Trans>
							</p>
						</div>

						{/* solved.ac */}
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
								<a href="https://solved.ac/profile/riroan" className="section-link">
									{t('5d37da82e2')}
								</a>
							</h3>
							<p style={{ fontSize: '14px', color: '#00B4FC', marginBottom: '12px' }}>Diamond I</p>
							<p style={{ fontSize: '14px', color: '#666' }}>
								<Trans t={t} i18nKey="f27eded4a9">
									<sup></sup>
								</Trans>
							</p>
						</div>

						{/* solved.ac Arena */}
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
								<a href="https://solved.ac/profile/riroan/arena" className="section-link">
									{t('4e1e0d7819')}
								</a>
							</h3>
							<p style={{ fontSize: '14px', color: '#30A1E5', marginBottom: '12px' }}>
								<Trans t={t} i18nKey="8de4ecceb6">
									<sup></sup>
								</Trans>
							</p>
							<p style={{ fontSize: '14px', color: '#666' }}>
								<Trans t={t} i18nKey="1978eb4b0b">
									<sup></sup>
								</Trans>
							</p>
						</div>

						{/* Codeforces */}
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
								<a href="https://codeforces.com/profile/riroan" className="section-link">
									Codeforces
								</a>
							</h3>
							<p style={{ fontSize: '14px', color: '#AA00AA', marginBottom: '12px' }}>{t('ee90d8cb6f')}</p>
							<p style={{ fontSize: '14px', color: '#666' }}>{t('d6e76f1353')}</p>
						</div>

						{/* Atcoder */}
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
								<a href="https://atcoder.jp/users/riroan" className="section-link">
									Atcoder
								</a>
							</h3>
							<p style={{ fontSize: '14px', color: '#00C0C0', marginBottom: '12px' }}>{t('05d8ff4f18')}</p>
							<p style={{ fontSize: '14px', color: '#666' }}>{t('473137965e')}</p>
						</div>

						{/* Topcoder */}
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>
								<a href="https://profiles.topcoder.com/riroan" className="section-link">
									Topcoder
								</a>
							</h3>
							<p style={{ fontSize: '14px', color: '#6666FF', marginBottom: '12px' }}>{t('bb55c41fa8')}</p>
							<p style={{ fontSize: '14px', color: '#666' }}>{t('f0eb7f05da')}</p>
						</div>
					</div>

					{/* KUPC & APC */}
					<div style={{ marginTop: '60px' }}>
						<div className="project-card" style={{ padding: '48px', backgroundColor: '#fafafa', marginBottom: '24px' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
								<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400 }}>
									<a href="https://www.acmicpc.net/category/454" className="section-link">
										KUPC
									</a>
								</h3>
								<span style={{ fontSize: '14px', color: '#888' }}>Konkuk University Programming Contest</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666', marginBottom: '16px' }}>{t('530fa7ad9c')}</p>
							<ul className="detail-list">
								<li>
									<Trans t={t} i18nKey="eea448938a">
										<a href="https://github.com/riroan/KUPC/blob/main/problem/main.pdf" className="section-link"></a>
									</Trans>
									<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
										<div className="detail-inner">
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
									<Trans t={t} i18nKey="564079684c">
										<a href="https://www.acmicpc.net/category/989" className="section-link"></a>
									</Trans>
									<div className={`detail-wrapper ${detail ? 'open' : ''}`}>
										<div className="detail-inner">
											<ul>
												<li>
													<a href="https://www.acmicpc.net/problem/30463" className="section-link">
														{t('b6f1c50fe7')}
													</a>
												</li>
												<li>
													<a href="https://www.acmicpc.net/problem/30462" className="section-link">
														MEXchange
													</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<Trans t={t} i18nKey="451c29349c">
										<a href="https://www.acmicpc.net/category/detail/4345" className="section-link"></a>
									</Trans>
								</li>
								<li>
									<Trans t={t} i18nKey="27f162d455">
										<a href="https://www.acmicpc.net/category/detail/4461" className="section-link"></a>
									</Trans>
								</li>
								<li>
									<Trans t={t} i18nKey="dc8b66ca11">
										<a href="https://www.acmicpc.net/category/detail/4606" className="section-link"></a>
									</Trans>
								</li>
							</ul>
						</div>

						<div className="project-card" style={{ padding: '48px', backgroundColor: '#fafafa' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
								<h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400 }}>
									<a href="https://www.acmicpc.net/category/408" className="section-link">
										APC
									</a>
								</h3>
								<span style={{ fontSize: '14px', color: '#888' }}>Ajou University Programming Contest</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666', marginBottom: '16px' }}>{t('dda64fb4b4')}</p>
							<ul className="detail-list">
								<li>
									<Trans t={t} i18nKey="a53a4c11bf">
										<a href="https://www.acmicpc.net/category/detail/4380" className="section-link"></a>
									</Trans>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Activities Section */}
			<section
				style={{
					padding: '120px 48px',
					backgroundColor: '#fafafa',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						08 — Activities
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Activities
					</h2>

					<div style={{ display: 'grid', gap: '32px' }}>
						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
								<span style={{ fontSize: '18px' }}>
									<Trans t={t} i18nKey="2959cdd843">
										<a href="https://www.kakaotechcampus.com/" className="section-link"></a>
									</Trans>
								</span>
								<span style={{ fontSize: '13px', color: '#888' }}>2025. 07. - 2025. 08.</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>
								<Trans t={t} i18nKey="5f2b0fcf6b"></Trans>
							</p>
						</div>

						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
								<span style={{ fontSize: '18px' }}>
									<Trans t={t} i18nKey="3b161a077a">
										<a href="https://fastapi.tiangolo.com/" className="section-link"></a>
									</Trans>
								</span>
								<span style={{ fontSize: '13px', color: '#888' }}>2024. 01.</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>
								<Trans t={t} i18nKey="fe7a212f7e">
									<a href="https://github.com/tiangolo/fastapi/pulls?q=is%3Apr+is%3Aclosed+author%3Ariroan" className="section-link"></a>
								</Trans>
							</p>
						</div>

						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
								<span style={{ fontSize: '18px' }}>
									<a href="https://www.swmaestro.org/sw/main/main.do" className="section-link">
										{t('f20ed21cf8')}
									</a>{' '}
									<Trans t={t} i18nKey="d3cd603b84">
										<sup></sup>
									</Trans>
								</span>
								<span style={{ fontSize: '13px', color: '#888' }}>2021. 06. - 2021. 12.</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>{t('1e8bf396d3')}</p>
						</div>

						<div style={{ padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
								<span style={{ fontSize: '18px' }}>{t('da1b06b73d')}</span>
								<span style={{ fontSize: '13px', color: '#888' }}>2019. 05. - 2020. 12.</span>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>{t('f25db7c579')}</p>
						</div>

						<div style={{ padding: '24px 0' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
								<span style={{ fontSize: '18px' }}>{t('eefd8527c4')}</span>
								<span style={{ fontSize: '13px', color: '#888' }}>2024. 08.</span>
							</div>
							<div style={{ marginBottom: '8px' }}>
								<a href="https://github.com/strong-trash/hack_seoul_backend" className="section-link" style={{ fontSize: '14px' }}>
									Github
								</a>
							</div>
							<p style={{ fontSize: '15px', color: '#666' }}>{t('0defe675b7')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Seminars Section */}
			<section
				style={{
					padding: '120px 48px',
					backgroundColor: '#fff',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						09 — Seminars
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Seminars
					</h2>

					<div style={{ display: 'grid', gap: '24px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px 0', borderBottom: '1px solid #eee' }}>
							<div>
								<h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{t('b6751e45ef')}</h3>
								<p style={{ fontSize: '15px', color: '#666' }}>{t('b77b273bca')}, Alkon</p>
							</div>
							<span style={{ fontSize: '13px', color: '#888' }}>2024. 04.</span>
						</div>

						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px 0' }}>
							<div>
								<h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{t('6164be8d27')}</h3>
								<p style={{ fontSize: '15px', color: '#666' }}>{t('b77b273bca')}, Konnect</p>
							</div>
							<span style={{ fontSize: '13px', color: '#888' }}>2024. 12.</span>
						</div>
					</div>
				</div>
			</section>

			{/* Certificates Section */}
			<section
				style={{
					padding: '120px 48px',
					backgroundColor: '#fafafa',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						10 — Certificates
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Certificates
					</h2>

					<div style={{ display: 'grid', gap: '16px' }}>
						{[
							{ name: 'PCCP Lv4', date: '2022. 11.', desc: t('6244137e69') },
							{ name: t('0ca47e58ef'), date: '2022. 09.', desc: '' },
							{ name: 'OPIC', date: '2022. 09.', desc: 'IM2' },
							{
								name: t('17060ac013'),
								date: '2022. 04.',
								desc: (
									<Trans t={t} i18nKey="8f0f5b6e68">
										<a href="https://tosc.sejong.ac.kr/" className="section-link"></a>
									</Trans>
								),
							},
							{ name: 'TOPCIT', date: '2021. 10.', desc: t('501e913fc0') },
						].map((cert, index) => (
							<div
								key={index}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '24px',
									padding: '20px 0',
									borderBottom: '1px solid #eee',
								}}
							>
								<span style={{ fontSize: '16px', fontWeight: 500, minWidth: '150px' }}>{cert.name}</span>
								<span style={{ fontSize: '14px', color: '#888', minWidth: '100px' }}>{cert.date}</span>
								<span style={{ fontSize: '14px', color: '#666' }}>{cert.desc}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Games Section */}
			<section
				style={{
					padding: '120px 48px',
					backgroundColor: '#fff',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#888',
							marginBottom: '16px',
						}}
					>
						11 — Games
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Games
					</h2>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontSize: '18px', marginBottom: '16px' }}>{t('15c4d561d9')}</h3>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
								<a href="https://www.op.gg/summoners/kr/%EB%AA%85%EA%B8%B0%EB%AA%85%EA%B8%B0%EA%B9%80%EB%AA%85%EA%B8%B0-KMG" className="section-link" style={{ fontSize: '14px' }}>
									명기명기김명기#KMG
								</a>
								<a href="https://www.op.gg/summoners/kr/%EB%9D%B5%EA%B8%B0%EB%AA%85%EA%B8%B0%EA%B9%80%EB%AA%85%EA%B8%B0-KR1" className="section-link" style={{ fontSize: '14px' }}>
									띵기명기김명기#KR1
								</a>
							</div>
						</div>

						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontSize: '18px', marginBottom: '16px' }}>{t('e6db6ba937')}</h3>
							<p style={{ fontSize: '14px' }}>
								<a href="https://maple.gg/u/%ED%95%99%EB%8B%A4%EB%A6%AC%EC%A0%91%EA%B8%B0" className="section-link">
									학다리접기
								</a>
								<span style={{ color: '#888', marginLeft: '8px' }}>@{t('55f275bfca')}</span>
							</p>
						</div>

						<div className="project-card" style={{ padding: '32px', backgroundColor: '#fafafa' }}>
							<h3 style={{ fontSize: '18px', marginBottom: '16px' }}>{t('7cd8cc1140')}</h3>
							<p style={{ fontSize: '14px', color: '#666' }}>하스스톤#33537</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				style={{
					minHeight: '60vh',
					padding: '120px 48px',
					backgroundColor: '#1a1a1a',
					color: '#fafafa',
				}}
			>
				<div
					style={{
						maxWidth: '900px',
						margin: '0 auto',
					}}
				>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: '#666',
							marginBottom: '16px',
						}}
					>
						12 — Contact
					</p>

					<h2
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(32px, 5vw, 48px)',
							fontWeight: 300,
							marginBottom: '60px',
						}}
					>
						Contact
					</h2>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
							gap: '24px',
						}}
					>
						<a
							href="mailto:riroan@naver.com"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('fd61ef6507')}
						</a>

						<a
							href="https://riroan.tistory.com"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('76b5550d8c')}
						</a>

						<a
							href="https://www.instagram.com/dding_gi_98"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('dd95a7137b')}
						</a>

						<a
							href="https://github.com/riroan"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('5f37ad7846')}
						</a>

						<a
							href="https://www.linkedin.com/in/riroan/"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('1ffb0f1615')}
						</a>

						<a
							href="https://www.acmicpc.net/user/riroan"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('459b12e1f1')}
						</a>

						<a
							href="https://solved.ac/profile/riroan"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('1070ba1d4e')}
						</a>

						<a
							href="https://codeforces.com/profile/riroan"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('4a3c941612')}
						</a>

						<a
							href="https://atcoder.jp/users/riroan"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('f6003e126a')}
						</a>

						<a
							href="https://profiles.topcoder.com/riroan"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
							style={{
								fontSize: '16px',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							{t('df23d19230')}
						</a>
					</div>

					<div
						style={{
							marginTop: '120px',
							paddingTop: '40px',
							borderTop: '1px solid #333',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							flexWrap: 'wrap',
							gap: '20px',
						}}
					>
						<span
							style={{
								fontSize: '13px',
								color: '#666',
							}}
						>
							© 2024 riroan. All rights reserved.
						</span>
						<span
							style={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: '18px',
								letterSpacing: '2px',
							}}
						>
							riroan
						</span>
					</div>
				</div>
			</section>
			<UtilitySetMinimal />
		</div>
	)
}
