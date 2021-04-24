export const encoder = new TextEncoder();
export const encode = encoder.encode.bind(encoder);
export const decoder = new TextDecoder();
export const decode = decoder.decode.bind(decoder);
