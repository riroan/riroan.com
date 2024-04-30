import React from 'react'
import { useSelector } from 'react-redux'
import A from './components/A'
import Assist from './components/Assist'
import Div from './components/Div'
import H1 from './components/H1'
import H2 from './components/H2'
import Item from './components/Item'
import DateTime from './components/DateTime'
import P from './components/P'
import TechStack from './components/TechStack'
import Refer from './components/Refer'
import Ul from './components/Ul'
import Link from './components/Link'
import UtilitySet from './components/UtilitySet'
import './App.css'
import { useTranslation, Trans } from 'react-i18next'

export default function App() {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const detail = useSelector(state => state.detail.detail)
	const { t } = useTranslation()
	return (
		<div className={['DefaultContainer', darkmode].join(' ')}>
			<div className={'innerContainer'}>
				<Div>
					<H2>
						{t('7943af7b87')}
						<Assist> riroan</Assist>
					</H2>
					<P>
						1998. 09. 09.
						<br />
						Backend Developer
						<br />
						riroan@naver.com
					</P>
				</Div>
				<Div>
					<H2>{t('eb5ef1d22a')}</H2>
					<Ul display={true}>
						<Item depth={1}>{t('2e0cbb47d6')}</Item>
						<Item depth={1}>{t('7f208f8376')}</Item>
						<Item depth={1}>{t('4c1aaa94b1')}</Item>
						<Item depth={1}>{t('80cae4f4db')}</Item>
						<Item depth={1}>{t('f4038fa07c')}</Item>
					</Ul>
				</Div>

				<H1>WORK EXPERIENCES</H1>
				<Div>
					<H2>
						<A href="https://www.kakaocorp.com/page/">{t('0a2ff93ca8')}</A> <Assist>Server Developer,</Assist> <DateTime>2024. 03. -</DateTime>
					</H2>
					<H2>
						<A href="https://www.kakaocorp.com/page/">{t('0a2ff93ca8')}</A> <Assist>Server Developer (Intern),</Assist> <DateTime>2024. 01. - 2024. 02.</DateTime>
					</H2>
					<H2>
						{t('57e3da99f5')} <Assist>Backend Developer,</Assist> <DateTime>2023. 03. - 2023. 12.</DateTime>
					</H2>
				</Div>
				<H1>PROJECTS</H1>
				<Div>
					<H2>
						APAP <Assist>Abnormal Pattern Alarmer Platform,</Assist> <DateTime>2021. 06. - 2021. 12.</DateTime>
					</H2>
					<TechStack>#Python #FastAPI #Pytorch #AWS #Computer Vision #React #Typescript</TechStack>
					<Refer>
						<A href="https://www.youtube.com/watch?v=VJRN_Xnvn_0">Demo</A>
					</Refer>
					<P>
						<A href="https://www.swmaestro.org/sw/bbs/B0000006/view.do?nttId=25024&menuNo=200015&pageIndex=5">소프트웨어 마에스트로 12기에서 수행한 프로젝트</A>입니다. CCTV에서 이상행동을
						감지하면 관리자에게 알림을 보내고 관리자가 직접 이상행동을 정의할 수 있는 프로젝트입니다. Pytorch를 사용하여 AI모델 개발/학습/배포와 Backoffice페이지 개발을 담당했습니다.
					</P>
					<Ul display={detail}>
						<Item display={detail} depth={1}>
							{t('1790d92249')}
						</Item>
						<Item display={detail} depth={1}>
							{t('c60b1c2b97')}
						</Item>
						<Item display={detail} depth={1}>
							{t('12ef35fe5c')}
						</Item>
						<Item depth={1}>{t('40c04ca7f4')}</Item>
						<Ul display={detail}>
							<Item depth={2}>{t('da0063aebf')}</Item>
							<Item depth={2}>{t('07b9cd5e7a')}</Item>
						</Ul>
						<Item depth={1}>{t('ebae4fa95e')}</Item>
						<Ul display={detail}>
							<Item depth={2}>
								<A href="https://github.com/MVIG-SJTU/AlphAction">AlphAction</A>
							</Item>
							<Item depth={2}>
								<A href="https://github.com/ultralytics/yolov5">Yolo V5</A>
							</Item>
							<Item depth={2}>
								<A href="https://github.com/zengwb-lx/Yolov5-Deepsort-Fastreid">Deepsort + FastReid</A>
							</Item>
						</Ul>
						<Item depth={1}>
							<Trans t={t} i18nKey="b70db4b6bd">
								<A href="https://atomicdesign.bradfrost.com/chapter-2/"></A>
							</Trans>
						</Item>
						<Item depth={1}>{t('3898ae82bb')}</Item>
						<Ul display={detail}>
							<Item depth={2}>{t('0f335c363b')}</Item>
							<Item depth={2}>{t('b426109233')}</Item>
						</Ul>
					</Ul>
				</Div>
				<Div>
					<H2>
						MKCloud <DateTime>2023. 01. - 2023. 05.</DateTime>
					</H2>
					<TechStack>#Typescript #React #Java #Spring #MySQL #Nginx #Oracle Cloud #Docker #Github Action</TechStack>
					<Refer>
						<A href="https://cloud.riroan.com/">Site</A> <A href="https://github.com/riroan/MKCloud">Github</A>
					</Refer>
					<P>{t('aaad563e6f')}</P>
					<Ul display={detail}>
						<Item depth={1}>
							<Trans t={t} i18nKey="91ff0ec607">
								<A href="https://riroan.tistory.com/123"></A>
							</Trans>
						</Item>
						<Item depth={1}>
							<Trans t={t} i18nKey="9e23e4d1cc">
								<A href="https://riroan.tistory.com/124"></A>
							</Trans>
						</Item>
						<Item depth={1}>{t('eea9e2270d')}</Item>
						<Item depth={1}>
							<Trans t={t} i18nKey="b85f775faa">
								<A href="https://jwt.io/"></A>
							</Trans>
						</Item>
						<Item depth={1}>{t('2a8b68e180')}</Item>
					</Ul>
				</Div>
				<Div>
					<H2>
						Kunsolved <DateTime>2022. 04. - 2022. 10.</DateTime>
					</H2>
					<TechStack>#Typescript #React #Python #FastAPI #MySQL #AWS #Docker #Github Action</TechStack>
					<Refer>
						<A href="https://bj.riroan.com/">Site</A> <A href="https://github.com/riroan/Kunsolved">Github</A>
					</Refer>
					<P>{t('85c8632fa3')}</P>
					<Ul display={detail}>
						<Item depth={1}>{t('5275aa4a76')}</Item>
						<Item depth={1}>{t('9e6fcd0428')}</Item>
						<Item depth={1}>
							<Trans t={t} i18nKey="67b5ff53fc">
								<A href="https://www.chartjs.org/"></A>
							</Trans>
						</Item>
						<Item depth={1}>{t('e8b73c5fe8')}</Item>
						<Item depth={1}>
							<Trans t={t} i18nKey="e94e03d3a3">
								<A href="https://aws.amazon.com/ko/certificate-manager/"></A>
							</Trans>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>
						Lollang <DateTime>2022. 04.</DateTime>
					</H2>
					<TechStack>#Python</TechStack>
					<Refer>
						<A href="https://playlollang.wonj.in/">Site</A> <A href="https://github.com/riroan/lollang">Github</A>
					</Refer>
					<P>{t('e9fbbf3246')}</P>
					<Ul display={detail}>
						<Item depth={1}>{t('a4f08266bc')}</Item>
						<Item depth={1}>
							<Trans t={t} i18nKey="b050f72248">
								<A href="https://github.com/riroan/lollang/wiki/lollang-Grammar"></A>
							</Trans>
						</Item>
					</Ul>
				</Div>

				<H1>EDUCATION</H1>
				<Div>
					<H2>
						<A href="https://www.konkuk.ac.kr/konkuk/index.do">{t('b77b273bca')}</A> <Assist>{t('6f47aa3042')}</Assist>
					</H2>
					GPA 3.75/4.50 (CSE 3.75/4.50)
				</Div>
				<Div>
					<H2>
						<A href="https://ssls.sen.hs.kr/">{t('879bce12bb')}</A> <Assist>{t('eca4809d9e')}</Assist>
					</H2>
					<Ul display={detail}>
						<Item depth={1}>{t('7e09f00865')}</Item>
						<Item depth={1}>{t('c85c922296')}</Item>
						<Item depth={1}>{t('c1eed5bc97')}</Item>
						<Item depth={1}>{t('0a236ab86f')}</Item>
						<Item depth={1}>{t('9806c430d7')}</Item>
						<Item depth={1}>{t('668d73beac')}</Item>
					</Ul>
				</Div>
				<Div>
					<H2>
						<A href="https://yangkang.sen.ms.kr/">{t('ed5a10dd46')}</A> <Assist>{t('3e00dd6c38')}</Assist>
					</H2>
				</Div>
				<Div>
					<H2>
						<A href="https://yangmok.sen.es.kr/">{t('4dd85a8789')}</A> <Assist>{t('3e00dd6c38')}</Assist>
					</H2>
					<Ul display={detail}>
						<Item depth={1}>{t('1655bfd10d')}</Item>
						<Item depth={1}>{t('1fa589f622')}</Item>
					</Ul>
				</Div>

				<H1>SKILLS</H1>
				<Div>
					<H2>Programming Languages</H2>
					<TechStack>#Python #C++ #Javascript #Typescript #Java</TechStack>
				</Div>
				<Div>
					<H2>Frameworks</H2>
					<TechStack>#FastAPI #Django #Spring #React</TechStack>
				</Div>
				<Div>
					<H2>AI</H2>
					<TechStack>#TensorFlow #Keras #Computer Vision</TechStack>
				</Div>
				<Div>
					<H2>DevOps</H2>
					<TechStack>#Docker #Docker-Compose #Kubernetes #Github Action #Nginx</TechStack>
				</Div>
				<Div>
					<H2>Mathematics</H2>
					<TechStack>#Number Theory #Calculus #Abstract Algebra #Linear Algebra</TechStack>
				</Div>

				<H1>ACHIEVEMENTS</H1>
				<Div>
					<H2>
						<A href="https://icpc.global/">ICPC</A> <Assist>International Collegiate Programming Contest</Assist>
					</H2>
					<Ul display={true}>
						<Item depth={1}>
							<A href="https://riroan.tistory.com/88">2022, Asia Seoul Regional Contest</A>
						</Item>
						<Item depth={1}>2018, Asia Seoul Regional Contest</Item>
					</Ul>
				</Div>
				<Div>
					<H2>
						<A href="https://www.facebook.com/codingcompetitions/hacker-cup">Meta Hacker Cup</A>
					</H2>
					<Ul display={true}>
						<Item>2023, Competed in Round 2</Item>
						<Item>
							<A href="https://riroan.tistory.com/85">2022, Competed in Round 2</A>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>
						<A href="https://ucpc.me/">UCPC</A> <Assist>{t('fd42059b90')}</Assist>
					</H2>
					<Ul display={true}>
						<Item>
							<A href="https://riroan.tistory.com/71">
								2022, 41<sup>th</sup> place
							</A>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>{t('5703ef86fc')}</H2>
					<Ul display={true}>
						<Item>
							<A href="https://riroan.tistory.com/166">{t('2b50a2d01e')}</A>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>{t('ec45e1419e')}</H2>
					<Ul display={true}>
						<Item>
							<A href="https://riroan.tistory.com/151">{t('88c76e7c86')}</A>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>
						<A href="https://career.programmers.co.kr/top_programmers/introduce">{t('3f5d3b124c')}</A>
					</H2>
					<Ul display={true}>
						<Item>
							<A href="https://riroan.tistory.com/86">{t('e10bb9ddc4')}</A>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>{t('3dc944de58')}</H2>
					<Ul display={true}>
						<Item>{t('a520cb971c')}</Item>
					</Ul>
				</Div>

				<H1>ALGORITHM EXPERIENCES</H1>
				<Div>
					<H2>
						<A href="https://www.acmicpc.net/user/riroan">{t('7c6fc03ca2')}</A>{' '}
						<Assist>
							문제 해결 수 3800<sup>+</sup>
						</Assist>
					</H2>
					<P>{t('69aa42060f')}</P>
				</Div>
				<Div>
					<H2>
						<A href="https://solved.ac/profile/riroan">{t('5d37da82e2')}</A> <Assist style={{ color: '#00B4FC' }}>Diamond II</Assist>
					</H2>
					<P>{t('f27eded4a9')}</P>
				</Div>
				<Div>
					<H2>
						<A href="https://solved.ac/profile/riroan/arena">{t('4e1e0d7819')}</A>{' '}
						<Assist style={{ color: '#30A1E5' }}>
							<Trans t={t} i18nKey="8de4ecceb6">
								<sup></sup>
							</Trans>
						</Assist>
					</H2>
					<P>{t('1978eb4b0b')}</P>
				</Div>
				<Div>
					<H2>
						<A href="https://codeforces.com/profile/riroan">Codeforces</A> <Assist style={{ color: '#AA00AA' }}>{t('ee90d8cb6f')}</Assist>
					</H2>
					<P>{t('d6e76f1353')}</P>
				</Div>
				<Div>
					<H2>
						<A href="https://atcoder.jp/users/riroan">Atcoder</A> <Assist style={{ color: '#00C0C0' }}>{t('05d8ff4f18')}</Assist>
					</H2>
					<P>{t('473137965e')}</P>
				</Div>
				<Div>
					<H2>
						<A href="https://profiles.topcoder.com/riroan">Topcoder</A> <Assist style={{ color: '#6666FF' }}>{t('bb55c41fa8')}</Assist>
					</H2>
					<P>{t('f0eb7f05da')}</P>
				</Div>
				<Div>
					<H2>
						<A href="https://www.acmicpc.net/category/454">KUPC</A> <Assist>Konkuk University Programming Contest</Assist>
					</H2>
					<P>{t('530fa7ad9c')}</P>
					<Ul display={true}>
						<Item depth={1}>
							<Trans t={t} i18nKey="eea448938a">
								<A href="http://scoreboard.riroan.com/problemset.pdf"></A>
							</Trans>
						</Item>
						<Ul display={detail}>
							<Item depth={2}>{t('3a7e8687a3')}</Item>
							<Item depth={2}>{t('9874255b12')}</Item>
							<Item depth={2}>{t('2ac5268a79')}</Item>
							<Item depth={2}>{t('e164f9d021')}</Item>
						</Ul>
						<Item depth={1}>
							<Trans t={t} i18nKey="564079684c">
								<A href="https://www.acmicpc.net/category/989"></A>
							</Trans>
						</Item>
						<Ul display={detail}>
							<Item depth={2}>
								<A href="https://www.acmicpc.net/problem/30463">{t('b6f1c50fe7')}</A>
							</Item>
							<Item depth={2}>
								<A href="https://www.acmicpc.net/problem/30462">MEXchange</A>
							</Item>
						</Ul>
					</Ul>
				</Div>

				<H1>ACTIVITIES</H1>
				<Div>
					<H2>
						<Trans t={t} i18nKey="3b161a077a">
							<A href="https://fastapi.tiangolo.com/"></A>
						</Trans>{' '}
						<DateTime>2024. 01 - </DateTime>
					</H2>
					<P>
						<Trans t={t} i18nKey="fe7a212f7e">
							<A href="https://github.com/tiangolo/fastapi/pulls?q=is%3Apr+is%3Aclosed+author%3Ariroan"></A>
						</Trans>
					</P>
				</Div>
				<Div>
					<H2>
						<A href="https://www.swmaestro.org/sw/main/main.do">{t('f20ed21cf8')}</A> {t('d3cd603b84')} <DateTime>2021. 06. - 2021. 12.</DateTime>
					</H2>
					<P>{t('1e8bf396d3')}</P>
				</Div>
				<Div>
					<H2>
						{t('da1b06b73d')} <DateTime>2019. 05. - 2020. 12.</DateTime>
					</H2>
					<P>{t('f25db7c579')}</P>
				</Div>

				<H1>CERTIFICATES</H1>
				<Div>
					<H2>
						PCCP Lv4 <Assist>2022. 11.</Assist>
					</H2>
					<P>{t('6244137e69')}</P>
				</Div>
				<Div>
					<H2>
						{t('0ca47e58ef')} <Assist>2022. 09.</Assist>
					</H2>
				</Div>
				<Div>
					<H2>
						OPIC <Assist>2022. 09.</Assist>
					</H2>
					<P>IM2</P>
				</Div>
				<Div>
					<H2>
						TOSC 1급 <Assist>2022. 04.</Assist>
					</H2>
					<P>
						<Trans t={t} i18nKey="8f0f5b6e68">
							<A href="https://tosc.sejong.ac.kr/"></A>
						</Trans>
					</P>
				</Div>
				<Div>
					<H2>
						TOPCIT <Assist>2021. 10.</Assist>
					</H2>
					<P>553점 수준 3 (능숙형)</P>
				</Div>

				<H1>GAMES</H1>
				<Div>
					<H2>{t('15c4d561d9')}</H2>
					<Ul display={true}>
						<Item depth={1}>
							<A href="https://www.op.gg/summoners/kr/%EB%AA%85%EA%B8%B0%EB%AA%85%EA%B8%B0%EA%B9%80%EB%AA%85%EA%B8%B0-KMG">명기명기김명기#KMG</A>
						</Item>
						<Item depth={1}>
							<A href="https://www.op.gg/summoners/kr/%EB%9D%B5%EA%B8%B0%EB%AA%85%EA%B8%B0%EA%B9%80%EB%AA%85%EA%B8%B0-KR1">띵기명기김명기#KR1</A>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>{t('e6db6ba937')}</H2>
					<Ul display={true}>
						<Item depth={1}>
							<A href="https://maple.gg/u/%ED%95%99%EB%8B%A4%EB%A6%AC%EC%A0%91%EA%B8%B0">학다리접기</A>
							<Assist>@{t('55f275bfca')}</Assist>
						</Item>
					</Ul>
				</Div>
				<Div>
					<H2>{t('7cd8cc1140')}</H2>
					<Ul display={true}>
						<Item depth={1}>하스스톤#33537</Item>
					</Ul>
				</Div>

				<H1>CONTACT WITH ME</H1>
				<Div>
					<Link desc="riroan@naver.com">
						<A href="mailto:riroan@naver.com" style={{ color: '#FE0C50' }}>
							{t('fd61ef6507')}
						</A>
					</Link>
					<Link desc="riroan.tistory.com">
						<A href="https://riroan.tistory.com" style={{ color: '#FF5A4A' }}>
							{t('76b5550d8c')}
						</A>
					</Link>
					<Link desc="@dding_gi_98">
						<A href="https://www.instagram.com/dding_gi_98" style={{ color: '#DD2A7B' }}>
							{t('dd95a7137b')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://github.com/riroan" style={{ color: darkmode ? '#E9EAEA' : '#171515' }}>
							{t('5f37ad7846')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://www.linkedin.com/in/riroan/" style={{ color: '#0276A8' }}>
							{t('1ffb0f1615')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://www.acmicpc.net/user/riroan" style={{ color: '#0078C2' }}>
							{t('459b12e1f1')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://solved.ac/profile/riroan" style={{ color: '#17CE3A' }}>
							{t('1070ba1d4e')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://codeforces.com/profile/" style={{ color: '#425E9C' }}>
							{t('4a3c941612')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://atcoder.jp/users/riroan" style={{ color: darkmode ? '#DDDDDD' : '#222222' }}>
							{t('f6003e126a')}
						</A>
					</Link>
					<Link desc="riroan">
						<A href="https://profiles.topcoder.com/riroan" style={{ color: darkmode ? '#D5D5D5' : '#2A2A2A' }}>
							{t('df23d19230')}
						</A>
					</Link>
				</Div>
			</div>
			<UtilitySet />
		</div>
	)
}
