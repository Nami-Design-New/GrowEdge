
// import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();

  const faqs = t("faqs.items", { returnObjects: true });

  return (
    <section className='faqs_section'>
      <div className="container">
        <div className="section_header text-center">
          <h6 className="section_hint">{t("faqs.hint")}</h6>
          <h2 className="section_title">{t("faqs.title")}</h2>
          <p className="section_desc">{t("faqs.subtitle")}</p>
        </div>

        <div className="faq_list mt-4">
          <Accordion>
            {faqs.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
