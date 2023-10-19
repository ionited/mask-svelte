import { Mask } from '@ionited/mask';

export function mask(node: HTMLInputElement, parameters?: any) {
  const mask = Mask(node, parameters);

  return {
    destroy() {
      mask.instance.destroy();
    }
  }
}
