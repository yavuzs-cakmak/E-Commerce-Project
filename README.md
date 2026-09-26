# Bandage E-Commerce Platform

Bandage, React ve Vite altyapısı kullanılarak "Mobile First" yaklaşımıyla geliştirilmiş kapsamlı bir e-ticaret uygulamasıdır. Figma tasarım dosyalarına birebir sadık kalınarak, özel CSS sınıfları kullanılmadan tamamen Tailwind CSS (Flex Layout) ile inşa edilmiştir.

## 🛠 Geliştirme Süreci ve İş Akışı

Projenin planlanması ve geliştirme aşamaları GitHub Projects üzerinde oluşturulan bir Kanban panosu üzerinden profesyonel bir metodoloji ile yürütülmüştür.

* **Kanban Akışı:** Görevler "Sprint Backlog", "In progress", "In review" ve "Done" sütunları arasında ilerletilerek projenin durumu anlık olarak takip edilmiştir. Panoda "T01: Project Setup", "T02: Home Page", "T11: Auto login by token from localStorage" gibi belirli görev (task) kartları kullanılmıştır.
* **Takım Çalışması:** Projenin kodlanması ve Pull Request (PR) işlemlerinin oluşturulması tarafımca gerçekleştirilmiştir. Yazılım Geliştirici **[Buse Çalışkan](https://github.com/busecllskn)** ile birlikte çalışılarak, açılan PR'ların kod incelemesi (Code Review) yapılmış ve ana dala (main) Merge/Push işlemleri ekip içi standartlara uygun olarak tamamlanmıştır.

## 💻 Teknoloji Yığını

* **Core:** React, Vite
* **Routing:** React Router v5 (Tüm sayfalarda tek bir Header ve Footer bileşeni render edilecek şekilde yapılandırılmıştır)
* **State Management:** Vanilla Redux, Redux Thunk, Redux Logger
* **Styling:** Tailwind CSS, Lucide React (İkonlar)
* **Form Management:** React Hook Form
* **HTTP Client:** Axios (Özelleştirilmiş `axiosInstance` ile)
* **Bildirimler ve UI:** React Toastify, React Gravatar
* **Deployment:** Vercel / Render / Netlify

## ⚙️ Uygulama Mimarisi ve Layout Yönetimi

Uygulama, NextJS layout mimarisinden ilham alınarak modüler bir yapıda kurgulanmıştır. Tüm yönlendirmeler (routing) `PageContent` adında merkezi bir kapsayıcı içinde gerçekleşir.

* **Header & Footer:** Sistemde sadece tek bir Header ve tek bir Footer bileşeni vardır. Sayfa geçişlerinde bu bileşenler yeniden render edilmez veya renk değiştirmez.
* **Klasör Yapısı:**
  * `src/components/` (ProductCard, Slider gibi tekrarlanan bileşenler)
  * `src/layout/` (Header, Footer, PageContent)
  * `src/pages/` (HomePage, ShopPage, ProductDetailPage, ContactPage, TeamPage, AboutUsPage, SignUpPage, LoginPage)

## 🔐 Kimlik Doğrulama ve Form Validasyonları

Kullanıcı kayıt (`/signup`) ve giriş (`/login`) işlemleri Postman ile test edilmiş REST API uç noktaları (`https://workintech-fe-ecommerce.onrender.com`) üzerinden gerçekleştirilmektedir. Formlar `react-hook-form` ile denetlenir.

**Kayıt Ol (Sign Up) Kuralları:**
* **Ad (Name):** En az 3 karakter olmalıdır.
* **Şifre (Password):** En az 8 karakter uzunluğunda olmalı; rakam, küçük harf, büyük harf ve özel karakter içermelidir. Ayrıca ikinci şifre doğrulama alanıyla eşleşmelidir.
* **Rol (Role):** `/roles` endpoint'inden asenkron (Thunk) olarak çekilen verilerle dinamik doldurulur. Varsayılan olarak "Customer" (Müşteri) seçilidir.
* **Mağaza (Store) Senaryosu:** Eğer kullanıcı "Store" rolünü seçerse;
  * Mağaza Adı (Min 3 karakter)
  * Mağaza Telefonu (Geçerli Türkiye telefon formatı)
  * Vergi Numarası (`TXXXXVXXXXXX` regex desenine uygun)
  * Banka Hesabı (Geçerli IBAN formatı) bilgileri zorunlu olarak istenir.
* Gönderim esnasında buton pasif (disabled) duruma geçer ve içinde bir spinner döner.
* Başarılı kayıtta kullanıcı önceki sayfaya yönlendirilir ve e-posta onayı için Toast mesajı gösterilir.

**Giriş Yap (Log In) Kuralları:**
* Thunk aksiyonu ile çalışır. Başarılı girişte kullanıcı bilgileri Redux store'a (Client Reducer) yazılır.
* Header bileşeninde kullanıcının profil fotoğrafı Gravatar (e-posta hash'lemesi) kullanılarak gösterilir.
* "Beni Hatırla" seçili ise Token `localStorage`'a kaydedilir.
* **Auto-Login:** Sayfa yenilendiğinde, `localStorage`'daki token kontrol edilerek kullanıcı oturumu otomatik olarak geri yüklenir.

## 🗃️ Redux Mimari Yapısı

Proje, genişleyebilir bir global state yönetimi için Vanilla Redux ve Redux Thunk ile aşağıdaki standart yapıya göre kurulmuştur:

### 1. Client Reducer
Kullanıcı ve uygulama ayarlarını tutar.
* `user`: {Object} Kullanıcı bilgileri
* `addressList`: {Array} Kullanıcının kayıtlı adresleri
* `creditCards`: {Array} Kullanıcının kayıtlı kredi kartları
* `roles`: {Array} API'den çekilen rol listesi
* `theme`: {String} Tema ayarı
* `language`: {String} Dil ayarı

### 2. Product Reducer
Ürün listeleme, filtreleme ve sayfalama işlemlerini yönetir.
* `categories`: {Array}
* `productList`: {Array}
* `total`: {Number} Toplam ürün sayısı
* `limit`: {Number} Sayfa başına ürün (Varsayılan: 25)
* `offset`: {Number} Sayfalama (Pagination) için atlama değeri (Varsayılan: 0)
* `filter`: {String} Arama/Filtreleme metni
* `fetchState`: {String} API durum bayrağı ("NOT_FETCHED", "FETCHING", "FETCHED", "FAILED")

### 3. ShoppingCart Reducer
Kullanıcının sepet ve ödeme aşamalarını yönetir.
* `cart`: {Array} Sepetteki ürünler (Örn: `[{ count: 1, product: { id: "1235", ... } }]`)
* `payment`: {Object} Ödeme bilgileri
* `address`: {Object} Teslimat / Fatura adresi

## 🚀 Kurulum

1. Repoyu klonlayın:
   ```bash
   git clone
   Bağımlılıkları yükleyin:

Bash
npm install
Proje ana dizininde bir .env dosyası oluşturun ve temel API adresini tanımlayın:

Kod snippet'i
VITE_API_URL=[https://workintech-fe-ecommerce.onrender.com](https://workintech-fe-ecommerce.onrender.com)
Geliştirme sunucusunu başlatın:

Bash
npm run dev
 ```bash 
### 👥 Ekip
**[Gökhan Özdemir](https://github.com/gokhanozdemir)** - Project Manager

Yavuz Selim Çakmak - Full Stack Developer

**[Buse Çalışkan](https://github.com/busecllskn)** - Full Stack Developer
