import {
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
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
					<IonTitle>Experiencia Personal</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<div className="page_container">
					<h1>Mi experiencia realizando esta tarea</h1>
					<br />
					<IonCard>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/bn8W7454JaM?si=9_LAGEGy6LH3OPM6"
							title="Tarea 3 - Explorando IONIC o React con un Proyecto Creativo"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
						<IonCardHeader>
							<IonCardTitle>
								Tarea 3 - Explorando IONIC o React con un Proyecto Creativo
							</IonCardTitle>
							<IonCardSubtitle>
								Explicando el proceso de la creación de la aplicación
							</IonCardSubtitle>
						</IonCardHeader>

						<IonCardContent>
							<a
								className="primary_link"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.youtube.com/watch?v=bn8W7454JaM"
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
						</IonCardContent>
					</IonCard>
				</div>
			</IonContent>
		</IonPage>
	);
}
