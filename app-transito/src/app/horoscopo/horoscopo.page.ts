import { Component } from '@angular/core';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.page.html',
  styleUrls: ['./horoscopo.page.scss'],
})
export class HoroscopoPage {

  signoUsuario: string = '';
  horoscopoUsuario: string = '';

  horoscopos: { [key: string]: string } = {
    aries: "Hoy es un buen día para tomar decisiones audaces. La suerte está de tu lado.",
    tauro: "Se avecinan cambios positivos en el trabajo. Mantén la calma y sé persistente.",
    geminis: "Es un día ideal para comunicarte con amigos y familiares. Expresa tus sentimientos.",
    cancer: "Enfrenta los desafíos con determinación. Tu energía te llevará lejos.",
    leo: "Tu creatividad está en su punto máximo hoy. Aprovecha para trabajar en proyectos personales.",
    virgo: "Focaliza en tu bienestar. Pequeños cambios en tu rutina pueden marcar la diferencia.",
    libra: "Concéntrate en las relaciones cercanas. Un amigo necesitará tu apoyo.",
    escorpio: "La intuición te guiará hoy. Confía en tus instintos.",
    sagitario: "Explora nuevas ideas y aventuras. La curiosidad te abrirá puertas.",
    capricornio: "Organiza tus metas a largo plazo. La disciplina te llevará al éxito.",
    acuario: "Colabora con otros para alcanzar objetivos comunes. El trabajo en equipo es clave.",
    piscis: "Cuida tu energía emocional. Dedica tiempo para el autocuidado y la relajación."
  };

  obtenerHoroscopo() {
    const signoMinusculas = this.signoUsuario.toLowerCase();

    if (this.horoscopos[signoMinusculas]) {
      this.horoscopoUsuario = this.horoscopos[signoMinusculas];
    } else {
      this.horoscopoUsuario = "Lo siento, no se pudo encontrar el horóscopo para ese signo. Por favor, verifica la entrada.";
    }
  }
}

