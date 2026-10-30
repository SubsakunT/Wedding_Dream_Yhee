// แก้ข้อมูลหลักของงานได้จาก CONFIG ด้านล่างนี้
const CONFIG = {
  bride: "หยี",
  groom: "ดรีม",
  // รูปแบบวันที่สำหรับนับถอยหลัง: YYYY-MM-DDTHH:MM:SS
  weddingDate: "2027-01-09T07:00:00",
  dateText: "วันเสาร์ที่ 9 มกราคม 2570",
  month: "๋JANUARY",
  day: "09",
  year: "2027",
  venue: "โรงสีพยัคฆภูมิสัย",
  address: "555 บ้านหนองฮี ตำบลหนองนาคำ อำเภอพยัคฆภูมิสัย จังหวัดมหาสารคาม",
  mapUrl: "https://maps.google.com/?q=ชื่อสถานที่จัดงาน",
  hashtag: "#YheeDreamWedding"
};

// ใส่ข้อมูล CONFIG ลงในตำแหน่งที่มี data-config
document.querySelectorAll("[data-config]").forEach(el => {
  const key = el.dataset.config;
  if (CONFIG[key] !== undefined) el.textContent = CONFIG[key];
});
document.getElementById("mapLink").href = CONFIG.mapUrl;

// Countdown
const target = new Date(CONFIG.weddingDate).getTime();
function updateCountdown() {
  let diff = Math.max(0, target - Date.now());
  const values = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// เพลง: เบราว์เซอร์จะอนุญาตให้เล่นหลังผู้ใช้กดปุ่ม
const audio = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicToggle");
musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicButton.innerHTML = "♫ <span>ปิดเพลง</span>";
    } catch (e) {
      alert("กรุณาตรวจสอบไฟล์เพลงใน assets/music/wedding-song.mp3");
    }
  } else {
    audio.pause();
    musicButton.innerHTML = "♫ <span>เปิดเพลง</span>";
  }
});
