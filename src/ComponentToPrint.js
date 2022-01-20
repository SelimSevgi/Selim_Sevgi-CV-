import React from "react";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsArrowBarRight,
} from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdSchool, MdWork } from "react-icons/md";
import timelineData from "./timeline.json";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="App">
        <div className="right">
          <div className="name">
            <img src="https://i.hizliresim.com/35iuje1.jpg" />
            <span style={{marginTop:"10px"}}>SELİM SEVGİ</span>
            <span style={{margin:"10px 0" }}>
              ELEKTRİK ve ELEKTRONİK <br />
              MÜHENDİSİ
            </span>
          </div>
          <span className="iletisim">İletİşİm bİlgİlerİ</span>
          <div className="iletisim-items">
            <div className="iletisim-item">
              <HiLocationMarker className="iletisim-icon" />
              <span>Malatya </span>
            </div>
            <div className="iletisim-item">
              <BsFillTelephoneFill className="iletisim-icon" />
              <a style={{ color: "white" }} href="tel:+905315950340">
                +90 531 595 03 40
              </a>
            </div>
            <div className="iletisim-item">
              <AiOutlineMail className="iletisim-icon" />

              <a style={{ color: "white" }} href="mailto:slmsvg44@gmail.com">
                slmsvg44@gmail.com
              </a>
            </div>

            <div className="iletisim-item">
              <BsLinkedin className="iletisim-icon" />
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/selim-sevgi"
              >
                https://www.linkedin.com/in/selim-sevgi
              </a>
            </div>
            <div className="iletisim-item">
              <AiFillGithub className="iletisim-icon" />
              <a
                style={{ color: "white" }}
                href="https://github.com/SelimSevgi"
              >
                https://github.com/SelimSevgi
              </a>
            </div>
          </div>
          <span className="iletisim">EĞİTİM BİLGİLERİ</span>
          <div className="iletisim-items">
            <span>
              <MdSchool className="iletisim-icon" />
              <b>2015 - 2020</b> <br />
              <a style={{ color: "white" }} href="http://www.firat.edu.tr/tr">
                Fırat Üniversitesi
              </a>{" "}
              – Elektrik ve Elektronik Mühendisliği <br />
              <b>(3.34/4.00)</b>
            </span>
            <span>
              <MdSchool className="iletisim-icon" />
              <b>2010 - 2014</b> <br />
              <a
                style={{ color: "white" }}
                href="https://yunusemreeml.meb.k12.tr/tema/index.php"
              >
                Yunus Emre Teknik ve Endüstri Meslek Lisesi
              </a>{" "}
              – Mekatronik Bölümü
              <br />
              <b>(84.61/100)</b>
            </span>
          </div>
          <span className="iletisim">yabancı dİl</span>
          <div className="iletisim-items">
            <span>İngilizce : B1</span>
          </div>
          <span className="iletisim">referanslar</span>
          <div className="iletisim-items">
            <span>
              <b>Prof. Dr. Abdulkadir ŞENGÜR</b>
              <br /> Fırat Üniversitesi – Telekomünikasyon Anabilim Dalı Başkanı
              <br />
              <b>Eposta :</b>{" "}
              <a style={{ color: "white" }} href="mailto:ksengur@firat.edu.tr">
                ksengur@firat.edu.tr
              </a>
            </span>
            <span>
              <b>Prof. Dr. Hüseyin ALTUN </b>
              <br />
              Fırat Üniversitesi – Elektrik Makinaları Anabilim Dalı Başkanı{" "}
              <br />
              <b>Eposta :</b>{" "}
              <a style={{ color: "white" }} href="mailto:haltun@firat.edu.tr">
                haltun@firat.edu.tr
              </a>
            </span>
          </div>
        </div>
        <div className="left">
          <span className="iletisim-right" style={{ marginTop: "5px" }}>
            karİyer
          </span>
          <div className="left-cont">
            <span>
              Elektrik-elektronik projelerine ve yazılıma olan merakım, meslek
              lisesi dönemimde başlayan PLC’i tanıma ve PLC ile programlama
              mesleğimi tercih etmemde ve sevmemde önemli bir etken oldu.
              Yaklaşık 1 senedir e-plan üzerinde pano tasarımı, imalatı ve PLC
              üzerinde çalıştım. Birçok firmada sahada bulundum. 6 ay boyunca
              yazılım kısmında eğitimler alarak AR üzerinde çalışmalarda
              bulundum ve python dilini kullanarak yüz tanıma sistemi projesini
              yaptım. Bilgilerimi ve gelecekte edineceğim bilgilerimi,
              bulunduğum kuruluşun yükselişinde mühendislik disiplini dâhilinde,
              etkin bir şekilde uygulayabileceğim bir ortam arıyorum.
            </span>
          </div>

          <span className="iletisim-right">İŞ deneyİmİ</span>
 
          
          <Timeline/>
          <span className="iletisim-right">kurs / sertİfİka</span>
          <div className="left-cont">
            <span>
              <b>2019</b> - Katılım Belgesi (Tübitak – Erzurum Bölge Sergisi –
              2242 Üniversite Öğrencileri Araştırma Proje Yarışması)
            </span>
            <span>
              <b>2016</b> - Sertifika Belgesi (Amerikan Kültür Eğitim Kurumları
              – İngilizce Dil Kursu) (1 yıl)
            </span>
            <span>
              <b>2014</b> - Katılım Belgesi (Kyk Akademi – Liderlik Semineri) (1
              yıl)
            </span>
            <span>
              <b>2014</b> - Katılım Belgesi (Kyk Akademi – Farkındalık
              Konferansı) (1 yıl)
            </span>
            <span>
              <b>2013</b> - Katılım Belgesi (7. Uluslararası Robot Yarışması)
            </span>
          </div>
          <span className="iletisim-right">projeler / ÇalıŞmalar</span>
          <div className="left-items">
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>
                Efficiency Challenge Elektrikli Araç Yarışları Elektromobil
                Kategorisi (Motor Sürücü){" "}
              </span>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>Yüz Tanıma Sistemi</span>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>Artırılmış Gerçeklik </span>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>Motor Sürücü Devresi </span>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>Manyetolu Akkor Çakmak (Tübitak Projesi) </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
});
const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);
