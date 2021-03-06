import React, { useRef, useState } from "react";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsArrowBarRight,
} from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

import { BsSave } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import { BiLink } from "react-icons/bi";

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
            <img src="https://i.hizliresim.com/35iuje1.jpg" alt="profil" />
            <ReactToPrint
              trigger={() => (
                <button>
                  {lang ? "'.pdf ' Olarak Kaydet!" : "Save As '.pdf '"}
                  <BsSave style={{ marginLeft: 10 }} />
                </button>
              )}
              content={() => componentRef.current}
            />
            <button onClick={() => setLang(!lang)}>
              {lang ? "??ngilizceye ??evir!" : "Translate to Turkish!"}{" "}
              <SiGoogletranslate style={{ marginLeft: 10 }} />
            </button>
            <span style={{ marginTop: "10px" }}>
              {lang ? "SEL??M SEVG??" : "SELIM SEVGI"}
            </span>

            {lang ? (
              <span style={{ margin: "10px 0" }}>
                ELEKTR??K - ELEKTRON??K <br />
                M??HEND??S??
              </span>
            ) : (
              <span style={{ margin: "10px 0" }}>
                ELECTRIC - ELECTRONIC <br />
                ENGINEER
              </span>
            )}
          </div>
          <span className="iletisim">
            {lang ? "??let??????m b??lg??ler??" : "Contact information"}
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
              <BiLink className="iletisim-icon" />

              <a
                style={{ color: "white" }}
                href="https://selimsevgi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://selimsevgi.vercel.app/
              </a>
            </div>
            <div className="iletisim-item">
              <AiOutlineMail className="iletisim-icon" />

              <a
                style={{ color: "white" }}
                href="mailto:slmsvg44@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                slmsvg44@gmail.com
              </a>
            </div>

            <div className="iletisim-item">
              <BsLinkedin className="iletisim-icon" />
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/selim-sevgi"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/selim-sevgi
              </a>
            </div>
            <div className="iletisim-item">
              <AiFillGithub className="iletisim-icon" />
              <a
                style={{ color: "white" }}
                href="https://github.com/SelimSevgi"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/SelimSevgi
              </a>
            </div>
          </div>
          <span className="iletisim">
            {lang ? "E????T??M B??LG??LER??" : "EDUCATIONAL INFORMATION"}
          </span>
          <div className="iletisim-items">
            <span>
              <MdSchool className="iletisim-icon" />
              <b>2015 - 2020</b> <br />
              <a style={{ color: "white" }} href="http://www.firat.edu.tr/tr">
                {lang ? "F??rat ??niversitesi" : "Firat University"}
              </a>{" "}
              ???{" "}
              {lang
                ? "Elektrik ve Elektronik M??hendisli??i"
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
                  ? "Yunus Emre Teknik ve End??stri Meslek Lisesi"
                  : "Yunus Emre Technical and Industrial Vocational High School"}
              </a>{" "}
              ??? {lang ? "Mekatronik B??l??m??" : "Mechatronics Department"}
              <br />
              <b>(84.61/100)</b>
            </span>
          </div>
          <span className="iletisim">
            {lang ? "yabanc?? d??l" : "foreign language"}
          </span>
          <div className="iletisim-items">
            <span>{lang ? "??ngilizce" : "English"} : B1</span>
          </div>
          <span className="iletisim">
            {lang ? "referanslar" : "references"}
          </span>
          <div className="iletisim-items">
            <span>
              <b>
                {lang
                  ? "Prof. Dr. Abdulkadir ??ENG??R"
                  : "Prof. Dr. Abdulkadir SENGUR"}
              </b>
              <br />{" "}
              {lang
                ? "F??rat ??niversitesi ??? Telekom??nikasyon Anabilim Dal?? Ba??kan??"
                : "F??rat University ??? Head of Telecommunication Department"}
              <br />
              <b>{lang ? "Eposta :" : "Email :"}</b>{" "}
              <a style={{ color: "white" }} href="mailto:ksengur@firat.edu.tr">
                ksengur@firat.edu.tr
              </a>
            </span>
            <span>
              <b>Prof. Dr. H??seyin ALTUN </b>
              <br />
              {lang
                ? "F??rat ??niversitesi ??? Elektrik Makinalar?? Anabilim Dal?? Ba??kan??"
                : "F??rat University ??? Head of Electrical Machinery Department"}{" "}
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
            {lang ? "kar??yer" : "career"}
          </span>
          <div className="left-cont">
            {lang ? (
              <span>{timelineData.career[1].textTur}</span>
            ) : (
              <span>{timelineData.career[0].textEng}</span>
            )}
          </div>

          <span className="iletisim-right">
            {lang ? "TECR??BELER" : "Experiences"}
          </span>

          <Timeline />
          <span className="iletisim-right">
            {lang ? "kurs / sert??f??ka" : "course / certificate"}
          </span>
          <div className="left-cont">
            {lang ? (
              <span>
                <b>2019</b> - Kat??l??m Belgesi (T??bitak ??? Erzurum B??lge Sergisi ???
                2242 ??niversite ????rencileri Ara??t??rma Proje Yar????mas??)
              </span>
            ) : (
              <span>
                <b>2019</b> - Certificate of Participation (T??bitak ??? Erzurum
                Regional Exhibition ??? 2242 University Students Research Project
                Competition)
              </span>
            )}
            {lang ? (
              <span>
                <b>2016</b> - Sertifika Belgesi (Amerikan K??lt??r E??itim
                Kurumlar?? ??? ??ngilizce Dil Kursu) (1 y??l)
              </span>
            ) : (
              <span>
                <b>2016</b> - Certificate (American Cultural Educational
                Institutions ??? English Language Course) (1 years)
              </span>
            )}
            {lang ? (
              <span>
                <b>2014</b> - Kat??l??m Belgesi (Kyk Akademi ??? Liderlik Semineri)
                (1 y??l)
              </span>
            ) : (
              <span>
                <b>2014</b> - Certificate of Participation (Kyk Academy ???
                Leadership Seminar) (1 years)
              </span>
            )}
            {lang ? (
              <span>
                <b>2014</b> - Kat??l??m Belgesi (Kyk Akademi ??? Fark??ndal??k
                Konferans??) (1 y??l)
              </span>
            ) : (
              <span>
                <b>2014</b> - Certificate of Participation (Kyk Academy ???
                Awareness Conference) (1 years)
              </span>
            )}
            {lang ? (
              <span>
                <b>2013</b> - Kat??l??m Belgesi (7. Uluslararas?? Robot Yar????mas??)
              </span>
            ) : (
              <span>
                <b>2013</b> - Certificate of Participation (7. International
                Robot Contest)
              </span>
            )}
          </div>
          <span className="iletisim-right">
            {lang ? "projeler / ??al????malar" : "projects / Studies"}
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
                  Efficiency Challenge Elektrikli Ara?? Yar????lar?? Elektromobil
                  Kategorisi (Motor S??r??c??){" "}
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
                {lang ? "Y??z Tan??ma Sistemi" : "Face Recognition System"}
              </span>
            </div>
            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>{lang ? "Art??r??lm???? Ger??eklik" : "Augmented Reality"}</span>
            </div>

            <div className="iletisim-item">
              <BsArrowBarRight className="right-icon" />
              <span>
                {lang
                  ? "Manyetolu Akkor ??akmak (T??bitak Projesi)"
                  : "Manyetolu Akkor ??akmak (T??bitak Project)"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
