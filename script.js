function buttonclicked() {
  const affirmations = [
    "I am confident in my abilities", "I believe in myself", "I am strong.", "I am capable of achieving my goals.", "I am resilient.", "I am worthy of success.", "I am deserving of success.", "I am strong.", "I am beautiful.", "I am worthy of being respected", "I can determine my future.", "I am in control", "I am amazing.", "I trust my journey.", "I can do hard things.", "I am enough", "I am proud of myself.", "I am brave.", "I can control my thoughts and responses.", "I trust myself.", "I trust me inuition.", "I honor my emotions.", "My mind and body are worthy of rest.", "It is okay to set boundaries.", "I visualize my success.", "I am grateful.", "I am a good friend.", "I am empathetic and show empathy."
  ];
  const number = Math.floor(Math.random() * affirmations.length);
  alert(affirmations[number]);
}