import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
	homeOutline,
	homeSharp,
	addOutline,
	addSharp,
	languageOutline,
	languageSharp,
	calculatorOutline,
	calculatorSharp,
	personOutline,
	personSharp,
} from "ionicons/icons";
import "./Menu.css";
import { Routes } from "@/App.types";

interface AppPage {
	ID: string;
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		ID: crypto.randomUUID(),
		title: "Página Inicial",
		url: Routes.HOME,
		iosIcon: homeOutline,
		mdIcon: homeSharp,
	},
	{
		ID: crypto.randomUUID(),
		title: "Sumadora",
		url: Routes.SUM,
		iosIcon: addOutline,
		mdIcon: addSharp,
	},
	{
		ID: crypto.randomUUID(),
		title: "Traductor de Números a Letras",
		url: Routes.TRANSLATOR,
		iosIcon: languageOutline,
		mdIcon: languageSharp,
	},
	{
		ID: crypto.randomUUID(),
		title: "Tabla de Multiplicar",
		url: Routes.MULTIPLICATION,
		iosIcon: calculatorOutline,
		mdIcon: calculatorSharp,
	},
	{
		ID: crypto.randomUUID(),
		title: "Experiencia Personal",
		url: Routes.EXPERIENCE,
		iosIcon: personOutline,
		mdIcon: personSharp,
	},
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Inbox</IonListHeader>
					<IonNote>hi@ionicframework.com</IonNote>
					{appPages.map((appPage) => {
						return (
							<IonMenuToggle key={appPage.ID} autoHide={false}>
								<IonItem
									className={
										location.pathname === appPage.url ? "selected" : ""
									}
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon
										aria-hidden="true"
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
