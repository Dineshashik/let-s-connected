"use client";
import SignupNavbar from "@/components/common/signup-navbar";
import GetStarted from "@/components/home/get-started";
import Footer from "@/components/common/footer";
import { ContainerWrapper, TitleWrapper } from "@/components/common/ui";
import { Typography } from "@mui/material";

const PrivacyPolicyPage = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <SignupNavbar type={"founder"} />
      <ContainerWrapper>
        <TitleWrapper>
          <Typography variant="h3">Privacy Policy</Typography>
          <Typography variant="h6" mt={{ xs: 2, md: 4 }}>
            Last updated: May 01, 2024
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            This privacy notice for Let&#39;s Connect
            (“we,” “us,” or “our”), describes how and why we might collect,
            store, use and/or share (“process”) your information when you use
            our services (“Services”), such as when you:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                Visit our website at www.letsconnect.inc, or any website of ours
                that links to this privacy policy
              </li>
              <li>
                Download and use our mobile application (Let&#39;s Connect), or any other
                application of ours that links to this privacy policy
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </ul>
          </Typography>

          <Typography variant="h3" mt={{ xs: 2, md: 4 }}>
            Questions or concerns?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Reading this privacy policy will help you understand your privacy
            rights and choices. If you do not agree with our policies and
            practices, please do not use our Services. If you still have any
            questions or concerns, please contact us at contact@letsconnect.inc.
          </Typography>

          <Typography variant="h3" mt={{ xs: 2, md: 4 }}>
            Summary of key points
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            This summary provides key points from our privacy policy, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            What personal information do we process? When you visit, use, or
            navigate our Services, we may process personal information depending
            on how you interact with us and the Services, the choices you make,
            and the products and features you use. Learn more about personal
            information you disclose to us.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Do we process any sensitive personal information? We may process
            sensitive personal information when necessary with your consent or
            as otherwise permitted by applicable law. Learn more about sensitive
            information we process.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Do we receive any information from third parties? We do not receive
            any information from third parties.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            How do we process your information? We process your information to
            provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with applicable
            laws. We may also process your information for other purposes with
            your consent. We process your information only when we have a valid
            legal reason to do so. Learn more about how we process your
            information.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In what situations and with which parties do we share personal
            information? We may share information in specific situations and
            with specific third parties. Learn more about when and with whom we
            share your personal information.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            How do we keep your information safe? We have organizational and
            technical processes and procedures in place to protect your personal
            information. However, no electronic transmission over the internet
            or information storage technology can be guaranteed to be 100%
            secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security and improperly collect, access, steal, or
            modify your information. Learn more about how we keep your
            information safe.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            What are your rights? Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information. Learn more about your
            privacy rights.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            How do you exercise your rights? The easiest way to exercise your
            rights is by contacting us on contact@letsconnect.inc. We will consider
            and act upon any request in accordance with applicable data
            protection laws.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Want to learn more about what we do with any information we collect?
            Review the privacy policy in full.
          </Typography>

          <Typography variant="h3" mt={{ xs: 2, md: 4 }}>
            Table of Contents
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ol style={{ color: "#635BFF" }}>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("info-collect")}
              >
                What information do we collect?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("process-info")}
              >
                How do we process your information?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("share-info")}
              >
                When and with whom do we share your personal information?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("cookies-tracking")}
              >
                Do we use cookies and other tracking technologies?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("keep-info")}
              >
                How long do we keep your information?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("keep-info-safe")}
              >
                How do we keep your information safe?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("collect-minors")}
              >
                Do we collect information from minors?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("privacy-rights")}
              >
                What are your privacy rights?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("do-not-track")}
              >
                Controls for do-not-track features
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("policy-updates")}
              >
                Do we make updates to this policy?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("contact-us")}
              >
                How can you contact us about this notice?
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToSection("review-update-delete")}
              >
                How can you review, update, or delete the data we collect from
                you?
              </li>
            </ol>
          </Typography>

          <Typography id="info-collect" variant="h3" mt={{ xs: 2, md: 4 }}>
            1. What information do we collect?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Personal information you disclose to us
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In short: We collect personal information that you provide to us.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We collect personal information that you voluntarily provide to use
            when you register on the Services, express an interest in obtaining
            information about us or our Services, when you participate in
            activities on the Services, or otherwise when you contact us.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Personal Information Provided by You. The personal information that
            we collect depends on the context of your interactions with us and
            the Services, the choices you make, and the features you use. The
            personal information that we collect may include the following:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>Names</li>
              <li>Phone Numbers</li>
              <li>Email Addresses</li>
              <li>Mailing Addresses</li>
              <li>Company Details</li>
              <li>Job Titles</li>
              <li>Usernames</li>
              <li>Passwords</li>
              <li>Contact Preferences</li>
              <li>Contact or Authentication Data</li>
              <li>Billing Addresses</li>
              <li>Debit/Credit Card Numbers</li>
            </ul>
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Payment Data. We may collect data necessary to process your payment
            if you subscribe to the Services, such as your debit/credit card
            number, expiry date and security code associated with your
            debit/credit card. The payment process is handled by Stripe. You may
            find their privacy policy here: https://stripe.com/ae/privacy.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Application Data. If you use our application, we may also collect
            the following information if you choose to provide us access or
            permission:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Push Notifications. We may request to send you push notifications
            regarding your account or certain features of the application. If
            you wish to opt out from receiving these types of communications,
            you may turn them off in your device’s settings.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            This information is primarily needed to maintain the security and
            operation of our application, for troubleshooting, and for our
            internal analytics and reporting purposes.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Information Automatically Collected
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: Some information - such as your Internet Protocol (IP)
            address and/or browser and device characteristics - is collected
            automatically when you visit our Services.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use your Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Like many businesses, we also collect information through cookies
            and similar technologies. You can find more about this in our Cookie
            Policy.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The information we collect includes:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Log and Usage Data. Log and usage data is service-related,
            diagnostic, usage, and performance information our servers
            automatically collect when you access or use our Services and which
            we record in log files. Depending on how you interact with us, this
            log data may include your IP address, device information, browser
            type, and settings and information about your activity in the
            Services (such as the date/time stamps associated with your usage,
            pages and files viewed, searches, and other actions you take such as
            which features you use), device event information (such as system
            activity, error reports (sometimes called “crash dumps”), and
            hardware settings).
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Device Data. We collect device data such as information about your
            computer, phone, tablet, or other device you use to access the
            Services. Depending on the device used, this service data may
            include information such as your IP address (or proxy server),
            device and application identification numbers, location, browser
            type, hardware model, internet service provider and/or mobile
            carrier, operating system, and system configuration information.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Location Data. We collect location data such as information about
            your device’s location, which can be either precise or imprecise.
            How much information we collect depends on the type and settings of
            the device you use to access the Services. For example, we may use
            GPS and other technologies to collect geolocation data that tells us
            your current location (based on your IP address). You can opt out of
            allowing us to collect this information either by refusing access to
            the information or by disabling your Location settings on your
            device.
          </Typography>

          <Typography id="process-info" variant="h3" mt={{ xs: 2, md: 4 }}>
            2. How do we process your information?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with applicable laws. We may also
            process your information for other purposes with your consent.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                To facilitate account creation and authentication and otherwise
                manage user accounts. We may process your information so you can
                create and log in to your account, as well as keep your account
                in working order.
              </li>
              <li>
                To deliver and facilitate delivery of services to the user. We
                may process your information to provide you with the requested
                service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may
                process your information to respond to your inquiries and solve
                any potential issues you might have with the requested service.
              </li>
              <li>
                To send administrative information to you. We may process your
                information to send you details about our services, changes to
                our terms and policies, and other similar information.
              </li>
              <li>
                To fulfill and manage your subscription. We may process your
                information to fulfill and manage your subscription and payments
                made through the Services.
              </li>
              <li>
                To enable user-to-user communications. We may process your
                information if you choose to use any of our features that allow
                for communication with another user.
              </li>
              <li>
                To request feedback. We may process your information when
                necessary to request feedback and to contact you about your use
                of our Services.
              </li>
              <li>
                To send you marketing and promotional communications. We may
                process the personal information available to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. You can opt out of our marketing emails at any
                time. For more information, see “WHAT ARE YOUR PRIVACY RIGHTS?”
                below.
              </li>
              <li>
                To protect our Services. We may process your information as part
                of our efforts to keep our Services safe and secure, including
                fraud monitoring and prevention.
              </li>
              <li>
                To evaluate and improve our Services, marketing, and your
                experience. We may process your information when we believe it
                is necessary to identify usage trends, determine the
                effectiveness of our promotional campaigns, and to evaluate and
                improve our Services, marketing, and your experience.
              </li>
              <li>
                To identify usage trends. We may process information about how
                you use our Services to better understand how they are being
                used so we can improve them.
              </li>
              <li>
                To comply with our legal obligations. We may process your
                information to comply with our legal obligations, respond to
                legal requests, and exercise, establish, or defend our legal
                rights.
              </li>
            </ul>
          </Typography>

          <Typography id="share-info" variant="h3" mt={{ xs: 2, md: 4 }}>
            3. When and with whom do we share your personal information?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: We may share information in specific situations described
            in this section and/or with the following third-parties.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We may need to share your personal information for the following
            situations:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sales of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
              <li>
                Other Users. When you share personal information (for example,
                by posting comments, contributions, or any other potential
                content to the Services) or otherwise interact with potentially
                public areas of the Services, such personal information may be
                viewed by all users that may be publicly made available outside
                the Services in perpetuity. Similarly, other users will be able
                to view description of your activity, communicate with you
                within our Services, and view your profile.
              </li>
            </ul>
          </Typography>

          <Typography id="cookies-tracking" variant="h3" mt={{ xs: 2, md: 4 }}>
            4. Do we use cookies and other tracking technologies?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: We may use cookies and other tracking technologies to
            collect and store your information.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Policy.
          </Typography>

          <Typography id="keep-info" variant="h3" mt={{ xs: 2, md: 4 }}>
            5. How long do we keep your information?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: We may use cookies and other tracking technologies to
            collect and store your information.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy policy, unless a
            longer retention period is required or permitted by law. No purpose
            in this policy will require us keeping your personal information for
            longer than the period of time in which users have an account with
            us.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </Typography>

          <Typography id="keep-info-safe" variant="h3" mt={{ xs: 2, md: 4 }}>
            6. How do we keep your information safe?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: We aim to protect your personal information through a
            system of organizational and technical security measures.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the internet or information storage technology can be be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </Typography>

          <Typography id="collect-minors" variant="h3" mt={{ xs: 2, md: 4 }}>
            7. Do we collect information from minors?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: We do not knowingly collect data from or market to
            children under 18 years of age.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 years old. If we learn that personal information from users
            less than 18 years of age has been collected, we will deactivate the
            account and take reasonable measures to promptly delete such data
            from our records. If you become aware of any data we may have
            collected from children under the age of 18, please contact us at
            contact@letsconnect.inc.
          </Typography>

          <Typography id="privacy-rights" variant="h3" mt={{ xs: 2, md: 4 }}>
            8. What are your privacy rights?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: You may review, change, or terminate your account at any
            time.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Withdrawing your consent: If we are relying on your consent to
            process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section “HOW CAN YOU CONTACT US ABOUT THIS POLICY?” below.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Opting out of marketing and promotional communications: You can
            unsubscribe from our marketing and promotional communications at any
            time by clicking on the unsubscribe link in the email that we send,
            or by contacting us using the details provided in the section “HOW
            CAN YOU CONTACT US ABOUT THIS POLICY?” below. You will then be
            removed from the marketing lists. However, we may still communicate
            with you - for example, to send you the service-related messages
            that are necessary for the administration and use of your account,
            to respond to service requests, or for other non-marketing purposes.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>Account Information</Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                Log in to your account settings and update your user account.
              </li>
              <li>Contact us by using the contact information provided.</li>
            </ul>
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may return some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Cookies and similar technologies: Most web browsers are set to
            accept cookies by default. If you prefer, you can usually choose to
            set your browser to remove cookies and to reject cookies. If you
            choose to remove cookies or reject cookies, this could affect
            certain features or services of our Services. For further
            information, please see our Cookie Policy.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            If you have any questions or comments about your privacy rights, you
            may email us at contact@letsconnect.inc.
          </Typography>

          <Typography id="do-not-track" variant="h3" mt={{ xs: 2, md: 4 }}>
            9. Controls for do-not-track features
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (“DNT”) feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy policy.
          </Typography>

          <Typography id="policy-updates" variant="h3" mt={{ xs: 2, md: 4 }}>
            10. Do we make updates to this policy?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In Short: Yes, we will update this policy as necessary to stay
            compliant with relevant laws.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We may update this privacy policy from time to time. The updated
            version will be indicated by an updated “Revised” date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy policy, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy policy frequently to be informed of how we are protecting
            your information.
          </Typography>

          <Typography id="contact-us" variant="h3" mt={{ xs: 2, md: 4 }}>
            11. How can you contact us about this notice?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            If you have questions or comments about this privacy policy, you may
            email us at contact@letsconnect.inc.
          </Typography>

          <Typography
            id="review-update-delete"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            12. How can you review, update, or delete the data we collect from
            you?
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Based on the applicable laws in your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please email us at
            contact@letsconnect.inc.
          </Typography>
        </TitleWrapper>
      </ContainerWrapper>
      <GetStarted />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
