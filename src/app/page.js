import React from "react";
import styles from "@/app/page.module.css";
import Button from "./components/Button";
import WebApplication from "./components/WebApplication";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import CustomCard from "./components/CustomCard";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.section1}>
        <div className={styles.flexboxSection1}>
          <div className={styles.section1Header}>
            Experienced{" "}
            <span className={styles.highlightedText}>mobile and web </span>
            applications and website builders measuring.
          </div>
          <div className={styles.section1text}>
            EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </div>
          <div className={styles.buttonContainer}>
            <Button
              color="#FFFFFF"
              text="Contact Us"
              size="16px"
              border="0px"
              background="#1090CB"
              borderRadius="10px"
              width="193px"
              height="51px"
            />
            <Button
              color="#1090CB"
              text="View more"
              size="16px"
              border="1px solid #1090CB"
              background="#FFFFFF"
              borderRadius="10px"
              width="193px"
              height="51px"
            />
          </div>
        </div>
        <div className={styles.radial}></div>
        <Image
          alt="small Plant"
          src="/Succlent angle 1.png"
          width={66}
          height={66}
          className={styles.smallPlant}
        />
        <Image
          alt="big Plant"
          src="/Big Plant 1.png"
          width={185}
          height={185}
          className={styles.bigPlant}
        />
        <Image
          alt="sitting man"
          src="/Bill Sitting using laptop 1.png"
          width={470}
          height={500}
          className={styles.bill}
        />
        <Image
          alt="brick"
          src="/Cuboid 1.png"
          width={68}
          height={68}
          className={styles.brick}
        />
        <Image
          alt="design"
          src="/Vector 1.png"
          height={531}
          width={47}
          className={styles.design}
        />
        <Image
          alt="design1"
          src="/Vector 2.png"
          height={531}
          width={67}
          className={styles.design1}
        />
      </div>
      <div className={styles.section2}>
        <div className={styles.section2Inner}>
          <WebApplication
            imageSrc="/website-content 1.png"
            imageAlt="web Application"
            heading="Web Application"
            description="Lorem Ipsum is simply"
            backgroundColor="#EFEAFF"
          />
          <WebApplication
            imageSrc="/seo-tag 1.png"
            imageAlt="seo Application"
            heading="SEO"
            description="Lorem Ipsum is simply"
            backgroundColor="#ECFFDA"
          />
          <WebApplication
            imageSrc="/immersive 1.png"
            imageAlt="AR Application"
            heading="AR/VR Solutions"
            description="Lorem Ipsum is simply"
            backgroundColor="#DAE6FF"
          />
          <WebApplication
            imageSrc="/coding (1) 1.png"
            imageAlt="Mobile Application"
            heading="Mobile Application"
            description="Lorem Ipsum is simply"
            backgroundColor="#FFE5DA"
          />
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3Header}>
          <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className={styles.section3HerosectiondivFlexBox}>
          <div className={styles.section3Herosectiondiv}>
            <HeroSection imageColor="#08D3BB" />
          </div>
          <div className={styles.section3ImageDiv}>
            <div className={styles.section3radialImg}>
              <div className={styles.radial2}></div>
              <Image
                alt="mobile"
                src="/mobile1.png"
                width={0}
                height={0}
                sizes="100vw"
                className={styles.section3Image1}
              />
            </div>
          </div>
        </div>
        <div className={styles.flexBox2}>
          <div className={styles.section3ImageDiv}>
            <div className={styles.section3radialImg}>
              <div className={styles.radial3}></div>
              <Image
                alt="website"
                src="/website.png"
                width={0}
                height={0}
                sizes="100vw"
                className={styles.section3Image2}
              />
            </div>
          </div>
          <div className={styles.section3Herosectiondiv1}>
            <HeroSection imageColor="#1090CB" />
          </div>
        </div>
        <div className={styles.flexBox3}>
          <div className={styles.section3Herosectiondiv2}>
            <HeroSection imageColor="#9208D3" />
          </div>
          <div className={styles.radial4}></div>
          <div className={styles.section3ImageDiv}>
            <Image
              alt="person"
              src="/person2.png"
              width={0}
              height={0}
              sizes="100vw"
              className={styles.section3Image3}
            />
          </div>
        </div>
        <div className={styles.section3CradDiv}>
          <div className={styles.section3Cards}>
            <CustomCard
              backgroundColor="#F4F4F4"
              textColorT="#252525"
              textColorP="#545454"
              borderRadius="10px"
              buttonColor="#1090CB"
              text="View more"
              height="49px"
              width="153px"
              color="#FFFFFF"
              fontSize="16px"
              border="0px"
            />
            <div className={styles.imageAndCardContainer}>
              <Image
                alt="bell"
                src="/Bell Angle 1.png"
                width={120}
                height={120}
                className={styles.section3CardsImage}
              />
              <CustomCard
                backgroundColor="#1090CB"
                textColorT="#FFFFFF"
                textColorP="#FFFFFF"
                borderRadius="10px"
                buttonColor="#FFFFFF"
                text="View more"
                height="49px"
                width="153px"
                color="#1090CB"
                fontSize="16px"
                border="0px"
              />
            </div>
          </div>
        </div>
        <div className={styles.radial5}></div>
        <div className={styles.section3BottomT}>
          <div className={styles.section3BottomTitle}>
            You will be in good Company
          </div>
        </div>
        <div className={styles.section3BottomDiv}>
          <div className={styles.section3BottomDivImage}>
            <Image alt="image1" src="/beneoshop.png" height={185} width={185} />
            <Image alt="image1" src="/caspio.png" height={185} width={185} />
            <Image alt="image1" src="/HyperGrid.png" height={185} width={185} />
            <Image alt="image1" src="/leotrippi.png" height={185} width={185} />
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <Image
          src="/Star 1.png"
          alt="star"
          width={66}
          height={66}
          className={styles.section4Image1}
        />
        <Image
          src="/Pai Chart 1.png"
          alt="chart"
          width={54}
          height={54}
          className={styles.section4Image2}
        />

        <div className={styles.section4Header}>
          Lorem Ipsum is simply dummy<br></br> text of the printing.
        </div>
        <div className={styles.section4InputDiv}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.section4Input}
          />
          <Button
            color="#FFF4F4"
            text="SUBSCRIBE"
            size="16px"
            border="0px"
            background="#000000"
            borderRadius="10px"
            width="173px"
            height="67px"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
