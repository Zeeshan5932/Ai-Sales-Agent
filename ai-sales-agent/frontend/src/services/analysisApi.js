import { apiPost } from './api';

export async function createPitch(data) {
  return apiPost('/pitch/', data);
}

export async function createCallScript(data) {
  return apiPost('/calls/script', data);
}
