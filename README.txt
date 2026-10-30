วิธีใช้งาน Wedding Invitation บน Vercel

1) แตกไฟล์ ZIP
2) เปลี่ยนรูปภาพใน assets/images โดยใช้ชื่อไฟล์เดิม:
   - cover.jpg      ภาพปกเต็มหน้าจอ
   - venue.jpg      ภาพสถานที่จัดงาน
   - gallery-1.jpg  gallery ภาพที่ 1
   - gallery-2.jpg  gallery ภาพที่ 2
   - gallery-3.jpg  gallery ภาพที่ 3
   แนะนำภาพแนวตั้งสำหรับ gallery และภาพแนวนอน/ภาพใหญ่สำหรับ cover
3) ใส่ไฟล์เพลง MP3 ชื่อ wedding-song.mp3 ใน assets/music/
4) เปิด script.js แล้วแก้ CONFIG: ชื่อ, วันแต่ง, เวลา, สถานที่, ที่อยู่, ลิงก์ Google Maps
   หมายเหตุ: weddingDate ใช้รูปแบบ YYYY-MM-DDTHH:MM:SS และเป็นเวลาท้องถิ่นของเครื่องผู้เข้าชม
5) ทดสอบโดยเปิด index.html ในเบราว์เซอร์
6) Deploy:
   - เข้า vercel.com และ Login
   - Add New > Project
   - Import Git Repository (แนะนำ) หรือใช้ Vercel CLI
   - Framework Preset เลือก Other
   - Build Command และ Output Directory เว้นว่าง/ใช้ค่าเริ่มต้น
   - Deploy

ไม่มี Backend และไม่ต้องตั้งค่า Environment Variables
หมายเหตุ: ลิงก์ต้นฉบับ Canva อ่านรายละเอียดภาพทั้งหมดผ่านตัวอ่านเว็บไม่ได้
ชุดนี้จึงทำเป็นธีมการ์ดแต่งงานโทนครีม-น้ำตาลพร้อมส่วนประกอบที่แก้ไขได้ ไม่ใช่สำเนาพิกเซลต่อพิกเซล
