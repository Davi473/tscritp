import { Negociacao } from "./negociacao.js";

export class Negociacoes
{
  //Array<Negociacao>
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao)
  {
    this.negociacoes.push(negociacao);
  }
  // ReadonlyArray<Negociacao>
  public lista (): readonly Negociacao[]
  {
    return this.negociacoes;
  }
}