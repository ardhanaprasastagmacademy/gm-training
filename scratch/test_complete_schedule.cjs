const schedule = {
  '2026-11-23': [
    { slug: 'durasi-pkl-smk-6-bulan-hingga-1-tahun', time: '10:00:00+07:00' },
    { slug: 'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux', time: '09:30:00+07:00' },
    { slug: 'pkl-bdp-malang-belajar-digital-marketing', time: '09:15:00+07:00' },
    { slug: 'tempat-magang-teknik-informatika-malang', time: '09:00:00+07:00' }
  ],
  '2026-11-24': [
    { slug: 'magang-mahasiswa-sistem-informasi-malang', time: '10:00:00+07:00' },
    { slug: 'contoh-jurnal-harian-pkl-smk', time: '09:30:00+07:00' },
    { slug: 'tempat-pkl-multimedia-malang-content-creation-video-desain-digital', time: '09:00:00+07:00' },
    { slug: 'rekomendasi-tempat-magang-mahasiswa-malang', time: '08:30:00+07:00' }
  ],
  '2026-11-25': [
    { slug: 'persyaratan-pkl-rpl', time: '10:00:00+07:00' },
    { slug: 'skill-dasar-rpl-sebelum-pkl', time: '09:30:00+07:00' },
    { slug: 'dokumen-pkl-siswa-smk', time: '09:15:00+07:00' },
    { slug: 'cv-pkl-siswa-smk-rpl', time: '09:00:00+07:00' }
  ],
  '2026-11-26': [
    { slug: 'kegiatan-pkl-rpl', time: '10:00:00+07:00' },
    { slug: 'contoh-tugas-harian-pkl-rpl', time: '09:30:00+07:00' },
    { slug: 'ide-proyek-pkl-rpl', time: '09:15:00+07:00' },
    { slug: 'persiapan-hari-pertama-pkl', time: '09:00:00+07:00' }
  ],
  '2026-11-27': [
    { slug: 'bimbingan-mentor-magang', time: '10:00:00+07:00' },
    { slug: 'penilaian-sertifikat-magang', time: '09:30:00+07:00' },
    { slug: 'magang-gratis-atau-berbayar', time: '09:15:00+07:00' },
    { slug: 'studi-kasus-radar-kediri', time: '09:00:00+07:00' }
  ],
  '2026-11-28': [
    { slug: 'cara-daftar-magang-informatika', time: '10:00:00+07:00' },
    { slug: 'checklist-guru-mitra-pkl', time: '09:30:00+07:00' },
    { slug: 'magang-pariwisata-malang', time: '09:15:00+07:00' },
    { slug: 'jurusan-magang-pariwisata', time: '09:00:00+07:00' }
  ],
  '2026-11-29': [
    { slug: 'magang-seo-specialist-digital-business-analytics', time: '09:00:00+07:00' }
  ]
};

let count = 0;
const seen = new Set();
for (const [date, items] of Object.entries(schedule)) {
  console.log(`Date ${date}: ${items.length} articles`);
  for (const item of items) {
    if (seen.has(item.slug)) {
      console.error(`DUPLICATE SLUG: ${item.slug}`);
    }
    seen.add(item.slug);
    count++;
  }
}

console.log(`Total distributed: ${count}`);
console.log(`Unique slugs: ${seen.size}`);
