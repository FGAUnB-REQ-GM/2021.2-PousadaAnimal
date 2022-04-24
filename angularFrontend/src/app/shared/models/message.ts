import { User } from "./user";
import { Hosting } from "./hosting";

export class Message {
    id: number;
    time_sent: string;
    user: string | User;
    hosting: string | Hosting;
    content: string;
}
