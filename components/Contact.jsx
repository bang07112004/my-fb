import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center">
        <Image
          className="h-[50px] w-[50px] rounded-full"
          src="/avatar.jpg"
          alt="ME"
          width={50}
          height={50}
        />
        <h1 className="font-medium">Bằng</h1>
      </div>
    </div>
  );
}

export default Contact;
