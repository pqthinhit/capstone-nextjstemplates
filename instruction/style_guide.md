# Style Guide & Design Instructions

Tài liệu này tổng hợp các cài đặt về font chữ, màu sắc, và phong cách thiết kế từ các file hiện hành của dự án (HTML, CSS và JavaScript). Sử dụng tài liệu này như một hướng dẫn thống nhất (Style Guide) để xây dựng các component và giao diện tiếp theo đảm bảo sự nhất quán.

## 1. Typography (Font chữ)
- **Font Face chính:** `'Inter', sans-serif`
  - Font Inter được sử dụng xuyên suốt trên tất cả các thành phần text (tiêu đề, đoạn văn, nút bấm, FAQ, Testimonials,...).
- **Tùy chọn Font Weights phổ biến:**
  - `400` (Regular): Cho văn bản thường, mô tả (`.signup-free__desc`, `.support__answer p`, `.testimonials__desc`).
  - `500` (Medium): Cho chữ trên nút, tab, thẻ thông tin (`.signup-free__btn`, `.support__link`, `.faq-item__question`, thẻ tên tác giả).
  - `600` (Semi-bold): Cho nhãn hiệu (labels, badges) như `OUR FAQS`.
  - `700` (Bold): Cho tất cả các tiêu đề chính (`H2`, `.signup-free__title`, `.support__title`, `.testimonials__title`).

## 2. Color Palette (Bảng màu)

### Text Colors (Màu chữ)
- **Màu chữ chính (Heading / Text nhấn mạnh):** `#181c31` (Đen xanh đậm) hoặc `#111827` (Tailwind gray-900). 
- **Màu mô tả phụ (Body text / Descriptions):** `#757693` hoặc `#6b7280` (Tailwind gray-500).
- **Màu liên kết / Hover:** 
  - Text thường: `#1e2a4a`
  - Text khi Hover / Nhãn phụ: `#3b3a8e`
- **Màu chữ trên nền tối/nút:** `#ffffff` (Trắng).

### Background & Accent Colors (Màu nền & Điểm nhấn)
- **Primary Brand Color (Màu nhấn hệ thống):** `#0066ff` (Sử dụng ở nút chuyển slide đặc biệt, nút Scroll to top). Darker hover state: `#0052cc` hoặc `#2d3e66`.
- **Backgrounds:**
  - Nền trang / Card tĩnh: `#ffffff`.
  - Nền xám nhạt / Vùng xám phụ trợ (Avatar placeholder, Divider): `#f3f4f6`, `#e8eaf0`.
  - Nền xanh nhạt (Badge): `#edf5ff`.
  - Gradient Background (Sign Up section): `linear-gradient(to top, #f8f9ff, #dee7ff)`.
- **Text Highlight Base (Vệt sáng dưới tiêu đề / Support FAQ):** `rgb(255 234 194 / 1)` (Vàng mơ nhạt dán làm gạch chân nổi bật chữ).

## 3. UI Elements & Radius (Cấu trúc bo góc, Viền)
- **Shadows (Đổ bóng):** 
  - Khối tĩnh/Testimonial Card: `box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)`.
  - Nút bấm Hover: `box-shadow: 0 8px 25px rgba(24, 28, 49, 0.2)`.
- **Border Radius (Bo góc):**
  - Section lớn / Nền container chứa lớn: `20px`.
  - Thẻ nhỏ (Cards): `12px`.
  - Nút Form (Buttons / Badges): `9999px` (Bo tròn hoàn toàn kiểu Pill), hoặc `50px`.
  - Icon/Nút nhỏ (Scroll to top): `8px`.
  - Avatar: `50%` (Hình tròn).
- **Đường viền ngăn cách (Border / Divider):**
  - FAQ/Ngăn cách review: `1px solid #e8eaf0` hoặc `#f3f4f6`.

## 4. Layout & Spacing (Bố cục, khoảng cách)
- **Container Max-width:** Các vùng chứa giới hạn hiển thị phổ biến ở mức `1080px` hoặc `1200px` (`max-width: 1080px` hoặc `1200px`), `margin: 0 auto`.
- **Padding Sections phổ thông:** Thường dao động khoảng `80px - 120px` (trên dưới) cho màn hình Desktop, Responsive tự giảm xuống `50px - 60px` ở máy tính bảng (tablet) và di động.
- **Micro-interactions:**
  - Các nút có icon (`<svg>`): Khi hover, icon thường dịch qua xíu (`transform: translateX(4px)`).
  - Nút bấm chính: Hiện ứng nổi khi hover (`transform: translateY(-2px)`).

## 5. Technology Stack (Cấu trúc code tiêu chuẩn & Tech Stack)
- **CSS Framework:** Dự án sử dụng song song **Tailwind CSS v4** (cho Header, layout chung) và **Vanilla CSS BEM (`style.css`)** cho các component chi tiết mang tính chất custom sâu (Sign up, FAQ, Testimonials).
- **UI Components:** **Preline UI** (Được load script và variant từ `preline/dist/preline.js`).
- **Sliders:** **Slick Carousel** thông qua thư viện jQuery (Sử dụng cho custom dots and testimonial cards).
- **HTML structure:** Giữ cấu trúc rõ ràng với các thẻ ngữ nghĩa: `<header>`, `<section>`, comment phân rõ các cục như `<!-- Testimonials -->`, `<!-- Support -->`... Các file custom CSS dùng quy tắc BEM (`.tên-section__con`). 

### Quy trình khi viết tính năng mới:
1. Tiếp tục dùng **Tailwind CSS** cho cấu trúc tổng, khung layout nhanh.
2. Với các hiệu ứng, thẻ tuỳ chỉnh chi tiết, tiếp tục viết vào `style.css` tạo class BEM cụ thể với các biến trị số trùng khớp như bảng phía trên.
3. Luôn bọc padding chuẩn cho `.container` bảo vệ lề khi thiết bị nhỏ lẻ.
4. Đảm bảo hỗ trợ Mobile (Responsive): Giảm bớt font-size Heading từ `30px` -> `24px` hoặc `26px`; đổi layout thành `flex-direction: column` ở các breakpoint màn dọc (`<992px` hoặc `<768px`). 
5. Kế thừa các icon SVG có thuộc tính `stroke-width="1.8"` và `stroke-linecap="round"` để nét thanh nét rõ ràng, đồng nhất.
