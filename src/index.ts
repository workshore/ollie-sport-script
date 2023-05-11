import { WFFormComponent } from "@xatom/core";

(window as any).Webflow ||= [];

(window as any).Webflow.push(() => {
  const form = new WFFormComponent<{
    looking_for: string;
    "size_of-the-team": string;
    "looking_for-in-Ollie": string;
    "Email-2": string;
    "Full-name-2": string;
    "team-club-name-2": string;
    "zip-code-2": string;
  }>("#multi-step-form");
  const step1 = form.getChildAsComponent("#step1");
  const step1NextButton = step1.getChildAsComponent(
    `[xa-type="next"]`
  );
  const step2 = form.getChildAsComponent("#step2");
  const step2NextButton = step2.getChildAsComponent(
    `[xa-type="next"]`
  );
  const step2ErrorMessage = step2.getChildAsComponent(
    ".error-message"
  );
  const step3 = form.getChildAsComponent("#step3");
  const step3NextButton = step3.getChildAsComponent(
    `[xa-type="next"]`
  );
  const step3PrevButton = step3.getChildAsComponent(
    `[xa-type="prev"]`
  );
  const step3ErrorMessage = step3.getChildAsComponent(
    ".error-message"
  );
  const step4 = form.getChildAsComponent("#step4");
  const step4NextButton = step4.getChildAsComponent(
    `[xa-type="next"]`
  );
  const step4PrevButton = step4.getChildAsComponent(
    `[xa-type="prev"]`
  );
  const step4ErrorMessage = step4.getChildAsComponent(
    ".error-message"
  );
  const step5 = form.getChildAsComponent("#step5");
  const step5Email =
    step5.getChildAsComponent<HTMLInputElement>(
      `[name="Email-2"]`
    );
  const step5Part2 = step5.getChildAsComponent(
    `#form-content-holder`
  );
  const step5CheckBox =
    step5.getChildAsComponent<HTMLInputElement>(
      `[name="Consent-Checkbox-2"]`
    );
  const step5NextButton = step5.getChildAsComponent(
    `[xa-type="next"]`
  );
  const step5PrevButton = step5.getChildAsComponent(
    `[xa-type="prev"]`
  );
  const step5ErrorMessage = step5.getChildAsComponent(
    ".error-message"
  );
  step1NextButton.on("click", () => {
    step1.getElement().style.display = "none";
    step2.getElement().style.display = "flex";
  });
  step2NextButton.on("click", () => {
    if (
      form.getFormData().looking_for &&
      form.getFormData().looking_for.length
    ) {
      step2.getElement().style.display = "none";
      step3.getElement().style.display = "flex";
      step2ErrorMessage.getElement().style.display = "none";
    } else {
      step2ErrorMessage.getElement().style.display =
        "block";
    }
  });
  step3PrevButton.on("click", () => {
    step3.getElement().style.display = "none";
    step2.getElement().style.display = "flex";
  });
  step3NextButton.on("click", () => {
    if (
      form.getFormData()["size_of-the-team"] &&
      form.getFormData()["size_of-the-team"].length
    ) {
      step3.getElement().style.display = "none";
      step4.getElement().style.display = "flex";
      step3ErrorMessage.getElement().style.display = "none";
    } else {
      step3ErrorMessage.getElement().style.display =
        "block";
    }
  });
  step4PrevButton.on("click", () => {
    step4.getElement().style.display = "none";
    step3.getElement().style.display = "flex";
  });
  step4NextButton.on("click", () => {
    if (
      form.getFormData()["looking_for-in-Ollie"] &&
      form.getFormData()["looking_for-in-Ollie"].length
    ) {
      step4.getElement().style.display = "none";
      step5.getElement().style.display = "flex";
      step4ErrorMessage.getElement().style.display = "none";
    } else {
      step4ErrorMessage.getElement().style.display =
        "block";
    }
  });
  step5PrevButton.on("click", () => {
    step5.getElement().style.display = "none";
    step4.getElement().style.display = "flex";
  });
  step5Email.on("keyup", () => {
    if (
      step5Email.getElement().validity.valid &&
      /^[\w.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
        step5Email.getElement().value
      )
    ) {
      step5Part2.getElement().style.display = "block";
    } else {
      step5Part2.getElement().style.display = "none";
    }
  });
  step5NextButton.on("click", () => {
    if (
      step5Email.getElement().validity.valid &&
      /^[\w.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
        step5Email.getElement().value
      ) &&
      form.getFormData()["Full-name-2"] &&
      form.getFormData()["Full-name-2"].length &&
      form.getFormData()["team-club-name-2"] &&
      form.getFormData()["team-club-name-2"].length &&
      form.getFormData()["zip-code-2"] &&
      form.getFormData()["zip-code-2"].length &&
      step5CheckBox.getElement().checked
    ) {
      form.getFormComponent().getElement().submit();
      // step4.getElement().style.display = "none";
      // step5.getElement().style.display = "flex";
      step5ErrorMessage.getElement().style.display = "none";
    } else {
      step5ErrorMessage.getElement().style.display =
        "block";
    }
  });
});
