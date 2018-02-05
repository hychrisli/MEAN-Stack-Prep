import { Message } from "./messages/message.model";
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
      new Message ('some message', 'Chris'),
      new Message ('another message', 'Chris'),
      new Message ('3rd message', 'Chris')
    ]
}