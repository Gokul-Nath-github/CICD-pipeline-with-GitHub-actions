const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('DOM Tests', () => {
  let dom;
  let document;
  let window;

  beforeAll(() => {
    const html = fs.readFileSync('./main.html', 'utf-8');
    dom = new JSDOM(html, {
      runScripts: "dangerously",  
      resources: "usable"        
    });
    
    document = dom.window.document;
    window = dom.window;
    return new Promise(resolve => {
      window.addEventListener('load', resolve);
    });
  });
  test('Button click updates result text', async () => {
    const button = document.getElementById('testBtn');
    const result = document.getElementById('result');
    const clickEvent = new window.MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    button.dispatchEvent(clickEvent);
    expect(result.textContent).toBe('Test Passed!');
  });
});
