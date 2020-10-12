import React, { useEffect, useRef, useState } from "react";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";
import axios from "axios";
import classnames from "classnames";
import LineElement from "../components/LineElement";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(({ lightMode }) => {
  const url = "https://portfolio-server123.herokuapp.com";
  const emailCheck = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const paragraphText = [
    {
      text:
        "If you like the projects I've made and think that I could bring the value for your company, or your project. Don't hesitate to contact me using the form below. ",
    },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("-");
  const [text, setText] = useState("");
  const [send, setSend] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState(null);
  const [sendSuccess, setSendSuccess] = useState(null);
  const [showInfo, setShowInfo] = useState(null);
  const buttonRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (loadingRequest && buttonRef.current) {
      buttonRef.current.classList.add("contactPage__sendButton--loading");
    } else {
      buttonRef.current.classList.remove("contactPage__sendButton--loading");
    }
  }, [loadingRequest]);

  const inputClassNames = classnames(
    "contactPage__inputElement",
    lightMode && "contactPage__inputElement--lightMode"
  );
  const buttonClassNames = classnames(
    "contactPage__sendButton",
    lightMode && "contactPage__sendButton--lightMode",
    loadingRequest && "contactPage__sendButton--loading"
  );

  useEffect(() => {
    setTimeout(() => {
      if (infoRef.current) {
        infoRef.current.classList.remove("contactPage__sendInfo--show");
      }
      setShowInfo(false);
    }, 2500);
    if (showInfo) {
      infoRef.current.classList.add("contactPage__sendInfo--show");
    }
  }, [showInfo]);
  const preventSend = (e) => {
    e.preventDefault();
    console.log("prevent wrong data send");
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        `${url}/submit`,
        {
          name: name,
          email: email,
          subject: subject,
          text: text,
        },
        setLoadingRequest(true)
      )
      .then((res, err) => {
        if (res.status === 201) {
          setShowInfo(true);
          setSendSuccess(true);
          setName("");
          setEmail("");
          setSubject("");
          setText("");
          setLoadingRequest(false);
        } else {
          e.preventDefault();
          setShowInfo(true);
          setSendSuccess(false);
          setLoadingRequest(false);
        }
      });
  };
  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      emailCheck.test(email) &&
      subject !== "" &&
      text.length >= 5
    ) {
      setSend(true);
    } else {
      setSend(false);
    }
  }, [email, name, text, subject, emailCheck]);

  const checkInput = (e) => {
    if (e.target.type === "text") {
      if (e.target.value === "") {
        e.target.classList.remove("contactPage__inputElement--active");
        e.target.classList.add("contactPage__inputElement--wrong");
      } else {
        e.target.classList.remove("contactPage__inputElement--wrong");
        e.target.classList.remove("contactPage__inputElement--active");
      }
    } else if (e.target.type === "email") {
      if (emailCheck.test(e.target.value)) {
        e.target.classList.remove("contactPage__inputElement--active");
        e.target.classList.remove("contactPage__inputElement--wrong");
      } else {
        e.target.classList.remove("contactPage__inputElement--active");
        e.target.classList.add("contactPage__inputElement--wrong");
      }
    } else if (e.target.type === "textarea") {
      if (e.target.value.length < 5) {
        e.target.classList.remove("contactPage__inputElement--active");
        e.target.classList.add("contactPage__inputElement--wrong");
      } else {
        e.target.classList.remove("contactPage__inputElement--wrong");
        e.target.classList.remove("contactPage__inputElement--active");
      }
    }
  };

  const infoTextClassNames = classnames(
    "contactPage__infoText",
    lightMode && "contactPage__infoText--lightMode"
  );

  return (
    <Section>
      <div ref={infoRef} className="contactPage__sendInfo">
        {sendSuccess ? (
          <h1
            className={classnames(
              infoTextClassNames,
              "contactPage__infoText--success"
            )}
          >
            I received your message, I will contact you back ASAP
          </h1>
        ) : (
          <h1
            className={classnames(
              infoTextClassNames,
              "contactPage__infoText--error"
            )}
          >
            Something went wrong, contact me directly on
            taras.shinkarenko@gmail.com
          </h1>
        )}
      </div>
      <InnerContainer>
        <Container classNames="contactPage__container">
          <TitleComponent
            title="Contact"
            tag="h1"
            classNames="contactPage__title"
            titleWidth="45rem"
            smallTitleWidth="19rem"
          />

          <ParagraphComponent
            classNames="contactPage__paragraph"
            paragraphText={paragraphText}
          />
          <form className="contactPage__formElement">
            <input
              onFocus={(e) =>
                e.target.classList.add("contactPage__inputElement--active")
              }
              onBlur={checkInput}
              className={classnames(
                inputClassNames,
                "contactPage__inputElement--name"
              )}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                checkInput(e);
              }}
              placeholder="name"
              type="text"
            />
            <input
              onFocus={(e) =>
                e.target.classList.add("contactPage__inputElement--active")
              }
              onBlur={checkInput}
              className={classnames(
                inputClassNames,
                "contactPage__inputElement--email"
              )}
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                checkInput(e);
              }}
              placeholder="email"
            />
            <input
              onFocus={(e) =>
                e.target.classList.add("contactPage__inputElement--active")
              }
              onBlur={checkInput}
              className={classnames(
                inputClassNames,
                "contactPage__inputElement--subject"
              )}
              value={subject}
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
                checkInput(e);
              }}
              placeholder="subject"
            />
            <textarea
              onFocus={(e) =>
                e.target.classList.add("contactPage__inputElement--active")
              }
              onBlur={checkInput}
              rows="4"
              cols="50"
              className={classnames(
                inputClassNames,
                "contactPage__inputElement--text"
              )}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                checkInput(e);
              }}
              placeholder="message"
            />
            <button
              className={buttonClassNames}
              disabled={!send}
              type="submit"
              onClick={send ? submitForm : preventSend}
              ref={buttonRef}
            >
              Send
              {loadingRequest && (
                <div className="loader contactPage__loader"></div>
              )}
            </button>
          </form>
        </Container>
        <LineElement />
      </InnerContainer>
    </Section>
  );
});
