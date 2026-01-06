// const API_URL = "http://localhost:5000/api/auth";

// export async function loginUser(data) {
//   const res = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });

//   if(!res.ok) throw new Error("Invalid login");
//   return await res.json();
// }

import { useEffect } from "react";
import { signInWithGoogle, handleRedirectResult } from "../lib/firebase";

useEffect(() => {
  handleRedirectResult()
    .then((result) => {
      if (result?.user) {
        localStorage.setItem("px_token", result.user.accessToken);
        navigate("/home");
      }
    })
    .catch(console.error);
}, []);
