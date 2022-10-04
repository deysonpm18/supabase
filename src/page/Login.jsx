import { useState, useEffect } from "react";
import { Client } from "../supabase/Client";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // es una funciona asicromatica
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await Client.auth.signIn({ email });
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Client.auth.user()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="row pt-4">

      <div className="col-md-4 offset-md-4">
      <form onSubmit={handleSubmit} className="card card-body">

      <input
        type="email"
        id=""
        name="email"
        placeholder="cola tu direcion de correo "
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
        
        />
        <button className="btn btn-primary">send</button>
      </form>
        </div>
    </div>
  );
}

export default Login;
