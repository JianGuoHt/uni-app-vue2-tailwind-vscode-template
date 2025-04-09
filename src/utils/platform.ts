const { UNI_PLATFORM } = process.env;

export const platform = UNI_PLATFORM;
export const isH5 = UNI_PLATFORM === 'h5';
export const isApp = UNI_PLATFORM === 'app';
export const isMp = UNI_PLATFORM.startsWith('mp-');

const PLATFORM = {
  platform,
  isH5,
  isApp,
  isMp,
};
export default PLATFORM;
