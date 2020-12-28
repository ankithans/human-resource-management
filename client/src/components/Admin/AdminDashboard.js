import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { Button } from "../shared/Button";

export const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Button
        onClick={() => logout()}
        type='submit'
        label='logout'
        svgBool={false}
      />
    </div>
  );
};
