// Lightweight className combiner without external deps
export function cn(...inputs) {
  return inputs.flat(Infinity).filter(Boolean).join(' ');
}
