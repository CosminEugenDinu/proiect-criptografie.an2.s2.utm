export class Alfabet {
  litere: string[] = [];
  constructor(deLaAsciiCode: number, panaLaAsciiCode: number) {
    for (let cod = deLaAsciiCode; cod < panaLaAsciiCode; cod++) {
      this.litere.push(String.fromCharCode(cod));
    }
  }
  toString() {
    return this.litere.join("");
  }
}