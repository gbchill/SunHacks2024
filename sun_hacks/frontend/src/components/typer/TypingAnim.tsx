import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Check In On Your Mental Health 🧠",
        1500,
        "Talk to a Friend for Support 🤝",
        2000,
        "Spark a Conversation with AI 🔥",
        2000,
        "Your Safe Space at University 🎓",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "50px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
