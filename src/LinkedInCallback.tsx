import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// interface tokenTypes {
//   token: string;
//   refreshToken: string;
// }

const LinkedInCallback = () => {
  const location = useLocation();
  // const [tokens, setTokens] = useState<tokenTypes>();

  useEffect(() => {
    const fetchToken = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get("code");
      const state = params.get("state");

      if (code && state) {
        try {
          const response = await axios.get("http://localhost:5000/auth", {
            params: { code },
          });

          const { token, refreshToken } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);

          const tokens = { token: token, refreshToken: refreshToken };

          console.log(tokens);

          axios.post("http://localhost:4001/token", tokens);
        } catch (error) {
          console.error("Error fetching tokens:", error);
        }
      }
    };
    fetchToken();
  }, [location]);

  return <div>Authenticating... Please check your Desktop app</div>;
};

export default LinkedInCallback;
