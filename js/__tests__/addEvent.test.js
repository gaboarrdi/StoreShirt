import { addEvents } from '../addEvent.js';

test('addEvents', () => {
  document.body.innerHTML = `
    <img id="img1" src="./IMG/foto1.png" alt="" srcset="">`;

  const image = document.querySelector('#img1');

  jest.spyOn(image, 'addEventListener').mockImplementationOnce();

  addEvents(image, 'image');
  expect(image.addEventListener).toHaveBeenCalledTimes(2);
});
