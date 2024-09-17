import {
	IonApp,
	IonRouterOutlet,
	IonSplitPane,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "@components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Custom Styles */
import "@assets/stylesheets/main.css";

import { Routes } from "@/App.types";
import Home from "@pages/home";
import Sum from "./pages/sum";
import Translator from "./pages/translator";
import Mul from "./pages/mul";
import Experience from "./pages/experience";

setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true}>
							<Redirect to={Routes.HOME} />
						</Route>
						<Route path={Routes.HOME} exact={true}>
							<Home />
						</Route>
						<Route path={Routes.SUM} exact={true}>
							<Sum />
						</Route>
						<Route path={Routes.TRANSLATOR} exact={true}>
							<Translator />
						</Route>
						<Route path={Routes.MULTIPLICATION} exact={true}>
							<Mul />
						</Route>
						<Route path={Routes.EXPERIENCE} exact={true}>
							<Experience />
						</Route>
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
