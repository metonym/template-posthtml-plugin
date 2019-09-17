import { PostHTML } from 'posthtml';

function plugin() {
  return function posthtmlPlugin(tree: PostHTML.Node) {
    return tree;
  };
}

export { plugin };
