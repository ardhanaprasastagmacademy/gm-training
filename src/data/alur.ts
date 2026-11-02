export interface TahapAlur {
  nomor: number;
  judul: string;
  deskripsi: string;
  siapa: string;
  waktu: string;
  jalur: "smk" | "mahasiswa" | "keduanya";
  catatan?: string;
}

export const dataAlurPendaftaran: TahapAlur[] = [
  {
    nomor: 1,
    judul: "Cek Persyaratan dan Pilih Bidang Program",
    deskripsi:
      "Pelajari kriteria tiap jalur (SMK atau Mahasiswa) dan tentukan bidang kejuruan yang selaras dengan keahlian, program studi, atau jurusan di sekolah/kampus kamu.",
    siapa: "Calon Peserta",
    waktu: "1–3 hari",
    jalur: "keduanya",
    catatan: "Pastikan membaca detail ketentuan dan kualifikasi di halaman Program.",
  },
  {
    nomor: 2,
    judul: "Siapkan Dokumen Administrasi",
    deskripsi:
      "Kumpulkan seluruh berkas persyaratan: CV terbaru, surat pengantar resmi dari sekolah/fakultas, transkrip nilai/rapor terakhir, serta surat persetujuan orang tua/wali khusus bagi siswa di bawah 18 tahun.",
    siapa: "Calon Peserta & Pihak Sekolah/Kampus",
    waktu: "2–5 hari kerja",
    jalur: "keduanya",
    catatan: "Template surat dan formulir dapat diunduh gratis di menu Pusat Unduhan.",
  },
  {
    nomor: 3,
    judul: "Isi Formulir Pendaftaran Online",
    deskripsi:
      "Akses formulir resmi melalui tautan di halaman Daftar. Masukkan data identitas diri secara teliti, unggah tautan portofolio/dokumen pendukung, dan submit sebelum batas akhir pendaftaran batch.",
    siapa: "Calon Peserta",
    waktu: "15–30 menit",
    jalur: "keduanya",
    catatan: "Pastikan nomor WhatsApp yang didaftarkan aktif pada ponsel utama kamu.",
  },
  {
    nomor: 4,
    judul: "Seleksi Administrasi dan Uji Kompetensi",
    deskripsi:
      "Tim penilai bersama mentor industri memeriksa kelengkapan berkas serta portofolio karya. Untuk beberapa posisi teknis, kandidat akan diundang mengikuti asesmen dasar atau wawancara singkat.",
    siapa: "Tim Seleksi & Mentor Industri",
    waktu: "5–7 hari kerja",
    jalur: "keduanya",
  },
  {
    nomor: 5,
    judul: "Pengumuman Hasil Seleksi",
    deskripsi:
      "Peserta yang lolos akan dihubungi secara langsung melalui nomor WhatsApp resmi panitia. Kami tidak mempublikasikan nama lengkap peserta secara terbuka di website demi perlindungan privasi data pribadi.",
    siapa: "Penyelenggara Program",
    waktu: "Sesuai kalender batch",
    jalur: "keduanya",
    catatan: "Pastikan nomor WhatsApp kamu selalu aktif dan dapat menerima pesan konfirmasi.",
  },
  {
    nomor: 6,
    judul: "Konfirmasi & Penandatanganan Komitmen",
    deskripsi:
      "Peserta yang dinyatakan diterima melakukan konfirmasi kehadiran dan menandatangani lembar komitmen magang bersama guru/dosen pembimbing serta orang tua/wali (bagi siswa SMK).",
    siapa: "Peserta, Pembimbing Sekolah/Kampus & Penyelenggara",
    waktu: "2–3 hari kerja",
    jalur: "keduanya",
  },
  {
    nomor: 7,
    judul: "Orientasi & Onboarding di Tempat Magang",
    deskripsi:
      "Peserta mengikuti pembekalan etika kerja, budaya industri, dan pengenalan alur kerja oleh pembimbing industri (mentor) sebelum mulai menjalankan penugasan harian.",
    siapa: "Peserta & Mentor Industri Mitra",
    waktu: "Hari pertama magang",
    jalur: "keduanya",
  },
  {
    nomor: 8,
    judul: "Pelaksanaan Magang, Evaluasi & Penerbitan Sertifikat",
    deskripsi:
      "Menjalankan tugas sesuai jadwal, mengisi logbook mingguan, mendapatkan evaluasi berkala dari mentor dan guru/dosen pembimbing, hingga presentasi luaran akhir serta penerbitan sertifikat resmi.",
    siapa: "Peserta, Mentor Industri & Guru/Dosen Pembimbing",
    waktu: "3–6 bulan (sesuai jalur)",
    jalur: "keduanya",
    catatan: "Laporan akhir diserahkan kepada pihak sekolah/kampus sebagai bukti pemenuhan PKL atau penilaian akademik.",
  },
];

