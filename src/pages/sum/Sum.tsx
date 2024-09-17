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
import type { FormEvent } from "react";

// TODO: Una página donde se puedan sumar dos números y mostrar el resultado.

export default function Sum() {
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const x = Number(formData.get("x"));
		if (!x) alert("Por favor introduce el primer número");

		const y = Number(formData.get("y"));
		if (!y) alert("Por favor introduce el primer número");

		const result = document.getElementById("resultado") as HTMLElement;
		result.innerHTML = String(x + y);
	}

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
				<div className="page_container" id="sum-page">
					<form onSubmit={handleSubmit}>
						<div className="form-field">
							<label htmlFor="x">Ingresa el primer número</label>
							<input type="number" name="x" id="x" />
						</div>

						<div className="form-field">
							<label htmlFor="y">Ingresa el segundo número</label>
							<input type="number" name="y" id="y" />
						</div>

						<button type="submit">Sumar</button>
					</form>
					<hr />
					<h1>
						Resultado: <span id="resultado"> </span>
					</h1>
				</div>
			</IonContent>
		</IonPage>
	);
}
