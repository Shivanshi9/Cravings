import React from "react";
import { useAuth } from "../../context/AuthContext";

const Settings = () => {
  const { user } = useAuth();

  const [ isEditable, setIsEditable] = useState(false);
  return (
    <>
      <div>Welcome Back!! {user?.FullName}</div>

      <div>Welcome Back!! {user?.email}</div>

      <div>Welcome Back!! {user?.photo}</div>

      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img
          src={user?.photo}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Settings;