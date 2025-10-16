import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SelectField from "../ui/forms/SelectField";
import SubmitButton from "../ui/forms/SubmitButton";

export default function Register() {
  const { t } = useTranslation();

  const roles = [
    { value: "student", name: t("auth.student") },
    { value: "graduate", name: t("auth.graduate") },
    { value: "coach", name: t("auth.careerCoach") },
    { value: "startup", name: t("auth.startup") },
    { value: "mentor", name: t("auth.industryMentor") },
  ];

  const countries = [
    { value: "egypt", name: "Egypt" },
    { value: "saudi", name: "Saudi Arabia" },
    { value: "uae", name: "UAE" },
    { value: "usa", name: "USA" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="auth_section main_section mt-100">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12 p-2 d-flex flex-column">
            <h3 className="section_title">{t("auth.signUpTitle")}</h3>
            <p className="section_description">{t("auth.signUpSubtitle")}</p>

            <form className="form_ui mt-3" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form_group">
                <InputField
                  label={t("auth.fullName")}
                  placeholder={t("auth.enterFullName")}
                  name="full_name"
                />
              </div>

              {/* Email & Phone */}
              <div className="form_group">
                <InputField
                  label={t("auth.email")}
                  placeholder={t("auth.enterEmail")}
                  type="email"
                  name="email"
                />
                <InputField
                  label={`${t("auth.phone")} (${t("auth.optional")})`}
                  placeholder={t("auth.enterPhone")}
                  type="tel"
                  name="phone"
                />
              </div>

              {/* I am a ... */}
              <div className="form_group">
                <SelectField
                  label={t("auth.iam")}
                  defaultSelect={t("auth.selectRole")}
                  options={roles}
                  name="role"
                />
              </div>

              {/* Country */}
              <div className="form_group">
                <SelectField
                  label={t("auth.country")}
                  defaultSelect={t("auth.selectCountry")}
                  options={countries}
                  name="country"
                />
              </div>

              {/* Passwords */}
              <div className="form_group">
                <PasswordField
                  label={t("auth.password")}
                  placeholder={t("auth.enterPassword")}
                  name="password"
                />
                <PasswordField
                  label={t("auth.confirmPassword")}
                  placeholder={t("auth.confirmPassword")}
                  name="confirm_password"
                />
              </div>

              <SubmitButton text={t("auth.signUp")} />

              <p className="note mt-3">
                {t("auth.alreadyHaveAnAccount")}{" "}
                <Link to="/signin">{t("auth.signIn")}</Link>
              </p>
            </form>
          </div>

          {/* صورة جانبية */}
          <div className="col-lg-6 col-12 p-2 d-lg-block d-none">
            <div className="img">
              <img src="/images/auth.jpg" alt="auth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
