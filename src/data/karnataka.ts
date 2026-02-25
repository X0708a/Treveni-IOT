export const karnatakaDistricts = [
  'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mandya', 'Tumakuru', 'Shivamogga', 'Mangaluru (Dakshina Kannada)',
  'Udupi', 'Chikkamagaluru', 'Hassan', 'Kodagu', 'Chitradurga', 'Davanagere', 'Ballari', 'Koppal', 'Raichur',
  'Kalaburagi', 'Yadgir', 'Bidar', 'Belagavi', 'Vijayapura', 'Bagalkot', 'Gadag', 'Dharwad', 'Haveri', 'Uttara Kannada'
];

export type DistrictKpi = {
  district: string;
  farms: number;
  complianceRate: number; // percentage
  incidents: number;
};

export const sampleDistrictKpis: DistrictKpi[] = karnatakaDistricts.map((d, i) => ({
  district: d,
  farms: 300 + (i * 23) % 250,
  complianceRate: 82 + (i * 3) % 17,
  incidents: (i * 2) % 9
}));

export const stateSummary = {
  totalFarms: 12485,
  compliance: 89.2,
  activeOutbreaks: 7,
  fieldPersonnel: 458
};
