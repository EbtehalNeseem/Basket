const { useNavigate } = require("react-router-dom");

const { phone, password, clearCredentials, clearTokens , accessToken } = useUserToken();
  const navigate = useNavigate();

  function logout() {
    api.post(`/auth/logout`,
      {
        Phone: phone,
        Password: password
      }
    )
      .then((res) => {
        console.log(res);
        clearTokens();
        clearCredentials();
        navigate('/login')
      }


      ).catch((err) => {
        console.log(err);

      })

  }
