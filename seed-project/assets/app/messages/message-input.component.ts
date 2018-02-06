
import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})


export class MessageInputComponent{
  constructor(private messageSerivce : MessageService) {
    
  }
  
  onSave(val : string) {
    const message = new Message(val, 'Chris');
    this.messageSerivce.addMessage(message);
  }
}