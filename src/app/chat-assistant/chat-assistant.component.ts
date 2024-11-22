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

// isChatOpen: boolean = false; // Controls chat window visibility
// selectedQuestion: string = '';
// answer: string = '';

// // Pre-defined questions and answers
// questions = [
//   { text: 'Are you available for projects?', answer: "I'm currently available for new projects!" },
//   { text: 'What is your typical response time?', answer: 'I typically respond within 24 hours.' },
//   { text: 'How can I contact you?', answer: 'You can contact me via email at [your email]!' },
//   { text: 'Can you tell me about your skills?', answer: 'I have experience with Angular, Node.js, and more!' },
//   { text: 'Can you tell me about your skills?', answer: 'I have experience with Angular, Node.js, and more!' }
// ];

// toggleChat() {
//   this.isChatOpen = !this.isChatOpen; // Toggle chat window
// }

// displayAnswer() {
//   const selected = this.questions.find(q => q.text === this.selectedQuestion);
//   this.answer = selected ? selected.answer : '';
// }
// }{ {
  
    isChatOpen: boolean = false;
    userInput: string = '';
    selectedQuestion: string = '';
    messages: Array<{ text: string; sender: 'user' | 'bot' }> = [];
  
    // Pre-defined questions and answers
    questions = [
      { text: 'Are you available for projects?', answer: "I'm currently available for new projects!" },
      { text: 'What is your typical response time?', answer: 'I typically respond within 24 hours.' },
      { text: 'How can I contact you?', answer: 'You can contact me via email at amalmathewbiju@gmail.com' },
      { text: 'Can you tell me about your skills?', answer: 'I have experience with Angular, Node.js, and more!' },
      { text: 'What are your working hours?', answer: 'I generally work from 9 AM to 6 PM, Monday to Friday.' }
    ];
  
    // Toggle chat window visibility
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    }
  
    // Display answer for predefined question
    displayPredefinedAnswer() {
      const selected = this.questions.find(q => q.text === this.selectedQuestion);
      if (selected) {
        this.addMessage('user', this.selectedQuestion);
        this.addMessage('bot', selected.answer);
        this.selectedQuestion = ''; // Clear the dropdown selection
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
        response = "You can contact me via email at [your email]!";
      } else if (input.includes('skills')) {
        response = "I have experience with Angular, Node.js, and more!";
      }else if (input.includes('myr')|| input.includes('oomb')|| input.includes('umb')) {
        response = "poda myre ninte thanthae chenn vilikk";
      } else if (input.includes('poda')) {
        response = "Ninte Veettil poi viliku suhurthae";
      } 
      else {
        response = "Sorry I can't understand please contact me";
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