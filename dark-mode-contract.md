# Dark Mode Contract

## 1. Scope

Contract nay ap dung cho cac khu vuc dark mode dang bi bao loi:

- Sign up free
- Support / FAQ
- Customer reviews / Testimonials
- Price / Pricing
- Form / Contact
- Blog
- Footer

Pham vi file lien quan:

- `index.html`
- `views/blog.html`
- `views/doc.html`
- `views/support.html`
- `src/css/input.css`
- `src/css/output.css`
- `src/css/style.css`
- `src/js/main.js`

## 2. Hien trang

Dark mode duoc kich hoat bang class `.dark` tren the `<html>`.

Tailwind da build dark utilities vao `src/css/output.css`, vi du:

- `.dark\:bg-\[\#1C2136\]`
- `.dark\:bg-\[\#262B40\]`
- `.dark\:border-\[\#2D2F40\]`
- `.dark\:text-white`

`index.html` da gan nhieu class dark cho cac section custom, vi du:

- `signup-free dark:bg-[#1C2136]`
- `support dark:bg-none dark:bg-[#1C2136]`
- `testimonials dark:bg-[#1C2136]`
- `pricing dark:bg-[#1C2136]`
- `contact dark:bg-none dark:bg-[#1C2136]`
- `blog dark:bg-[#1C2136]`
- `footer dark:bg-[#1C2136]`

Tuy nhien cac mau sang trong `src/css/style.css` van thang tren giao dien nen nhieu thanh phan khong doi sang dark.

## 3. Root Cause

### RC-01: CSS load order lam Tailwind dark utilities bi override

Tat ca page dang load CSS theo thu tu:

1. `src/css/output.css`
2. `src/css/style.css`

Dark utilities nam trong `output.css`, con cac selector BEM custom nam trong `style.css`.

Vi `style.css` duoc load sau, cac rule co cung specificity se override Tailwind dark utility. Vi du:

- `.signup-free__title { color: #181c31; }` override `dark:text-white`
- `.signup-free__container { background-image: linear-gradient(...); }` override `dark:bg-*`
- `.pricing__card { background-color: #ffffff; }` override `dark:bg-[#262B40]`
- `.blog__card { background-color: #ffffff; }` override `dark:bg-[#262B40]`
- `.footer { background-color: #ffffff; }` override `dark:bg-[#1C2136]`

### RC-02: Nhieu component custom dung hard-coded light colors

`src/css/style.css` chua co dark-state rieng cho cac class custom. Cac mau nen, chu, border dang hard-code:

- Background: `#ffffff`, `#f8f9ff`, gradient light
- Text: `#181c31`, `#111827`, `#757693`, `#6b7280`
- Border: `#e8eaf0`, `#f3f4f6`

Khi toggle `.dark`, cac selector custom nay khong tu doi mau neu khong co rule `.dark ...` tuong ung.

### RC-03: Nut toggle tren page con khong co id nen khong gan duoc listener

`src/js/main.js` chi bind click vao:

```js
document.getElementById('theme-toggle-btn')
```

`index.html` co `id="theme-toggle-btn"`, nhung cac page con chi co:

```html
<button aria-label="theme toggler">
```

Anh huong:

- `views/blog.html`
- `views/doc.html`
- `views/support.html`

Ket qua: page con co the doc `localStorage.theme` khi load, nhung click vao icon theme tren page con khong toggle duoc.

### RC-04: Footer cua page con thieu dark classes

Footer trong `views/blog.html`, `views/doc.html`, `views/support.html` van la:

```html
<footer class="footer" id="footer">
```

Va cac phan tu con nhu `footer__logo-text`, `footer__link`, `footer__newsletter-input` khong co dark utility. Vi vay footer page con khong co contract dark mode nhu footer trong `index.html`.

## 4. Component Contract

### Sign up free

Expected dark:

- Section background: `#1C2136`
- CTA container: `#262B40`
- Border: `#2D2F40`
- Title: white
- Description: gray-400
- Button: van dam bao contrast tren nen dark

Current blocker:

- `.signup-free__container`, `.signup-free__title`, `.signup-free__desc` trong `style.css` override dark utility.

### Support / FAQ

Expected dark:

- Section background: `#1C2136`
- FAQ item background: `#262B40`
- Border: `#2D2F40`
- Question text/icon: white
- Answer text: gray-400
- Highlight underline phai giam sang hoac doi sang mau phu hop dark

Current blocker:

- `.support`, `.support__title`, `.support__link`, `.faq-item`, `.faq-item__question`, `.faq-item__answer p` hard-code light colors.

### Customer reviews / Testimonials

Expected dark:

- Section background: `#1C2136`
- Card background: `#262B40`
- Card border/divider: `#2D2F40`
- Name/title: white
- Role/body: gray-400
- Slider dots co contrast ro trong dark

Current blocker:

- `.testimonials`, `.testimonials__card`, `.testimonials__title`, `.testimonials__card-name`, `.testimonials__card-divider`, `.slick-dots` hard-code light colors.

### Price / Pricing

Expected dark:

- Section background: `#1C2136`
- Card background: `#262B40`
- Border/top divider: `#2D2F40`
- Price/package/features: white or gray-400 theo muc uu tien
- Disabled features: gray-500

Current blocker:

- `.pricing`, `.pricing__card`, `.pricing__title`, `.pricing__currency`, `.pricing__amount`, `.pricing__pack-name`, `.pricing__feature`, `.pricing__card-bottom` hard-code light colors.

### Form / Contact

Expected dark:

- Section background: `#1C2136`
- Form wrapper background: `#262B40`
- Border/input underline: `#2D2F40`
- Input text/title: white
- Placeholder/description: gray-400
- Focus border: primary blue

Current blocker:

- `.contact`, `.contact__form-wrapper`, `.contact__form-title`, `.contact__input`, `.contact__textarea`, `.contact__info-title`, `.contact__info-label` hard-code light colors.

### Blog

Expected dark:

- Section background: `#1C2136`
- Blog card background: `#262B40`
- Border if needed: `#2D2F40`
- Title: white
- Body: gray-400

Current blocker:

- `.blog`, `.blog__card`, `.blog__title`, `.blog__card-title`, `.blog__card-text` hard-code light colors.

### Footer

Expected dark:

- Footer background: `#1C2136`
- Brand/heading/email: white
- Link/body/copyright: gray-400
- Newsletter field background: `#262B40`
- Border/top divider: `#2D2F40`

Current blocker:

- `style.css` footer rules override dark utility in `index.html`.
- Footer trong page con khong co dark utility.

## 5. Implementation Contract

Khuyen nghi fix theo huong on dinh nhat:

1. Giu `output.css` la file generated tu Tailwind, khong sua tay.
2. Them dark-state selectors vao `src/css/style.css` cho cac BEM custom, vi file nay dang load sau va la source cua component custom.
3. Dung selector dang:

```css
.dark .component,
.dark .component__child {
    ...
}
```

4. Khong dua dark mode cua BEM custom vao HTML utility neu selector BEM trong `style.css` van load sau.
5. Them `id="theme-toggle-btn"` cho theme button trong `views/blog.html`, `views/doc.html`, `views/support.html`, hoac doi JS sang bind theo selector `[aria-label="theme toggler"]`.
6. Dong bo footer markup dark classes giua `index.html` va cac page con, hoac bo phu thuoc HTML utility bang dark selectors trong `style.css`.

## 6. Acceptance Criteria

Dark mode duoc xem la dat khi:

- Toggle theme tren `index.html` doi mau dung cho 7 section trong scope.
- Toggle theme tren `views/blog.html`, `views/doc.html`, `views/support.html` hoat dong truc tiep khi click icon.
- Reload page van giu theme theo `localStorage.theme`.
- Cac text chinh trong section dat contrast doc duoc tren nen dark.
- Khong con nen trang trong card/form/footer khi `<html>` co class `.dark`.
- Footer tren index va cac page con co cung behavior dark mode.
- Build CSS bang `npm run build` khong lam mat cac class/rule dark mode.

## 7. Test Plan

Manual checks:

1. Mo `index.html`.
2. Click theme toggle sang dark.
3. Kiem tra Sign up free, Support, Testimonials, Pricing, Contact, Blog, Footer.
4. Reload page, dam bao van dark.
5. Mo `views/blog.html`, click theme toggle, kiem tra blog list va footer.
6. Mo `views/doc.html`, click theme toggle, kiem tra document section va footer.
7. Mo `views/support.html`, click theme toggle, kiem tra form support va footer.
8. Toggle lai light, dam bao mau light khong bi anh huong.

Build checks:

```bash
npm run build
```

Browser checks:

- Desktop width: 1440px
- Tablet width: 768px
- Mobile width: 390px

## 8. Definition of Done

- `style.css` co dark selectors cho tat ca component custom trong scope.
- Theme toggle co cung behavior tren tat ca HTML page.
- Footer duoc dong bo dark mode tren index va page con.
- Khong sua tay `output.css` ngoai viec generate lai bang Tailwind CLI.
- Khong co regression ve layout light mode.
- Da ghi lai ket qua build/manual test trong PR hoac commit note.
