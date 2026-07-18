import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string, context?: string): void {
    console.log(`[${context || 'APP'}] ${message}`);
  }

  error(message: string, error?: unknown, context?: string): void {
    console.error(`[${context || 'APP'}] ${message}`, error);
  }

  warn(message: string, context?: string): void {
    console.warn(`[${context || 'APP'}] ${message}`);
  }
}
