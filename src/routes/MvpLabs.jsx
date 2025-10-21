import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import SectionHeader from "../ui/SectionHeader";
import InputField from "../ui/forms/InputField";
import SelectField from "../ui/forms/SelectField";

export default function MvpLabs() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ideaTitle: "",
    problem: "",
    solution: "",
    targetMarket: "",
    uniqueness: "",
    monetization: "",
    fundingAmount: "",
    timeline: "",
    teamSize: "",
    background: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mvp-page">
      <SectionHeader
        title={t("MvpLabs.title")}
        subtitle={t("MvpLabs.subtitle")}
      />

      <div className="container">
        <form className="form_ui">
          <div className="row">
            <div className="col-md-6 mb-3">
              <InputField
                label={t("MvpLabs.form.firstName")}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label={t("MvpLabs.form.lastName")}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <InputField
                label={t("MvpLabs.form.email")}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <InputField
                label={t("MvpLabs.form.phone")}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              label={t("MvpLabs.form.ideaTitle")}
              name="ideaTitle"
              value={formData.ideaTitle}
              onChange={handleChange}
              placeholder={t("MvpLabs.form.ideaTitlePlaceholder")}
              required
            />
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              as="textarea"
              rows={3}
              label={t("MvpLabs.form.problem")}
              placeholder={t("MvpLabs.form.problemPlaceholder")}
              name="problem"
              value={formData.problem}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              as="textarea"
              rows={3}
              label={t("MvpLabs.form.solution")}
              placeholder={t("MvpLabs.form.solutionPlaceholder")}
              name="solution"
              value={formData.solution}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              as="textarea"
              rows={3}
              label={t("MvpLabs.form.targetMarket")}
              placeholder={t("MvpLabs.form.targetMarketPlaceholder")}
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              as="textarea"
              rows={3}
              label={t("MvpLabs.form.uniqueness")}
              placeholder={t("MvpLabs.form.uniquenessPlaceholder")}

              name="uniqueness"
              value={formData.uniqueness}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              as="textarea"
              rows={3}
              label={t("MvpLabs.form.monetization")}
              placeholder={t("MvpLabs.form.monetizationPlaceholder")}
              name="monetization"
              value={formData.monetization}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <SelectField
                label={t("MvpLabs.form.fundingAmount")}
                name="fundingAmount"
                defaultSelect={t("MvpLabs.form.fundingAmountPlaceholder")}
                options={[
                  { value: "10k", name: "$10K" },
                  { value: "25k", name: "$25K" },
                  { value: "50k", name: "$50K" },
                ]}
                value={formData.fundingAmount}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <SelectField
                label={t("MvpLabs.form.timeline")}
                name="timeline"
                defaultSelect={t("MvpLabs.form.timelinePlaceholder")}
                options={[
                  { value: "3-months", name: "3 Months" },
                  { value: "6-months", name: "6 Months" },
                  { value: "12-months", name: "12 Months" },
                ]}
                value={formData.timeline}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <SelectField
                label={t("MvpLabs.form.teamSize")}
                name="teamSize"
                defaultSelect={t("MvpLabs.form.teamSizePlaceholder")}
                options={[
                  { value: "1", name: "Solo Founder" },
                  { value: "2-5", name: "2 - 5" },
                  { value: "6+", name: "6+" },
                ]}
                value={formData.teamSize}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-3">
              <SelectField
                label={t("MvpLabs.form.background")}
                name="background"
                defaultSelect={t("MvpLabs.form.backgroundPlaceholder")}
                options={[
                  { value: "technical", name: "Technical" },
                  { value: "business", name: "Business" },
                  { value: "design", name: "Design" },
                  { value: "other", name: "Other" },
                ]}
                value={formData.background}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-12 mb-3 ">
            <InputField
              as="textarea"
              rows={4}
              label={t("MvpLabs.form.experience")}
              placeholder={t("MvpLabs.form.experiencePlaceholder")}
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          {/* ===== Buttons ===== */}
          <div className="btn-group">
            <button
              type="button"
              className="btn-outline"
              onClick={() => navigate("/")}
            >
              {t("MvpLabs.form.cancel")}
            </button>
            <button type="submit" className="btn-dark">
              {t("MvpLabs.form.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
