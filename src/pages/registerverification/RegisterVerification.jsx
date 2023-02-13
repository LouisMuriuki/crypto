import React, { useState, useEffect } from "react";
import { Input, Button, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";



const { Text } = Typography;

const RegisterVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [timer, setTimer] = useState(null);
  const navigate=useNavigate()
  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timer||undefined);
      setTimer(null);
    }
  }, [countdown]);

  const handleVerify = () => {
    navigate("/login/resetpassword")
    // Add code to verify the verification code here
    console.log(`Verifying code: ${verificationCode}`);
  };

  const handleResend = () => {
    setCountdown(60);
    clearInterval(timer|| undefined);
    setTimer(
      setInterval(() => {
        setCountdown(prev=>prev- 1);
      }, 1000)
    );
    // Add code to resend the verification code here
    console.log("Resending verification code...");
  };

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="w-[450px] shadow-md p-10 rounded-md  ">
        <p className="font-semibold my-9">We have sent a verification code to your Mobile Number.</p>
        <Input
          size="large"
          placeholder="Enter verification code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Space className="mt-10" size={10}>
          <Button type="primary" size="large" onClick={handleVerify}>
            Verify
          </Button>
          <Text type="secondary"  disabled={timer!=null} className="cursor-pointer" onClick={handleResend}>
            Resend
            {timer ? ` (${countdown}s)` : ""}
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default RegisterVerification;
