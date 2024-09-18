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

				<div className="page_container" id="experience-page">
					<h1>Mi experiencia realizando esta tarea</h1>

					<div>
						<a
							className="primary_link"
							target="_blank"
							rel="noopener noreferrer"
							href="/"
						>
							Ver en YouTube
						</a>
						<a
							className="primary_link"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/Adrydevmateo/tarea-3"
						>
							Ver Código
						</a>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
}
