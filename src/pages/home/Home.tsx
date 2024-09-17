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
import ProfilePicture from "@assets/images/profile.jpg";

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
				<div className="page_container" id="home-page">
					<div className="home__content">
						<h1 className="title">Adry Mateo Ramon</h1>
						<h2 className="subtitle muted">adrydevmateo@gmail.com</h2>

						<div className="home__links">
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
								href="https://dashboard.ionicframework.com/preview/50704d43/mnqy7tc2rr"
							>
								Vista previa de la aplicación
							</a>
						</div>
					</div>
					<img
						className="rounded_img"
						src={ProfilePicture}
						alt="Foto 2x2"
						width={600}
					/>
				</div>
			</IonContent>
		</IonPage>
	);
}
