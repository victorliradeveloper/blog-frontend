import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import TechModal from '@/views/Portfolio/components/TechModal';
import techJson from '@/data/slider-tech.json';
import { TechInfoProps, FormData } from './Portfolio.types';
import StyledPortfolio from './Portfolio.styled';
import Image from 'next/image';
import SlideTech from '@/views/Portfolio/components/SlickTech';
import Axios from 'axios';
import FormModal from '@/views/Portfolio/components/FormModal';
import { applyPhoneMask } from '@/helper/functions/applyPhoneMask';
import {
  FAVICON,
  META_TAG_IMAGE,
  PROFILE_CIRCLE,
  PROFILE_PICTURE,
  VERIFY_ICON,
  WHITE_LOADING_SPINNER,
} from '@/constants/images';
import { validateName, validateEmail, validatePhone, validateSubject, validateMessage } from './functions/formValidation';
import SlickProjects from './components/SlickProjects';

const Portfolio = function () {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cellphone: '',
    subject: '',
    message: '',
  });
  const [currentModalTech, setCurrentModalTech] = useState({
    name: '',
    description: '',
    link: '',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const filterByName = (json: Record<string, TechInfoProps>, name: string) => {
    const keys = Object.keys(json);
    const filteredKeys = keys.filter(key => json[key].name.toLowerCase() === name.toLowerCase());
    return filteredKeys.map(key => json[key]);
  };

  const fetchTechDescription = async function (tech: string) {
    const filteredData = filterByName(techJson, tech);
    setCurrentModalTech({
      name: filteredData[0].name,
      description: filteredData[0].description,
      link: filteredData[0].link,
    });
  };

  const showTechInformationHandler = async (element: HTMLElement) => {
    try {
      const techAttribute = element.getAttribute('data-tech');
      if (techAttribute) {
        await fetchTechDescription(techAttribute);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Failed to fetch tech description:', error);
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showTechInfo = async (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const closestWithDataTech = target.closest('[data-tech]');

    if (closestWithDataTech) {
      await showTechInformationHandler(closestWithDataTech as HTMLElement);
    }
  };

  const sendEmail = async (formData: {
    name: string;
    email: string;
    cellphone: string;
    subject: string;
    message: string;
  }) => {

    const data = await Axios.post(`${process.env.NEXT_PUBLIC_DEV_API_URL}api/sendEmail`, formData)
      .then(res => res.data)
      .catch(() => null);
    return data;
  };

  const formSubmit = async function (e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setFormSubmitted(true);
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.cellphone);
    const isSubjectValid = validateSubject(formData.subject);
    const isMessageValid = validateMessage(formData.message);

    if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
      try {
        setIsLoading(true);
        const response = await sendEmail(formData);
        console.log(response);
        setShowFormModal(true);
        setFormData({
          name: '',
          email: '',
          cellphone: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setFormSubmitted(false);
      }
    }
  };

  const closeFormModal = function () {
    setShowFormModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    let { name, value } = e.target;

    if (['name', 'email', 'cellphone', 'subject', 'message'].includes(name)) {
      if (name === 'cellphone') {
        value = applyPhoneMask(value);
      }

      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Sobre mim | blog</title>
        <meta
          name="description"
          content="Olá, sou Victor Lira, o criador de um blog dedicado a explorar os domínios do JavaScript, React, Next.js, TypeScript e outras tecnologias de front-end de ponta. Junte-se a mim nesta jornada enquanto compartilho insights, tutoriais e dicas para aprimorar suas habilidades e ficar por dentro das últimas tendências em desenvolvimento de front-end. Mergulhe no fascinante mundo do desenvolvimento web através do meu blog e capacite-se com conhecimento e experiência."
        />
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Victor Lira" />
        <meta property="og:site_name" content="Victor Lira" />
        <link rel="icon" href={FAVICON} />
        <meta property="og:image" content={META_TAG_IMAGE} />

      </Head>
      <TechModal
        techName={currentModalTech.name}
        techDescription={currentModalTech.description}
        techLink={currentModalTech.link}
        className={showModal ? 'active' : ''}
        closeModal={closeModalHandler}
      />

      <FormModal onCloseFormModal={closeFormModal} className={showFormModal ? 'active' : ''} />
      <StyledPortfolio className="profile">
        <div className="container-vh">
          <div className="item main-item">
            <div className="profile-wrapper">
              <div
                className="card-wrapper"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <Image
                  src={PROFILE_PICTURE}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="card-image"
                />
                <Image
                  className="circle"
                  src={PROFILE_CIRCLE}
                  width={100}
                  height={100}
                  alt="circle"
                />
              </div>

              <div
                className="name-box"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                <h1 className="name">Victor Lira</h1>
                <Image src={VERIFY_ICON} width={20} height={20} alt="verify icon" />
              </div>
              <h1
                className="profile-h1"
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-offset="0"
              >
                <span>DESENVOLVENDO SOLUÇÕES PARA</span> <br />
                <span>o amanhã</span>
              </h1>
            </div>
          </div>
          <div className="item item-1">
            <SlickProjects onClick={() => console.log('slick projects')} />
          </div>
          <div className="item item-2">
            <div className="about-wrapper">
              <p className="skills">MINHAS SKILLS E POWER UP’S</p>

              <p className="tip">
                Sinta-se à vontade para <span className="span-click">clicar nos ícones</span> abaixo
                : )
              </p>
              <SlideTech onClick={showTechInfo} />
            </div>
          </div>
          <div className="item item-3">
            <div className="form-wrapper">
              <h1 className="title">Fale comigo</h1>
              <p className="p-1">
                Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve
                entraremos em contato.{' '}
              </p>
              <form id="form">
                <div className="box-1">
                  <div className="form-control control-1">
                    <label>Seu Nome</label>
                    <input
                      className={`input name ${
                        !validateName(formData.name) && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.name}
                      type="text"
                      placeholder="Digite aqui"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control control-2">
                    <label>e-mail</label>
                    <input
                      className={`input email ${
                        !validateEmail(formData.email) && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.email}
                      type="text"
                      placeholder="email@example.com"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="box-2">
                  <div className="form-control control-3">
                    <label>Celular</label>
                    <input
                      className={`input cellphone ${
                        !validatePhone(formData.cellphone) && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.cellphone}
                      type="text"
                      placeholder="( _ _ ) _ ____ ____"
                      name="cellphone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control control-4">
                    <label>Assunto</label>
                    <input
                      className={`input cellphone ${
                        !validateSubject(formData.subject) && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.subject}
                      type="text"
                      placeholder="Digite aqui"
                      name="subject"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="box-3">
                  <div className="form-control control-5">
                    <label>Mensagem</label>
                    <textarea
                      className={`input message ${
                        !validateMessage(formData.message) && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.message}
                      placeholder="Escreva aqui sua mensagem"
                      name="message"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {!isLoading && (
                  <button type="button" onClick={formSubmit} className="submit">
                    Enviar contato
                  </button>
                )}

                {isLoading && (
                  <button type="button" className="loading">
                    <p>Enviando </p>
                    <Image
                      src={WHITE_LOADING_SPINNER}
                      width={30}
                      height={30}
                      alt="loading spinner"
                    />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </StyledPortfolio>
    </Fragment>
  );
};


export default Portfolio