import { Alfabet } from "./lib/alfabet"

export default class Subst {
  private static alfabet = String(new Alfabet(65, 65 + 26));
  private static spatiu = "Q";
  private static eliminaSpatii = (mesaj: string): string => {
    return mesaj.replace(/ /g, Subst.spatiu);
  }
  private static adaugareSpatii = (mesaj: string): string => {
    return mesaj.replace(RegExp(Subst.spatiu, "g"), " ");
  }
  public static alfabetCifrare = (parola: string): string => {
    const alfaCript = new Set(); 
    for (const litera of parola) {
      alfaCript.add(litera)
    }
    for (const litera of Subst.alfabet) {
      alfaCript.add(litera);
    }
    return Array.from(alfaCript.values()).join('');
  }
  public static permutaAlfabet = (alfabet: string): string => {
    return Array.from(alfabet).reverse().join('');
  }

  parola: string;
  constructor(parola: string) {
    this.parola = parola;
  }

  cripteaza(mesaj: string): string {
    mesaj = Subst.eliminaSpatii(mesaj);
    const alfaCifr = Subst.alfabetCifrare(this.parola);
    const alfaCifrPerm = Subst.permutaAlfabet(alfaCifr);
    const mesajCifrat = [];
    for (const litera of mesaj) {
      const x = Subst.alfabet.indexOf(litera);
      const literaCifrata = alfaCifrPerm[x];
      mesajCifrat.push(literaCifrata);
    }
    return mesajCifrat.join('');
  }

  decripteaza(criptat: string): string {
    const alfaCifr = Subst.alfabetCifrare(this.parola);
    const alfaCifrPerm = Subst.permutaAlfabet(alfaCifr);
    const mesaj = [];
    for (const litera of criptat) {
      const x = alfaCifrPerm.indexOf(litera);
      const literaDescifrata = Subst.alfabet[x];

      mesaj.push(literaDescifrata);
    }
    return Subst.adaugareSpatii(mesaj.join(''));
  }
}