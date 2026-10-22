export const contactCategories = [
  { value: "B", label: "B-flokkur — fólksbifreið" },
  { value: "BE", label: "BE-flokkur — bifreið með eftirvagni" },
  { value: "C", label: "C-flokkur — vörubifreið" },
  { value: "CE", label: "CE-flokkur — vörubifreið með eftirvagni" },
  { value: "D", label: "D-flokkur — hópbifreið" },
  { value: "veit-ekki", label: "Veit ekki enn" },
] as const;

export type ContactCategory = (typeof contactCategories)[number]["value"];

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const message = input.message.trim();
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Skráðu nafn, að minnsta kosti tvo stafi.";
  else if (name.length > 80) errors.name = "Nafnið er of langt.";

  if (!emailPattern.test(email) || email.length > 120) {
    errors.email = "Skráðu gilt netfang.";
  }

  if (digits.length < 7 || digits.length > 15) {
    errors.phone = "Skráðu gilt símanúmer.";
  }

  if (!contactCategories.some((item) => item.value === input.category)) {
    errors.category = "Veldu ökuréttindaflokk.";
  }

  if (message.length < 10) {
    errors.message = "Skráðu stutt skilaboð, að minnsta kosti tíu stafi.";
  } else if (message.length > 2000) {
    errors.message = "Skilaboðin mega vera að hámarki 2.000 stafir.";
  }

  return errors;
}

export function categoryLabel(value: string) {
  return contactCategories.find((item) => item.value === value)?.label ?? value;
}

export function buildMailto(fields: ContactFields) {
  const subject = "Fyrirspurn frá vef DRIVEON";
  const body = [
    `Nafn: ${fields.name.trim()}`,
    `Netfang: ${fields.email.trim()}`,
    `Sími: ${fields.phone.trim()}`,
    `Flokkur: ${categoryLabel(fields.category)}`,
    "",
    "Skilaboð:",
    fields.message.trim(),
  ].join("\n");

  return `mailto:runarb75@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
