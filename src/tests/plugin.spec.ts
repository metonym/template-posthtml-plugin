import posthtml from 'posthtml';
import plugin from '../';

describe('posthtml-plugin', () => {
  it('matches the snapshot', () => {
    posthtml()
      .use(plugin())
      .process(`<body></body>`)
      .then(result => {
        expect(result.html).toMatchSnapshot();
      });
  });
});
