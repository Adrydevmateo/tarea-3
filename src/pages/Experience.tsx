import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

export default function Experience() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle size="small">Experiencia Personal</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
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
