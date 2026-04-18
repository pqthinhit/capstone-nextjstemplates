# Mô tả chi tiết giao diện section Testimonials

## 1. Mục tiêu section
Section này là khu vực hiển thị **testimonials / feedback của khách hàng** trên landing page.  
Phong cách tổng thể: **sạch, hiện đại, nhiều khoảng trắng, tone sáng**, nhấn mạnh tiêu đề ở giữa và phần nội dung feedback dạng **slider / carousel** có thể lướt qua nhiều item.

## 2. Bố cục tổng thể
Section được căn giữa theo chiều ngang, gồm 3 phần chính theo thứ tự từ trên xuống:

### 2.1. Badge nhỏ phía trên
- Một badge/pill đặt ở chính giữa.
- Nội dung: `TESTIMONIALS`
- Nền màu xanh rất nhạt / xám xanh nhạt.
- Chữ in hoa, đậm vừa, màu xanh đậm.
- Bo góc tròn lớn kiểu pill.
- Kích thước nhỏ, chỉ đóng vai trò label cho section.

### 2.2. Tiêu đề section
- Tiêu đề chính nằm chính giữa: **Client’s Testimonials**
- Font lớn, đậm, màu xanh navy / xanh đen.
- Đây là điểm nhấn lớn nhất của phần header.

### 2.3. Mô tả ngắn
- Một đoạn mô tả 2 dòng nằm dưới tiêu đề, căn giữa.
- Màu chữ xám xanh nhạt hơn tiêu đề.
- Độ rộng vừa phải, không full width, giúp phần đầu nhìn thoáng.
- Nội dung trong ảnh hiện là placeholder lorem ipsum.

## 3. Khu vực feedback/testimonial
Đây là phần quan trọng nhất của section.

### 3.1. Kiểu hiển thị
- Hiển thị dưới dạng **2 card testimonial song song** trên desktop.
- Các card đặt trên cùng một hàng.
- Có khoảng cách giữa 2 card khá rộng.
- Tổng thể giống một **carousel nhiều item**, trong đó tại 1 thời điểm đang show 2 feedback.

### 3.2. Card testimonial
Mỗi card có các đặc điểm:

#### Hình thức
- Nền trắng hoặc trắng ngà rất nhẹ.
- Bo góc mềm.
- Có đổ bóng rất nhẹ hoặc tách nền tinh tế.
- Padding bên trong khá rộng, tạo cảm giác cao cấp và thoáng.

#### Cấu trúc bên trong card
Card gồm 3 phần dọc từ trên xuống:

##### a) Phần header card
- Bên trái:
  - Tên người feedback, ví dụ: `Devid Smith`, `Jhon Abraham`
  - Dòng dưới là chức danh / role, ví dụ: `Founter @democompany`
- Bên phải:
  - Ảnh avatar tròn
  - Avatar có kích thước nhỏ đến vừa
  - Ảnh được đặt lệch về phía góc phải trên của card

##### b) Đường phân cách
- Một đường line ngang mảnh, màu xám rất nhạt.
- Chạy gần full chiều ngang phần content card.

##### c) Nội dung feedback
- Đoạn text testimonial dài khoảng 3–4 dòng.
- Màu chữ xám xanh trung tính.
- Căn trái.
- Font dễ đọc, line-height thoáng.

## 4. Hành vi slider/carousel
Phần user có nhấn mạnh “fb có chỗ lướt qua”, nên phần này cần mô tả rõ trong task.

### 4.1. Tính chất
- Khu vực feedback là **slider/carousel**.
- Người dùng có thể **lướt/chuyển qua các testimonial khác**.
- Ở desktop hiện tại đang thấy:
  - 2 card trên 1 slide view
  - Bên dưới có indicator thể hiện đang ở slide nào

### 4.2. Indicator
- Nằm chính giữa phía dưới khu vực card.
- Có 3 chấm / 3 thanh nhỏ đại diện cho các slide.
- Trong ảnh:
  - 2 dot màu xám nhạt
  - 1 dot/indicator màu xanh đang active
- Active state là màu xanh dương nổi bật.

### 4.3. Kỳ vọng tương tác
Cần ghi rõ cho dev như sau:
- Slider phải hỗ trợ:
  - auto slide hoặc manual slide
  - kéo/lướt ngang trên mobile
  - bấm vào dot để chuyển slide nếu có yêu cầu
- Nên có animation chuyển slide mượt.
- Nếu dùng auto slide:
  - thời gian chuyển gợi ý 3–5 giây
  - pause khi hover trên desktop nếu cần
- Nếu không auto:
  - vẫn cần swipe trên mobile và có dot indicator

### 4.4. Số lượng item hiển thị
- Desktop: 2 card / lần hiển thị
- Tablet/mobile: nên responsive thành 1 card / lần hiển thị
- Phải hỗ trợ nhiều feedback hơn số đang thấy trong ảnh

## 5. Nút scroll-to-top
Ở góc phải dưới của màn hình có 1 nút nổi:

- Dạng hình vuông bo góc nhẹ.
- Màu xanh dương.
- Icon mũi tên hướng lên màu trắng.
- Chức năng: **scroll về đầu trang**.
- Đây là phần nằm nổi trên giao diện, không hẳn thuộc riêng testimonial, nhưng đang xuất hiện cùng màn hình này.

Nếu giao task tổng thể trang thì nên note:
- Nút fixed ở góc phải dưới.
- Có shadow nhẹ.
- Chỉ hiện khi scroll xuống một đoạn nhất định.

## 6. Màu sắc cảm nhận từ ảnh
Không cần fix tuyệt đối, nhưng có thể giao theo style guide sau:

- **Background section:** trắng / xám rất nhạt
- **Primary text:** xanh navy đậm
- **Secondary text:** xám xanh
- **Badge background:** xanh nhạt
- **Active dot + scroll top button:** xanh dương sáng
- **Divider:** xám nhạt



## 8. Khoảng cách và alignment
- Toàn section có rất nhiều khoảng trắng phía trên và giữa các khối.
- Header căn giữa hoàn toàn.
- Phần cards căn giữa theo container.
- Nội dung trong card căn trái.
- Avatar căn phải trong card header.
- Khoảng cách giữa header section và phần cards khá lớn, tạo cảm giác premium.

## 9. Mô tả task có thể giao thẳng cho dev
Bạn có thể copy đoạn này để giao việc:

**Task: Build section Testimonials theo UI mẫu**
- Tạo section testimonial trên landing page.
- Phần đầu section gồm:
  - 1 badge “TESTIMONIALS” dạng pill ở giữa
  - tiêu đề lớn “Client’s Testimonials”
  - 1 đoạn mô tả ngắn căn giữa, tối đa 2 dòng
- Bên dưới là carousel feedback:
  - desktop hiển thị 2 testimonial card trên 1 hàng
  - mỗi card gồm: tên, chức danh/company, avatar hình tròn, divider, nội dung feedback
  - card bo góc, nền sáng, shadow nhẹ
- Có dot indicator ở dưới slider, hiển thị trạng thái slide active
- Slider cần hỗ trợ lướt/chuyển qua các feedback khác:
  - mobile hỗ trợ swipe ngang
  - desktop có thể auto slide hoặc hỗ trợ điều hướng bằng dot
  - animation chuyển slide mượt
- Responsive:
  - desktop: 2 card
  - mobile: 1 card


## 10. Ghi chú cần làm rõ khi implement
Có vài chi tiết từ ảnh chưa đủ để xác định 100%, nên khi giao task nên chốt thêm:
- Slider có auto chạy hay không => Không
- Có nút prev/next hay chỉ dùng swipe + dots
- Số lượng testimonial thực tế là bao nhiêu  => 2
- Khi responsive tablet sẽ show 1 hay 2 card => 1
