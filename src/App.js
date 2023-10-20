import logo from "./logo.svg";
import "./App.css";
import portfolioLogo from "./assets/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<>
			<div class="container">
				<div class="blob-c">
					<div class="shape-blob"></div>
					<div class="shape-blob one"></div>
					<div class="shape-blob two"></div>
					<div class="shape-blob three"></div>
					<div class="shape-blob four"></div>
					<div class="shape-blob five"></div>
					<div class="shape-blob six"></div>
					<div class="shape-blob seven"></div>
				</div>
				<div>
					<h1>Hi! I'm Beata</h1>
					<h1>A Frontend Developer</h1>
				</div>
			</div>
			<div class="single-scroll-down-animation animation1">
				<div class="scroll-down1">
					<FontAwesomeIcon className="icon" icon={faArrowDown} />
				</div>
			</div>
		</>
		// <div className="App">
		// 	<div className="main-page-header">
		// 		<h1>Hi! I'm Beata</h1>
		// 		<h1>A Frontend Developer</h1>
		// 	</div>
		// 	<img src={portfolioLogo} alt="Logo" height={440} width={440} />
		// </div>
	);
}

export default App;
