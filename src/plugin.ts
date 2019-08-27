import { PostHTMLTree } from 'posthtml';

function plugin() {
  return function posthtmlPlugin(tree: PostHTMLTree) {
    return tree;
  };
}

export { plugin };
