import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Sum.css";

// TODO: Una página donde se puedan sumar dos números y mostrar el resultado.

export default function Sum() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Sumadora</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Sumadora</IonTitle>
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
