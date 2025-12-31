import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { FormData } from './Portfolio.types';
import {
  StyledPortfolio,
  ContainerVh,
  MainItem,
  Item3,
  ProfileWrapper,
  CardWrapper,
  CardImage,
  NameBox,
  Name,
  ProfileH1,
  ProfileSpan1,
  ProfileSpan2,
  FormWrapper,
  FormTitle,
  FormDescription,
  Form,
  FormBox1,
  FormBox2,
  FormBox3,
  FormControl,
  Input,
  TextArea,
  Label,
  SubmitButton,
  LoadingButton,
} from './Portfolio.styled';
import Image from 'next/image';
import Axios from 'axios';
import FormModal from '@/views/Portfolio/components/FormModal';
import { applyPhoneMask } from '@/helper/functions/applyPhoneMask';
import {
  FAVICON,
  META_TAG_IMAGE,
  PROFILE_PICTURE,
  VERIFY_ICON,
  WHITE_LOADING_SPINNER,
} from '@/constants/images';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateSubject,
  validateMessage,
} from './functions/formValidation';
import WorkExperience from './components/WorkExperience/WorkExperience';
import TackStack from './components/TackStack/TackStack';

const Portfolio = function () {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cellphone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = async (formData: {
    name: string;
    email: string;
    cellphone: string;
    subject: string;
    message: string;
  }) => {
    const data = await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/v1/sendEmail`, formData)
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
        <title>About Me | Blog</title>
        <meta
          name="description"
          content="Hello, I'm Victor Lira, the creator of a blog dedicated to exploring the realms of JavaScript, React, Next.js, TypeScript, and other cutting-edge front-end technologies. Join me on this journey as I share insights, tutorials, and tips to enhance your skills and stay on top of the latest trends in front-end development. Dive into the fascinating world of web development through my blog and empower yourself with knowledge and experience."
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

      <FormModal onCloseFormModal={closeFormModal} className={showFormModal ? 'active' : ''} />

      <StyledPortfolio>
        <ContainerVh>
          <MainItem>
            <ProfileWrapper>
              <CardWrapper data-aos="fade-down" data-aos-delay="100" data-aos-offset="0">
                <CardImage>
                  <Image src={PROFILE_PICTURE} alt="Profile Picture" width={300} height={300} />
                </CardImage>
              </CardWrapper>

              <NameBox data-aos="fade-down" data-aos-delay="200" data-aos-offset="0">
                <Name>Victor Lira</Name>
                <Image src={VERIFY_ICON} width={20} height={20} alt="verify icon" />
              </NameBox>
              <ProfileH1 data-aos="fade-down" data-aos-delay="250" data-aos-offset="0">
                <ProfileSpan1>DEVELOPING SOLUTIONS FOR</ProfileSpan1>
                <ProfileSpan2>tomorrow</ProfileSpan2>
              </ProfileH1>
            </ProfileWrapper>
          </MainItem>

          <WorkExperience />
          <TackStack />

          <Item3>
            <FormWrapper>
              <FormTitle>Reach out to me</FormTitle>
              <FormDescription>
                Any questions? Fill out the fields below with your information and we&apos;ll get in
                touch soon.
              </FormDescription>
              <Form id="form">
                <FormBox1>
                  <FormControl $width="480px">
                    <Label>Your Name</Label>
                    <Input
                      $hasError={!validateName(formData.name) && formSubmitted}
                      value={formData.name}
                      type="text"
                      placeholder="Type here"
                      name="name"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl $width="480px">
                    <Label>Email</Label>
                    <Input
                      $hasError={!validateEmail(formData.email) && formSubmitted}
                      value={formData.email}
                      type="text"
                      placeholder="email@example.com"
                      name="email"
                      onChange={handleChange}
                    />
                  </FormControl>
                </FormBox1>

                <FormBox2>
                  <FormControl $width="500px">
                    <Label>Phone</Label>
                    <Input
                      $hasError={!validatePhone(formData.cellphone) && formSubmitted}
                      value={formData.cellphone}
                      type="text"
                      placeholder="( _ _ ) _ ____ ____"
                      name="cellphone"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl $width="100%">
                    <Label>Subject</Label>
                    <Input
                      $hasError={!validateSubject(formData.subject) && formSubmitted}
                      value={formData.subject}
                      type="text"
                      placeholder="Type here"
                      name="subject"
                      onChange={handleChange}
                    />
                  </FormControl>
                </FormBox2>

                <FormBox3>
                  <FormControl $width="100%">
                    <Label>Message</Label>
                    <TextArea
                      $hasError={!validateMessage(formData.message) && formSubmitted}
                      value={formData.message}
                      placeholder="Write your message here"
                      name="message"
                      onChange={handleChange}
                    />
                  </FormControl>
                </FormBox3>

                {!isLoading && (
                  <SubmitButton type="button" onClick={formSubmit}>
                    Send Message
                  </SubmitButton>
                )}

                {isLoading && (
                  <LoadingButton type="button">
                    <p>Sending </p>
                    <Image
                      src={WHITE_LOADING_SPINNER}
                      width={30}
                      height={30}
                      alt="loading spinner"
                    />
                  </LoadingButton>
                )}
              </Form>
            </FormWrapper>
          </Item3>
        </ContainerVh>
      </StyledPortfolio>
    </Fragment>
  );
};

export default Portfolio;
