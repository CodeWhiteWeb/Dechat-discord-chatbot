declare module "discord-chatbot" {
  export class Chatbot {
    constructor(ops: object);
    public chat(message: string): Promise<String>;
  }
}
//more ts commingTM
