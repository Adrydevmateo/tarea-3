import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Mul.css";

// TODO: Un programa que acepte un número y muestre su tabla de multiplicar hasta el 13.

export default function Mul() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Tabla de Multiplicar</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tabla de Multiplicar</IonTitle>
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
