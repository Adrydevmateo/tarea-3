import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Translator.css";

// TODO: Ingresen un número del 1 al 1000 y muestren ese número en letras en español. (No se permite el uso de APIs; la pérdida de puntos aplicará si se detecta su uso).

export default function Translator() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Traductor de Números a Letras</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Traductor de Números a Letras</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="page_container">
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
