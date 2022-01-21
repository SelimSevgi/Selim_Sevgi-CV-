import React, { useRef, useState } from "react";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsArrowBarRight,
} from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { HiLocationMarker, HiOutlineSaveAs } from "react-icons/hi";
import { MdSchool, MdWork } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import timelineData from "./timeline.json";

import ReactToPrint from "react-to-print";

console.log(timelineData);
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const [lang, setLang] = useState(true);

  const Timeline = () => (
    <div className="timeline-container">
      {(lang ? timelineData.timeline : timelineData.timelineEng).map(
        (data, idx) => (
          <TimelineItem data={data} key={idx} />
        )
      )}
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

  return (
    <div ref={componentRef}>
      <div className="App">
        <div className="right">
          <div className="name">
            <img src="https://i.hizliresim.com/35iuje1.jpg" />
            <ReactToPrint
              trigger={() => (
                <button>
                  {lang ? "'.pdf ' Olarak Kaydet!" : "Save As '.pdf '"}
                  <HiOutlineSaveAs style={{ marginLeft: 10 }} />
                </button>
              )}
              content={() => componentRef.current}
            />
            <button onClick={() => setLang(!lang)}>
              {lang ? "İngilizceye Çevir!" : "Translate to Turkish!"}{" "}
              <SiGoogletranslate style={{ marginLeft: 10 }} />
            </button>
            <span style={{ marginTop: "10px" }}>
              {lang ? "SELİM SEVGİ" : "SELIM SEVGI"}
            </span>

            {lang ? (
              <span style={{ margin: "10px 0" }}>
                ELEKTRİK - ELEKTRONİK <br />
                MÜHENDİSİ
              </span>
            ) : (
              <span style={{ margin: "10px 0" }}>
                ELECTRIC - ELECTRONIC <br />
                ENGINEER
              </span>
            )}
          </div>
          <span className="iletisim">
            {lang ? "İletİşİm bİlgİlerİ" : "Contact information"}
          </span>
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
          <span className="iletisim">
            {lang ? "EĞİTİM BİLGİLERİ" : "EDUCATIONAL INFORMATION"}
          </span>
          <div className="iletisim-items">
            <span>
              <MdSchool className="iletisim-icon" />
              <b>2015 - 2020</b> <br />
              <a style={{ color: "white" }} href="http://www.firat.edu.tr/tr">
                {lang ? "Fırat Üniversitesi" : "Firat University"}
              </a>{" "}
              –{" "}
              {lang
                ? "Elektrik ve Elektronik Mühendisliği"
                : "Electrical and Electronics Engineering"}{" "}
              <br />
              <b>(3.34/4.00)</b>
            </span>
            <span>
              <MdSchool className="iletisim-icon" />
              <b>2010 - 2014</b> <br />
              <a
                style={{ color: "white" }}
                href="https://yunusemreeml.meb.k12.tr/tema/index.php"
              >
                {lang
                  ? "Yunus Emre Teknik ve Endüstri Meslek Lisesi"
                  : "Yunus Emre Technical and Industrial Vocational High School"}
              </a>{" "}
              – {lang ? "Mekatronik Bölümü" : "Mechatronics Department"}
              <br />
              <b>(84.61/100)</b>
            </span>
          </div>
          <span className="iletisim">
            {lang ? "yabancı dİl" : "foreign language"}
          </span>
          <div className="iletisim-items">
            <span>{lang ? "İngilizce" : "English"} : B1</span>
          </div>
          <span className="iletisim">
            {lang ? "referanslar" : "references"}
          </span>
          <div className="iletisim-items">
            <span>
              <b>
                {lang
                  ? "Prof. Dr. Abdulkadir ŞENGÜR"
                  : "Prof. Dr. Abdulkadir SENGUR"}
              </b>
              <br />{" "}
              {lang
                ? "Fırat Üniversitesi – Telekomünikasyon Anabilim Dalı Başkanı"
                : "Fırat University – Head of Telecommunication Department"}
              <br />
              <b>{lang ? "Eposta :" : "Email :"}</b>{" "}
              <a style={{ color: "white" }} href="mailto:ksengur@firat.edu.tr">
                ksengur@firat.edu.tr
              </a>
            </span>
            <span>
              <b>Prof. Dr. Hüseyin ALTUN </b>
              <br />
              {lang
                ? "Fırat Üniversitesi – Elektrik Makinaları Anabilim Dalı Başkanı"
                : "Fırat University – Head of Electrical Machinery Department"}{" "}
              <br />
              <b>{lang ? "Eposta :" : "Email :"}</b>{" "}
              <a style={{ color: "white" }} href="mailto:haltun@firat.edu.tr">
                haltun@firat.edu.tr
              </a>
            </span>
          </div>
        </div>
        <div className="left">
          <span className="iletisim-right" style={{ marginTop: "5px" }}>
            {lang ? "karİyer" : "career"}
          </span>
          <div className="left-cont">
            {lang ? (
              <span>{timelineData.career[1].textTur}</span>
            ) : (
              <span>{timelineData.career[0].textEng}</span>
            )}
          </div>

          <span className="iletisim-right">
            {lang ? "TECRÜBELER" : "Experiences"}
          </span>

          <Timeline />
          <span className="iletisim-right">
            {lang ? "kurs / sertİfİka" : "course / certificate"}
          </span>
          <div className="left-cont">
            {lang ? (
              <span>
                <b>2019</b> - Katılım Belgesi (Tübitak – Erzurum Bölge Sergisi –
                2242 Üniversite Öğrencileri Araştırma Proje Yarışması)
              </span>
            ) : (
              <span>
                <b>2019</b> - Certificate of Participation (Tübitak – Erzurum
                Regional Exhibition – 2242 University Students Research Project
                Competition)
              </span>
            )}
            {lang ? (
              <span>
                <b>2016</b> - Sertifika Belgesi (Amerikan Kültür Eğitim
                Kurumları – İngilizce Dil Kursu) (1 yıl)
              </span>
            ) : (
              <span>
                <b>2016</b> - Certificate (American Cultural Educational
                Institutions – English Language Course) (1 years)
              </span>
            )}
            {lang ? (
              <span>
                <b>2014</b> - Katılım Belgesi (Kyk Akademi – Liderlik Semineri)
                (1 yıl)
              </span>
            ) : (
              <span>
                <b>2014</b> - Certificate of Participation (Kyk Academy –
                Leadership Seminar) (1 years)
              </span>
            )}
            {lang ? (
              <span>
                <b>2014</b> - Katılım Belgesi (Kyk Akademi – Farkındalık
                Konferansı) (1 yıl)
              </span>
            ) : (
              <span>
                <b>2014</b> - Certificate of Participation (Kyk Academy –
                Awareness Conference) (1 years)
              </span>
            )}
            {lang ? (
              <span>
                <b>2013</b> - Katılım Belgesi (7. Uluslararası Robot Yarışması)
              </span>
            ) : (
              <span>
                <b>2013</b> - Certificate of Participation (7. International
                Robot Contest)
              </span>
            )}
          </div>
          <span className="iletisim-right">
            {lang ? "projeler / ÇalıŞmalar" : "projects / Studies"}
          </span>
          <div className="left-items">
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <a href="https://yemeksepeti-clone.vercel.app/">
                <span className="left-items-a">
                  {lang ? "Yemeksepeti-Klon" : "Yemeksepeti-Clone"}{" "}
                </span>
              </a>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />

              <a href="https://website-of-architects-react-js.vercel.app/">
                <span className="left-items-a ">
                  {lang ? "Mimar Websitesi" : "Arhitects Website"}{" "}
                </span>
              </a>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              {lang ? (
                <span>
                  Efficiency Challenge Elektrikli Araç Yarışları Elektromobil
                  Kategorisi (Motor Sürücü){" "}
                </span>
              ) : (
                <span>
                  Efficiency Challenge Electric Vehicle Races Electromobile
                  Category (Motor Driver)
                </span>
              )}
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>
                {lang ? "Yüz Tanıma Sistemi" : "Face Recognition System"}
              </span>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>{lang ? "Artırılmış Gerçeklik" : "Augmented Reality"}</span>
            </div>

            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>
                {lang
                  ? "Manyetolu Akkor Çakmak (Tübitak Projesi)"
                  : "Manyetolu Akkor Çakmak (Tübitak Project)"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
