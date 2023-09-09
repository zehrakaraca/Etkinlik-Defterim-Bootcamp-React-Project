import React from 'react'
import BannerImage from '../assets/concert.jpg';
import "../styles/Blog.css";

function Blog() {
  return (
    <div className="blog">
      <div className="blogTop" style={{backgroundImage: `url(${BannerImage})`}}>  </div>
      <div className="blogBottom">
        <h1>Önerilen Etkinlikler</h1>
        <p> İzmir'in kültür ve sanat sahnesi bu Eylül ayında dopdolu! Şehir, birbirinden çeşitli etkinliklerle dolup taşıyor. İşte bu ay kaçırmamanız gereken üç harika etkinlik:

        Salih Korkut Peker Konseri (01 Eylül 2023)
        İzmir'in müzik sahnesinin vazgeçilmezi Salih Korkut Peker, 01 Eylül 2023 tarihinde Urladam'da sahne alıyor. Bu ücretsiz konserde, Türk müziğinin sevilen şarkılarını canlı performansıyla dinleme şansı yakalayacaksınız. Saat 19:00'da başlayacak olan konser, hem gençlerin hem de ailelerin keyifli bir akşam geçirmesi için harika bir seçenek.

        92. İEF - İzmir Aşkına Müzikali (02 Eylül 2023)
        İzmir Enternasyonal Fuarı her yıl olduğu gibi bu yıl da unutulmaz etkinliklere ev sahipliği yapıyor. "İzmir Aşkına" adlı müzikal, 02 Eylül 2023 tarihinde Kültürpark Atatürk Açıkhava Tiyatrosu'nda sahnelenecek. Bu gösteriyi izlemek için bilet almanız gerekebilir, ancak bu deneyim için ödediğiniz her kuruşa değecek. Saat 21:00'de başlayacak olan müzikal, dans, müzik ve eğlence dolu bir gece vaat ediyor.

        Yeniden Sinematek - Suç Bende (06 Eylül 2023)
        Sinema tutkunları için harika bir fırsat! Yeniden Sinematek, 06 Eylül 2023 tarihinde Tarihi Havagazı Fabrikası'nda "Suç Bende" adlı filmi gösteriyor. Saat 21:00'de başlayacak olan bu etkinlik ücretsiz ve unutulmaz bir sinema deneyimi sunacak. Film tutkunları için bu gösterim kaçırılmamalı. Eski ve yeni filmleri seven herkes için mükemmel bir seçenek.

       İzmir, sanatın ve kültürün bir araya geldiği bir merkez haline gelmeye devam ediyor. Bu etkinlikler, hem yerel halka hem de şehri ziyaret edenlere keyifli anlar ve sanat dolu deneyimler sunuyor. Müzik, tiyatro ve sinema severler için bu etkinlikleri kaçırmamak, unutulmaz bir Eylül ayı geçirmek anlamına geliyor. İzmir'in bu zengin sanatsal mirasıyla tanışın ve sanat dolu bir yolculuğa çıkın!
        </p>
      </div>
    </div>
  )
}

export default Blog
