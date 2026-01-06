import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contact';

export const submitContact = async (name, email, message) => {
  try {
    const response = await axios.post(API_URL, { name, email, message });
    // Backend se { success: true, msg: "..." } aana chahiye
    return response.data;
  } catch (error) {
    throw error;
  }
};