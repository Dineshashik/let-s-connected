'use client';
import SignupNavbar from '@/components/common/signup-navbar';
import GetStarted from '@/components/home/get-started';
import Footer from '@/components/common/footer';
import { ContainerWrapper, TitleWrapper } from '@/components/common/ui';
import { Typography } from '@mui/material';

const TermsServicePage = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <SignupNavbar type={'founder'} />
      <ContainerWrapper>
        <TitleWrapper>
          <Typography variant="h3">Terms of Service</Typography>
          <Typography
            variant="h6"
            mt={{ xs: 2, md: 4 }}
          >
            Last updated: May 01, 2024
          </Typography>

          <Typography
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            Agreement to our legal terms
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We are Let&#39;s Connect (“Company,” “we,” “us,” “our”), a
            company registered in the United Arab Emirates at Dubai Silicon
            Oasis, DDP, Building A1, Dubai.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We operate the website http://www.letsconnect.inc (the “Site”), the
            mobile application Let&#39;s Connect (the “App”), as well as any other
            related products and services that refer or link to these legal
            terms (the “Legal Terms”) (collectively, the “Services”).
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Let&#39;s Connect is a business matchmaking platform dedicated to fostering
            connections between founders and investors globally in a new and
            innovative way.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You can contact us by email at contact@letsconnect.inc.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            These Legal Terms constitute a legally binding service agreement
            between you, whether personally or on behalf of an entity (“you”),
            and Let&#39;s Connect, concerning your access to and use of
            the Services. You agree that by accessing the Services, you have
            read, understood, and agreed to be bound by all of these Legal
            Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
            ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms at any time
            and for any reason. We will alert you about any changes by updating
            the “Last updated” date of these Legal Terms, and you waive any
            right to receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued uses of the Services after the
            date such revised Legal Terms are posted.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The Services are intended for users who are at least 18 years old.
            Persons under the age of 18 are not permitted to use or register for
            the Services.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </Typography>

          <Typography
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            Table of Contents
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ol style={{ color: '#635BFF' }}>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('services')}
              >
                Our services
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  handleScrollToSection('intellectual-property-rights')
                }
              >
                Intellectual property rights
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('user-representations')}
              >
                User representations
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('user-registration')}
              >
                User registration
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('subscriptions')}
              >
                Subscriptions
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('prohibited-activities')}
              >
                Prohibited activities
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  handleScrollToSection('user-generated-contributions')
                }
              >
                User generated contributions
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  handleScrollToSection('mobile-application-license')
                }
              >
                Mobile application license
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('services-management')}
              >
                Services management
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('privacy-policy')}
              >
                Privacy policy
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('copyright-infringements')}
              >
                Copyright infringements
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('term-and-termination')}
              >
                Term and termination
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  handleScrollToSection('modification-and-interruptions')
                }
              >
                Modification and interruptions
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('governing-law')}
              >
                Governing law
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('dispute-resolution')}
              >
                Dispute resolution
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('corrections')}
              >
                Corrections
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('disclaimer')}
              >
                Disclaimer
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  handleScrollToSection('limitations-of-liability')
                }
              >
                Limitations of liability
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('indemnification')}
              >
                Indemnification
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('user-data')}
              >
                User data
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  handleScrollToSection('electronic-communications')
                }
              >
                Electronic communications, transactions, and signatures
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('miscellaneous')}
              >
                Miscellaneous
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToSection('contact-us')}
              >
                Contact us
              </li>
            </ol>
          </Typography>

          <Typography
            id="services"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            1. Our services
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdictions
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </Typography>

          <Typography
            id="intellectual-property-rights"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            2. Intellectual property rights
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Our Intellectual Property
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            “Content”), as well as the trademarks, service marks, and logos
            contained herein (the “Marks”).
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Our Content and Marks are protected by copyright and trademark laws
            (and various other intellectual property rights and unfair
            competition laws) and treaties in the United Arab Emirates and
            around the world.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The Content and Marks are provided in or through the Services “AS
            IS” for your personal, non-commercial use or internal business
            purpose only.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Your Use of our Services
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Subject to your compliance with these Legal Terms, including the
            “PROHIBITED ACTIVITIES” section below, we grant you a non-exclusive,
            non-transferable, revocable license to:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>access the Services; and</li>
              <li>
                download or print a copy of any portion of the Content to which
                you have properly gained access,
              </li>
            </ul>
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            solely for your personal, non-commercial use or internal business
            purpose.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose
            whatsoever, without the express prior written permission.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            If you wish to make any use of the Services, Content, or Marks other
            than as set out in this section or elsewhere in our Legal Terms,
            please address your request to contact@letsconnect.inc. If we ever
            grant you permission to post, reproduce, or publicly display any
            part of our Services or Content, you must identify us as the owners
            or licensors of the Services, Content, or Marks and ensure that any
            copyright or proprietary notice appears or is visible on posting,
            reproducing, or displaying our Content.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We reserve all rights not expressly granted to you in and to the
            Services, Content, and Marks. Any breach of these Intellectual
            Property Rights will constitute a material breach of our Legal Terms
            and your right to use our Services will terminate immediately.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Your Submissions and Contributions
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Please review this section and the “PROHIBITED ACTIVITIES” section
            carefully prior to using our Services to understand the (a) rights
            you give us and (b) obligations you have when you post or upload any
            content through the Services.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Submissions: By directly sending us any question, comment,
            suggestion, idea, feedback, or other information about the Services
            (“Submissions”), you agree to assign to us all intellectual property
            rights in such a Submission. You agree that we shall own this
            Submission and be entitled to its unrestricted use and dissemination
            for any lawful purpose, commercial or otherwise, without
            acknowledgement or compensation to you.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Contributions: The Services may invite you to chat, contribute to,
            or participate in blogs, message boards, online forums, and other
            functionality during which you may create, submit, post, display,
            transmit, publish, distribute, or broadcast content and materials to
            us or through the Services, including but not limited to text,
            writings, video, audio, photographs, music, graphics, comments,
            reviews, rating suggestions, personal information, or other material
            (“Contributions”). Any submission that is publicly posted shall also
            be treated as a Contribution.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You understand that Contributions may be viewable by other users of
            the Services.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You are responsible for what you post or upload: By sending us
            Submissions and/or posting Contributions through any part of the
            Services or making Contributions accessible through the Services by
            linking your account through the Services to any of your social
            networking accounts, you:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                {' '}
                confirm that you have read and agree with our “PROHIBITED
                ACTIVITIES” and will not post, send, publish, upload, or
                transmit through the Services any Submission nor post any
                Contribution that is illegal, harassing, hateful, harmful,
                defamatory, obscene, bullying, abusive, discriminatory,
                threatening to any person or group, sexually explicit, false,
                inaccurate, deceitful, or misleading;
              </li>
              <li>
                to the extent permissible by applicable law, waive any and all
                moral rights to any such Submission and/or Contribution;
              </li>
              <li>
                warrant that any such Submissions and/or Contributions are
                original to you or that you have the necessary rights and
                licenses to submit such Submissions and/or Contributions and
                that you have full authority to grant us the above-mentioned
                rights in relation to your Submissions and/or Contributions; and
              </li>
              <li>
                warrant and represent that your Submissions and/or Contributions
                do not constitute confidential information.
              </li>
            </ul>
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You are solely responsible for your Submissions and/or Contributions
            and you expressly agree to reimburse us for any and all losses that
            we may suffer because of your breach of (a) this section, (b) any
            third party’s intellectual property rights, or (c) applicable law.
            We may remove or edit your Content: Although we have no obligation
            to monitor any Contributions, we shall have the right to remove or
            edit any Contributions at any time without notice if in our
            reasonable opinion we consider such Contributions harmful or in
            breach of these Legal Terms. If we remove or edit any such
            Contributions, we may also suspend or disable your account and
            report you to the authorities.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>Copyright Infringement</Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We respect the intellectual property of others. If you believe that
            any material available on or through the Services infringes upon any
            copyright you own or control, please immediately refer to the
            “COPYRIGHT INFRINGEMENTS” section below.
          </Typography>

          <Typography
            id="user-registration"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            3. User registration
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            By using the Services, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary; (3)
            you have the legal capacity and you agree to comply with these Legal
            Terms; (4) you are not a minor in the jurisdiction in which you
            reside; (5) you will not access the Services through automated or
            non-human means, whether through a bot, script or otherwise; (6) you
            will not use the Services for any illegal or unauthorized purpose;
            and (7) your use of the Services will not violate any applicable law
            or regulation.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Services (or any portion thereof).
          </Typography>

          <Typography
            id="user-representations"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            4. User representations
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You may be required to register to use the Services. You agree to
            keep your password confidential and will be responsible for all use
            of your account and password. We reserve the right to remove,
            reclaim, or change a username you select if we determine, in our
            sole discretion, that such username is inappropriate, obscene, or
            otherwise objectionable.
          </Typography>

          <Typography
            id="subscriptions"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            5. Subscriptions
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Billing and Renewal. Your subscription will continue and
            automatically renew unless canceled. You consent to our charging
            your payment method on a recurring basis without requiring your
            prior approval for each recurring charge, until such time as you
            cancel the applicable order. The length of you billing cycle will
            depend on the type of subscription plan you choose when you
            subscribe to the Services.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Cancellation. You can cancel your subscription at any time by
            logging into your account. Your cancellation will take effect at the
            end of the current paid term. If you have any questions or are
            unsatisfied with our Services, please email us at
            contact@letsconnect.inc.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Fee Changes. We may, from time to time, make changes to the
            subscription fee and will communicate any price changes to you in
            accordance with applicable law.
          </Typography>

          <Typography
            id="prohibited-activities"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            6. Prohibited activities
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us. As a user of the
            Services, you agree not to:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without the written
                permission from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, use
                and/or the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services to submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Services or modifies, impairs,
                disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats (“gifs”), 1x1 pixels, web bugs,
                cookies, or other similar devices (sometimes referred to as
                “spyware” or “passive collection mechanisms” or “pcms”).
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any other users of the
                Services, or any of our employees or agents engaged in providing
                any portion of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </li>
              <li>
                Copy or adapt the Services’ software, including but not limited
                to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Services.
              </li>
              <li>
                Except as may be the result of standard search engine or
                internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or use or launch any unauthorized script or other
                software.
              </li>
              <li>
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </li>
              <li>
                Make any unauthorized use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
              <li>Sell or otherwise transfer your profile.</li>
              <li>
                Use the Services to advertise or offer to sell goods and
                services.
              </li>
            </ul>
          </Typography>

          <Typography
            id="user-generated-contributions"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            7. User generated contributions
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The Services may invite you to chat, contribute to, or participate
            in blogs, message boards, online forums, and other functionality,
            and may provide you with the opportunity to create, submit, post,
            display, transmit, perform, publish, distribute, or broadcast
            content and materials to us or on the Services, including but not
            limited to text, writings, video, audio, photographs, graphics,
            comments, suggestions, or personal information or other material
            (collectively, “Contributions”). Contributions may be viewable by
            other users of the Services. As such, any Contributions you transmit
            may be treated as non-confidential and non-proprietary. When you
            create or make available any Contributions, you thereby represent
            and warrant that:
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            <ul>
              <li>
                The creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party.
              </li>
              <li>
                You are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorize us, the Services, and other users of the Services to
                use your Contributions in any manner contemplated by the
                Services and these Legal Terms.
              </li>
              <li>
                You have written consent, release, and/or permission of each and
                every identifiable individual person in your Contributions to
                use the name or likeness of each and every such identifiable
                individual person to enable inclusion and use of your
                Contributions in any manner contemplated by the Services and
                these Legal Terms.
              </li>
              <li>
                Your Contributions are not false, inaccurate, or misleading.
              </li>
              <li>
                Your Contributions are not unsolicited or unauthorized
                advertising, promotional materials, pyramid schemes, chain
                letters, spam, mass mailings, or other forms of solicitation.
              </li>
              <li>
                Your Contributions are not obscene, lewd, lascivious, filthy,
                violent, harassing, libelous, slanderous, or otherwise
                objectionable (as determined by us).
              </li>
              <li>
                Your Contributions do not ridicule, mock, disparage, intimidate,
                or abuse anyone.
              </li>
              <li>
                Your Contributions are not used to harass or threaten (in the
                legal sense of those terms) any other person and to promote
                violence against a specific person or class of people.
              </li>
              <li>
                Your Contributions do not violate any applicable law,
                regulation, or rule.
              </li>
              <li>
                Your Contributions do not violate the privacy or publicity
                rights of any third party.
              </li>
              <li>
                Your Contributions do not violate any applicable law concerning
                pornography.
              </li>
              <li>
                Your Contributions do not include any offensive comments that
                are connected to race, national origin, gender, sexual
                preference, or physical handicap.
              </li>
              <li>
                Your Contributions do not otherwise violate, or link to material
                that violates, any provision of these Legal Terms, or any
                applicable law or regulation.
              </li>
            </ul>
          </Typography>

          <Typography
            id="mobile-application-license"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            8. Mobile application license
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Use License. If you access the Services via the App, then we grant
            you a revocable, non-exclusive, non-transferable, limited right to
            install and use the App on wireless electronic devices owned or
            controlled by you, and to access and use the App on such devices
            strictly in accordance with the terms and conditions of this mobile
            application license contained in these Legal Terms. You shall not:
            (1) except as permitted by applicable law, decompile, reverse
            engineer, disassemble, attempt to service the source code of, or
            decrypt the App; (2) make any modification, adaptation, improvement,
            enhancement, translation, or derivative work from the App; (3)
            violate any applicable laws, rules, or regulations in connection
            with your access to use the App; (4) remove, alter, or obscure any
            proprietary notice (including any notice of copyright or trademark)
            posted by us or the licensors of the App; (5) use the App for any
            revenue-generating endeavor, commercial enterprise, or other purpose
            for which it is not designed or intended; (6) make the App available
            over a network or other environment permitting access or use by
            multiple devices or users at the same time; (7) use the App for
            creating a product, service, or software that is, directly or
            indirectly, competitive with or in any way a substitute for the App;
            (8) use the App to send automated queries to any website or to send
            any unsolicited commercial e-mail; or (9) use any proprietary
            information or any of our interfaces or our other intellectual
            property in the design, development, manufacture, licensing, or
            distribution of any applications, accessories, or devices for use
            with the App.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Apple and Android Devices. The following terms apply when you use
            the App obtained from either the Apple Store or Goggle Play (each an
            “App Distributor”) to access the Services: (1) the license granted
            to you for our App is limited to a non-transferable license to use
            the application on a device that utilizes the Apple iOS or Android
            operating systems, as applicable, and in accordance with the usage
            rules set forth in the applicable App Distributor’s terms of
            service; (2) we are responsible for providing any maintenance and
            support services with respect to the App as specified in the terms
            and conditions of this mobile application license contained in these
            Legal Terms or as otherwise required under applicable law, and you
            acknowledge that each App Distributor has no obligation whatsoever
            to furnish any maintenance and support services with respect to the
            App; (3) in the event of any failure of the App to conform to any
            applicable warranty, you may notify the applicable App Distributor,
            and the App Distributor, in accordance with its terms and policies,
            may refund the purchase price, if any, paid for the App, and to the
            maximum extent permitted by applicable law, the App Distributor will
            have no other warranty obligation whatsoever with respect to the
            App; (4) you represent and warrant that (i) you are not located in a
            country that is subject to a US government embargo, or that has been
            designated by the US government as a “terrorist supporting” country
            and (ii) you are not listed on any US government list of prohibited
            or restricted parties; (5) you must comply with applicable
            third-arty terms of agreement when using the App, e.g., if you have
            a VoIP application, then you must not be in violation of their
            wireless data service agreement when using the App; and (6) you
            acknowledge and agree that the App Distributors are third-party
            beneficiaries of the terms and conditions in this mobile application
            license contained in these Legal Terms, and that each App
            Distributor will have the right (and will be deemed to have accepted
            the right) to enforce the terms and conditions in this mobile
            application license contained in these Legal Terms against you as a
            third-party beneficiary thereof.
          </Typography>

          <Typography
            id="services-management"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            9. Services management
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We reserve the right, but not the obligation, to: (1) monitor the
            Services for violations of these Legal Terms; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Legal Terms, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Services or otherwise disable all files and content
            that are excessive in size or are in any way burdensome to our
            systems; and (5) otherwise manage the Services in a manner designed
            to protect our rights and property and to facilitate the proper
            functioning of the Services.
          </Typography>

          <Typography
            id="privacy-policy"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            10. Privacy policy
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We care about data privacy and security. Please review our Privacy
            Policy. By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms.
          </Typography>

          <Typography
            id="copyright-infringements"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            11. Copyright infrigements
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Services
            infringes upon any copyright you own or control, please immediately
            notify us using the contact information provided below (a
            “Notification”). A copy of your Notification will be sent to the
            person who posted or stored the material addressed in the
            Notification. Please be advised that pursuant to applicable law you
            may be held liable for damages if you make material
            misrepresentations in a Notification. Thus, if you are not sure that
            material located on or linked to by the Services infringes your
            copyright, you should consider first contacting an attorney.
          </Typography>

          <Typography
            id="term-and-termination"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            12. Term and termination
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            These Legal Terms shall remain in full force and effect while you
            use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
            LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
            WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
            (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
            REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
            ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
            TERMS OR ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE
            OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY
            CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING,
            IN OUR SOLE DISCRETION.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or a borrowed name, or the name of any third party,
            even if you may be acting on behalf of the third party. In addition
            to terminating or suspending your account, we reserve the right to
            take appropriate legal action, including without limitation pursuing
            civil, criminal, and injunctive redress.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            All information and data gathered from users through the Services
            must be treated as strictly confidential and must not be further
            utilized or distributed. This obligation extends indefinitely beyond
            the termination or suspension of your account.
          </Typography>

          <Typography
            id="modification-and-interruptions"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            13. Modification and interruptions
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We reserve the right to change, modify, or remove the content of the
            Services at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Services. We will not be liable to you or any
            third party for any modification, price change, suspension, or
            discontinuance of the Services.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We cannot guarantee the Services will be available at all times. We
            may experience hardware, software, or other problems or need to
            perform maintenance related to the Services, resulting in
            interruptions, delays, or errors. We reserve the right to change,
            revise, update, suspend, discontinue, or otherwise modify the
            Services at any time or for any reason without notice to you. You
            agree that we have no liability whatsoever for any loss, damage, or
            inconvenience caused by your inability to access or use the Services
            during any downtime or discontinuance of the Services. Nothing in
            these Legal Terms will be construed to obligate us to maintain and
            support the Services or to supply any corrections, updates, or
            releases in connection therewith.
          </Typography>

          <Typography
            id="governing-law"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            14. Governing law
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            These Legal Terms shall be governed by and defined following the
            laws of the United Arab Emirates. Let&#39;s Connect and
            yourself irrevocably consent that the courts of the United Arab
            Emirates shall have exclusive jurisdiction to resolve any dispute
            which may arise in connection with these Legal Terms.
          </Typography>

          <Typography
            id="dispute-resolution"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            15. Dispute resolution
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You agree to irrevocably submit all disputes related to these Legal
            Terms or the legal relationship established by these Legal Terms to
            the jurisdiction of the United Arab Emirates courts. Let&#39;s Connect 
            shall also maintain the right to bring proceedings as
            to the substance of the matter in the courts or the country where
            you reside or, if these legal Terms are entered into the course of
            your trade or profession, the state of your principal place of
            business.
          </Typography>

          <Typography
            id="corrections"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            16. Corrections
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            There may be information on the Services that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Services at any time, without prior
            notice.
          </Typography>

          <Typography
            id="disclaimer"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            17. Disclaimer
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The services are provided on an as-is and as-available basis. You
            agree that your use of the services will be at your sole risk. To
            the fullest extent permitted by law, we disclaim all warranties,
            express or implied, in connection with the services and your use
            thereof, including, without limitation, the implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We make no warranties or representations about the
            accuracy or completeness of the services’ content or the content of
            any websites or mobile applications linked to the services and we
            will assume no liability or responsibility for any (1) errors,
            mistakes, or inaccuracies of content and materials, (2) personal
            injury or property damage, of any nature whatsoever, resulting from
            your access to and use of the services, (3) any unauthorized access
            to or use of our secure servers and/or any and all personal
            information and/or financial information stored therein, (4) any
            interruption or cessation of transmission to or from the services,
            (5) any bugs, viruses, trojan horses, or the like which may be
            transmitted to or through the services by any third-party and/or (6)
            any errors or omissions in any content and materials or for any loss
            or damage of any kind incurred as a result of the use of any content
            posted, transmitted, or otherwise made available via the services.
            We do not warrant, endorse, guarantee, or assume responsibility for
            any product or service advertised or offered by a third party
            through the services, any hyperlinked website, or any website or
            mobile application featured in any banner or other advertising, and
            we will not be a party to or in any way be responsible for
            monitoring any transaction between you and any third party providers
            of products or services. As with the purchase of a product or
            service through any medium or in any environment, you should use
            your best judgement and exercise caution where appropriate.
          </Typography>

          <Typography
            id="limitations-of-liability"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            18. Limitations of liability
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In no event will we or our directors, employees, or agents be liable
            to you or any third party for any direct, indirect, consequential,
            exemplary, incidental, special, or punitive damages, including lost
            profit, lost revenue, loss of data, or other damages arising from
            your use of the services, even if we have been advised of the
            possibility of such damages. Notwithstanding anything to the
            contrary contained herein, our liability to you for any cause
            whatsoever and regardless of the form of the action, will at all
            times be limited to the amount paid, if any, by you to us during the
            six (6) month period prior to any cause of action arisig. Certain us
            state laws and international laws do not allow limitations on
            implied warranties or the exclusion or limitation of certain
            damages. If these laws apply to you, some or all of the above
            disclaimers or limitations may not apply to you, and you may have
            additional rights.
          </Typography>

          <Typography
            id="indemnification"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            19. Indemnification
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of: (1)
            your Contributions; (2) use of the Services; (3) breach of these
            Legal Terms; (4) any breach of your representations and warranties
            set forth in these Legal Terms; (5) your violation of the rights of
            a third party, including but not limited to intellectual property
            rights; or (6) any overt harmful act toward any other user of the
            Services with whom you connected via the Services. Notwithstanding
            the foregoing, we reserve the right, at your expense, to assume the
            exclusive defense and control of any matter for which you are
            required to indemnify us, and you agree to cooperate, at your
            expense, with our defense of such claims. We will use reasonable
            efforts to notify you of any such claim, action, or proceeding which
            is subject to this indemnification upon becoming aware of it.
          </Typography>

          <Typography
            id="user-data"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            20. User data
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            We will maintain certain data that you transmit to the Services for
            the purpose of managing the performance of the services, as well as
            data relating to your use of the Services. Although we perform
            regular routine backups of data, you are solely responsible for all
            data that you transmit or that relates to any activity you have
            undertaken using the Services. You agree that we shall have no
            liability to you for any loss or corruption of any such data, and
            you hereby waive any right of action against us arising from any
            such loss or corruption of such data.
          </Typography>

          <Typography
            id="electronic-communications"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            21. Electronic communications, transactions, and signatures
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            Visiting the Services, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Services, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SERVICES. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </Typography>

          <Typography
            id="miscellaneous"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            22. Miscellaneous
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal terms
            shall not operate as a waiver of such right or provision. These
            Legal Terms operate to the fullest extent permissible by law. We may
            assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Legal
            Terms is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Legal Terms and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Legal Terms or use of the Services. You agree that
            these Legal Terms will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defenses you may
            have based on the electronic form of these Legal Terms and the lack
            of signing by the parties hereto to execute these Legal Terms.
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            The services solely enable potential matches between founders and
            investors and provide respective information for facilitating such
            potential matches. As such, we do not provide recommendations,
            conduct due diligence, or assume any responsibility for the
            information provided as well as for the decisions and transactions
            of any kind (including monetary transactions) made by users based on
            the information provided. It is the exclusive responsibility of
            users of the services to conduct their own due diligence,
            assessment, and decision-making processes. We bear no responsibility
            for any actions, outcomes, or risks resulting from the use of the
            information provided.
          </Typography>

          <Typography
            id="contact-us"
            variant="h3"
            mt={{ xs: 2, md: 4 }}
          >
            23. Contact us
          </Typography>
          <Typography mt={{ xs: 2, md: 2 }}>
            In order to resolve a complaint regarding the Services or to receive
            further information regarding the use of the Services, please
            contact us at: contact@letsconnect.inc
          </Typography>
        </TitleWrapper>
      </ContainerWrapper>
      <GetStarted />
      <Footer />
    </>
  );
};

export default TermsServicePage;
