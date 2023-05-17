import { useContext } from "react";
import { Button } from "react-bootstrap";
import { deleteStudent } from "../../api";
import { UserContext } from "../../context/UserContext";

const SettingStudents = () => {
  const { user } = useContext(UserContext);
  const removeUserClick = async () => {
    console.log(user.userId);
    try {
      console.log(user.userId);
      const data = await deleteStudent(user.token, user.userId);
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return <Button onClick={removeUserClick}> Elimininar cuenta </Button>;
};

export default SettingStudents;
