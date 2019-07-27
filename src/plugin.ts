import { ITree } from 'posthtml';

function plugin() {
  return function posthtmlPlugin(tree: ITree) {
    return tree;
  };
}

export { plugin };
