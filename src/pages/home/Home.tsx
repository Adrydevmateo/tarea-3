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
import "./Home.css";
import ProfilePicture from "../../assets/profile.jpg";

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
				<div className="page_container" id="home-page">
					<IonCard className="home__card">
						<img src={ProfilePicture} alt="Foto 2x2" width={600} />
						<div>
							<IonCardHeader>
								<IonCardTitle>Adry Mateo Ramon</IonCardTitle>
								<IonCardSubtitle>adrydevmateo@gmail.com</IonCardSubtitle>
							</IonCardHeader>

							<IonCardContent>
								<p>
									Soy un aprendiz permanente, que amplía constantemente sus
									conocimientos y se mantiene al tanto de las últimas tendencias
									en desarrollo front-end. ¡Colaboremos y hagamos realidad su
									visión!
								</p>

								<br />

								<div>
									<a
										className="primary_link"
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/Adrydevmateo/tarea-3"
									>
										Repositorio del proyecto
									</a>
									<a
										className="primary_link"
										target="_blank"
										rel="noopener noreferrer"
										href=""
									>
										Vista previa de la aplicación
									</a>
								</div>
							</IonCardContent>
						</div>
					</IonCard>
				</div>
			</IonContent>
		</IonPage>
	);
}
