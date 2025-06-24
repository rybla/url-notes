export const do_ = <A>(k: () => A) => k();

export const encodeURIComponent_better = (s: string) =>
  encodeURIComponent(s.replaceAll(/(\.|:|_|\/)/g, "_")).slice(0, 225);
