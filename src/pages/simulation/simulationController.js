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
import { BusState } from "./BusState";
import { toast } from "react-toastify";
function simulationController({ props }) {
  const {
    passengers,
    pause,
    position,
    resume,
    // setDestination,
    setCurrentPosition,
    setCurrentCoords,
    setEngine,
    setFreeSeats,
    setIsSlowing,
    setIsSpeed,
    // setOrigin,
    setPassengers,
    setPause,
    setPosition,
    setResume,
    setSpeed,
    setStart,
    setSummary,
    speed,
    start,
    isSpeed,
    isSlowing,
  } = props;
  const handleStart = () => {
    setStart((start) => !start);
    toast.success("Bus Started");
  };
  const handlePause = () => {
    setPause((pause) => !pause);
    setEngine((engine) => !engine);
    setStart((start) => !start);
    toast.success("Bus Paused");
  };
  const handleResume = () => {
    setStart((start) => !start);
    setEngine((engine) => !engine);
    setResume(!resume);
    toast.success("Bus Continued");
  };
  const handleEngine = () => {
    setEngine((engine) => !engine);
    toast.success("Bus Engine Started");
  };
  const handleSpeed = () => {
    setIsSpeed((isSpeed) => !isSpeed);
    setSpeed(speed - speed / 10);
    toast.success("Bus Speed Increased");
  };
  const handleSlow = () => {
    setIsSlowing((isSlowing) => !isSlowing);
    setSpeed(speed + speed / 10);
    toast.success("Bus Speed Decreased");
  };

  return (
    <div className="btn-add-route bus-controller">
      <CustomButton classes="btn btn-green btn-radius" onclick={handleStart}>
        <FaPlay /> Start
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius" onclick={handleEngine}>
        <MdEmojiTransportation />
        Go
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius" onclick={handlePause}>
        <MdStopCircle />
        Stop
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius" onclick={handleResume}>
        <MdAddRoad />
        Resume
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius" onclick={handleSpeed}>
        <MdAccessible />
        Accelate
      </CustomButton>{" "}
      <CustomButton classes="btn btn-green btn-radius" onclick={handleSlow}>
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
