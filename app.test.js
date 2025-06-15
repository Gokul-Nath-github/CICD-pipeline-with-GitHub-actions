const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('DOM Tests', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync('./index.html', 'utf-8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('Button updates result text', () => {
    const button = document.getElementById('testBtn');
    const result = document.getElementById('result');
    
    button.click();
    expect(result.textContent).toBe('Test Passed!');
  });
});
