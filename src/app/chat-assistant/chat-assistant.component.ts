import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.css'
})
export class ChatAssistantComponent{

    isChatOpen: boolean = false;
    userInput: string = '';
    selectedQuestion: string = '';
    messages: Array<{ text: string; sender: 'user' | 'bot' }> = [];
  
    // Pre-defined questions and answers
    questions = [
      { text: 'Are you available for projects?', answer: "I'm currently available for new projects!" },
      { text: 'What is your typical response time?', answer: 'I typically respond within 24 hours.' },
      { text: 'How can I contact you?', answer: 'You can contact me via email at amalmathewbiju@gmail.com' },
      { text: 'Can you tell me about your skills?', answer: 'I have experience with Angular, Node.js,React  and more!' },
      { text: 'What are your working hours?', answer: 'I generally work from 9 AM to 6 PM, Monday to Friday.' }
    ];
  
   
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    }

    displayPredefinedAnswer() {
      const selected = this.questions.find(q => q.text === this.selectedQuestion);
      if (selected) {
        this.addMessage('user', this.selectedQuestion);
        this.addMessage('bot', selected.answer);
        this.selectedQuestion = ''; 
      }
    }
  
    // Send message and generate response
    sendMessage() {
      const input = this.userInput.toLowerCase();
      let response = '';
  
      // Define responses based on input
      if (input.includes('hai')|| input.includes('hello')) {
        response = "Hello Welcome ";
      } else if (input.includes('response time')) {
        response = "I typically respond within 24 hours.";
      } else if (input.includes('contact')) {
        response = "You can contact me via email at amalmathewbiju@gmail.com!";
      } else if (input.includes('skills')) {
        response = "I have experience with Angular, Node.js, also React!";
      } else if (input.includes('poda')) {
        response = "Dont say bad words...";
      } 
      else {
        response = "Sorry if you directly message me i will give better response";
      }
  
      // Add user message and response
      this.addMessage('user', this.userInput);
      this.addMessage('bot', response);
      this.userInput = ''; // Clear input field
    }
  
    // Helper function to add messages
    addMessage(sender: 'user' | 'bot', text: string) {
      this.messages.push({ text, sender });
    }
  }