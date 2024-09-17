import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Experience.css";

// TODO: Una página donde muestren un video de YouTube explicando su experiencia al realizar esta tarea. En el video deben aparecer en una esquina su rostro mientras explica, y no debe durar más de 5 minutos.

export default function Experience() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Experiencia Personal</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Experiencia Personal</IonTitle>
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
