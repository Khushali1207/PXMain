import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // your logo path

export default function PrintXLogo() {
  return (
    <motion.img
      src={logo}
      alt="PX Logo"
      initial={{ scale: 1, opacity: 0.8 }}
      animate={{ scale: 2, opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="object-contain drop-shadow-[0_0_15px_hsl(272,40%,58%)]"
      style={{ width: "10rem", height: "10rem" }} // base size, scalable
    />
  );
}
