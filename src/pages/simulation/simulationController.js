import CustomButton from "../../components/Buttons/CustomeButton";
import "./style.css";
import { FaPlay } from "react-icons/fa";
import {
  MdAccessible,
  MdEmojiTransportation,
  MdStopCircle,
  MdAddRoad,
  MdOutlineBreakfastDining,
  MdLocalParking,
} from "react-icons/md";
import { ImUserPlus, ImUserMinus } from "react-icons/im";
function simulationController() {
  return (
    <div className="btn-add-route bus-controller">
      <CustomButton classes="btn btn-green btn-radius">
        <FaPlay /> Start
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <MdEmojiTransportation />
        Go
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <MdStopCircle />
        Stop
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <MdAddRoad />
        Resume
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <MdAccessible />
        Accelate
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <MdOutlineBreakfastDining />
        Break
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <ImUserPlus />
        User{" "}
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <ImUserMinus />
        Remove
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius">
        <MdLocalParking />
        Park
      </CustomButton>{" "}
    </div>
  );
}
export default simulationController;
