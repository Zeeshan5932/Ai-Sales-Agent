import { apiGet, apiPost } from './api';

export async function createLead(data) {
  console.log('createLead request payload:', data);
  return apiPost('/leads/', data);
}

export async function getLeads() {
  return apiGet('/leads/');
}

export async function getLead(id) {
  return apiGet(`/leads/${id}`);
}

export async function analyzeLead(id) {
  return apiPost(`/analysis/${id}`, {});
}
