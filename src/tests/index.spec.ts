import posthtml from 'posthtml';
import { plugin } from '../';

describe('PostHTML plugin', () => {
  test('plugin matches snapshot', () => {
    posthtml()
      .use(plugin())
      .process(`<body></body>`)
      .then((result: { html: string }) => {
        expect(result.html).toMatchSnapshot();
      });
  });
});
