import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
    case 'compliant':
    case 'healthy':
      return 'text-success-600 bg-success-50'
    case 'warning':
    case 'pending':
      return 'text-warning-600 bg-warning-50'
    case 'critical':
    case 'non-compliant':
    case 'outbreak':
      return 'text-danger-600 bg-danger-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}