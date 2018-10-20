
Home » Blogging » Tutorial » Cara Membuat Blog Safelink Converter Work 100%
Cara Membuat Blog Safelink Converter Work 100%
Dedi Islafuddin Dedi Islafuddin
Maret 18, 2017
SHORT URL

    SHARE

Assalamualaikum...
KENEONO - Dikesempatan kali ini saya akan share Cara Membuat Blog Safelink Converter Work 100%. Apa blog safelink converter itu ?? Yaitu blog untuk mengkonversi atau membuat encypted link untuk semua link dari sebuah blog agar link-link tersebut menjadi aman dengan dikonversi menjadi base64. Dan jika ada pengunjung yang meng-klik link tersebut maka pengunjung akan dibawa ke halaman redirect safelink converter untuk mendapatkan link aslinya. Bagi sobat yang mempunyai blog download sobat bisa membuat blog safelink ini untuk mendapatkan penghasilan tambahan dari iklan yang sobat pasang, seperti yang ada diblog ini.

Demo

Berikut Cara Membuat Blog Safelink Converter Work 100%, simak baik" dengan teliti dibawah ini :

- Pertama silakan buat blog baru dan ganti template Kompiajaib Safelink Converter download Disini. (Jika sobat menggunakan domain TLD silakan hapus script dibawah ini yang ada di template)


var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
if (ctld != ".com") {
var ncr = "https://" + blog.substr(0, blog.indexOf("."));
ncr += ".blogspot.com/ncr" + slug;
window.location.replace(ncr); };


- Jika sobat menggunkan domain blogspot.com maka link url blog yang sobat tulis di htmledit dan di script lainnya gunakan https:// jangan http:// begitu juga dibagian Setelan > Dasar > Pengahilan HTTPS hidupkan.


- Selanjutnya buatlah Laman statis dengan judul Generate dan masukkan script dibawah ini degan mode HTML. setelah itu Publikasikan.


  <div class="text-center margin-bottom-20">
<h3>Advertise</h3>
KODE IKLAN DISINI
  </div>

<div class="row margin-bottom-20">
  <div class="col-md-6">
<div class="panel panel-primary">
    <div class="panel-heading text-center"><h2><i class="fa fa-shield"></i> Safe Link Converter <i class="fa fa-shield"></i></h2></div>
        <div class="panel-body text-center">
          <p class="text-primary margin-bottom-20">Encrypting your link and protect the link from viruses, malware, thief, etc!<br/>Made your link safe to visit.</p>

<div class="progress" id="daplong">
    <div class="progress-bar progress-bar-striped active six-sec-ease-in-out" role="progressbar" data-transitiongoal="100"></div>
</div>
<button id="download2" class="alert alert-dismissible alert-success btn-lg" style='display:none'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <strong>Well done!</strong> you have successfully gained access to Decrypted Link. <i class="fa fa-hand-o-down slideInDownThumb" aria-hidden="true"></i></button>

        </div>
      </div>
</div>
  <div class="col-md-6 text-left">
<div class="panel panel-info">
  <!-- Default panel contents -->
  <div class="panel-heading"><h2><i class="fa fa-question-circle-o" aria-hidden="true"></i> How to use our tool:</h2></div>
  <div class="panel-body">
<ol>
<li>Click on <strong>How To Use</strong> menu above.</li>
<li>Click on the code and <kbd><kbd>CTRL</kbd> + <kbd>C</kbd></kbd> on your keyboard.</li>
<li>Paste the code in your HTML blog theme before the <mark>&lt;/body&gt;</mark>.</li>
<li>Save your HTML blog theme. you are done!</li>
<li>Now, your blog's outbound links was encrypted!</li>
</ol>
  </div>
</div>
</div><div class="clear"></div>
</div>

<div class="row margin-bottom-20">
  <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
  <div class="col-md-4 margin-top-25">
<div class="panel panel-success text-center">
<div class="panel-heading">
<h3 class="panel-title">
<b>Your link show here</b> <i aria-hidden="true" class="fa fa-hand-o-down"></i></h3>
</div>
<div class="panel-body">
<script src="https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js" type="text/javascript"></script>
<script type="text/javascript">
var currentURL=location.href;
var str = currentURL;
var res = str.replace("https://myblogsafelinkku.blogspot.com/p/advertise-kode-iklan-disini-safe-link.html");
document.write('<button type="button" id="download" class="Visit_Link btn btn-success" onclick="changeLink();" style="display: none;"><strong>Visit Link</strong> <i class="fa fa-external-link" aria-hidden="true"></i></button>')
</script>
  </div>
</div>
</div>
 <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
<div class="clear"></div>
</div>

<div class="container">
  <div class="text-left">

  </div>
</div>


- Kemudian buatlah file js silakan copy script dibawah ini ke notepad dan simpan dengan tipe safelink.js (dan jangan lupa ganti url http://www.safelink.ga/p/generate.html dengan url Laman statis yang sudah kita buat tadi ).


