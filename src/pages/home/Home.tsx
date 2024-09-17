import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Home.css";

// TODO: Muestren sus datos personales, incluyendo una foto 2x2, nombre, apellido y correo electrónico.

export default function Home() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Página Inicial</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Página Inicial</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div id="container">
					<strong>qwe</strong>
					<p>
						Explore{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://ionicframework.com/docs/components"
						>
							UI Components
						</a>
					</p>
				</div>
			</IonContent>
		</IonPage>
	);
}
