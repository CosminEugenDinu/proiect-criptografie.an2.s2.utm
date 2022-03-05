import { Alfabet } from "./lib/alfabet";

export default class Cezar {
  private static alfabet = String(new Alfabet(65, 65 + 26));
  private static spatiu = "Q";
  private static indexLitera = (litera: string): number => {
    return Cezar.alfabet.indexOf(litera);
  };
  public static literaDinIndex = (indexLitera: number): string => {
    return Cezar.alfabet.charAt(indexLitera);
  };
  k: number;
  public static eliminaSpatii(mesaj: string): string {
    return mesaj.replace(/ /g, Cezar.spatiu);
  }
  public static adaugaSpatii(mesaj: string): string {
    return mesaj.replace(/Q/g, " ");
  }
  constructor(cheie: number) {
    this.k = cheie;
  }
  cripteaza(mesaj: string): string {
    mesaj = Cezar.eliminaSpatii(mesaj);
    const msCifrat = [];
    for (const litera of mesaj) {
      const x = Cezar.alfabet.indexOf(litera);
      const xCifrat = (x + this.k) % Cezar.alfabet.length;
      msCifrat.push(Cezar.alfabet.charAt(xCifrat));
    }
    return msCifrat.join("");
  }
  decripteaza(msCriptat: string): string {
    const msDecriptat = [];
    const marimeAlfa = Cezar.alfabet.length;
    for (const litera of msCriptat) {
      const x = Cezar.indexLitera(litera);
      let xDecifrat: number;
      if (this.k > x) {
        xDecifrat = marimeAlfa - (Math.abs(x - this.k) % marimeAlfa);
      } else {
        xDecifrat = (x - this.k) % marimeAlfa;
      }
      const literaDec = Cezar.literaDinIndex(xDecifrat);
      msDecriptat.push(literaDec);
    }
    return Cezar.adaugaSpatii(msDecriptat.join(""));
  }
}
