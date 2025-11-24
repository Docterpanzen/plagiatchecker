import { Injectable } from '@angular/core';

export type UploadedTextFile = {
  file: File;
  content?: string;
  cleanedContent?: string;
  useCleaned?: boolean;
  isLoading: boolean;
  error?: string;
  isOpen?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class PlagiarismSessionService {
  // Eine gemeinsame Array-Instanz, die im ganzen Programm verwendet wird
  readonly files: UploadedTextFile[] = [];

  clear() {
    this.files.length = 0; // Array leeren, aber Referenz behalten
  }
}
