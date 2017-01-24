export class Player {
  public points: number = 5;
  public choice: number = 0
  public success: boolean = false;
  public message: string = "";
  constructor(public name: string, public height: number, public adventure: number){}
}
