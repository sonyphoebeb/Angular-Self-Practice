import { Highlight } from './highlight';
import { ElementRef } from '@angular/core';

describe('Highlight', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as ElementRef;
    const directive = new Highlight(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
