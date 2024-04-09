import { Mask } from '@ionited/mask';

export function mask(node: HTMLInputElement, parameters?: any) {
  let mask: any;

  if (parameters) mask = Mask(node, parameters);

  return {
    update(parameters?: any) {
      mask?.instance.destroy();
      
      if (parameters) mask = Mask(node, parameters);
    },

    destroy() {
      mask?.instance.destroy();
    }
  }
}
