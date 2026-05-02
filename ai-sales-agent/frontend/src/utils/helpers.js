export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getStatusBadgeColor(status) {
  const statusLower = status?.toLowerCase() || '';
  switch (statusLower) {
    case 'new':
      return 'bg-blue-100 text-blue-800';
    case 'analyzed':
      return 'bg-green-100 text-green-800';
    case 'interested':
      return 'bg-purple-100 text-purple-800';
    case 'follow-up':
      return 'bg-yellow-100 text-yellow-800';
    case 'closed':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function truncateText(text, length = 100) {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
