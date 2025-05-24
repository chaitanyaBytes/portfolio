import Container from "@/components/container";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";
import ContactForm from "@/components/contact-form";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading as="h1">Contact</Heading>

        <Subheading>
          I&apos;m always looking for new opportunities and collaborations. Feel
          free to reach out to me.
        </Subheading>

        <ContactForm />

        {/* <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col gap-2 py-4">
            <h2 className="text-primary text-base font-bold tracking-tight">
              Email
            </h2>
            <p className="text-secondary text-sm md:text-sm">
              chaitanyabytes@gmail.com (Preferred)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col gap-2 py-4">
            <h2 className="text-primary text-base font-bold tracking-tight">
              Phone
            </h2>
            <p className="text-secondary text-sm md:text-sm">+91 9876543210</p>
            <p className="text-secondary text-sm md:text-sm">+91 9876543210</p>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default ContactPage;
