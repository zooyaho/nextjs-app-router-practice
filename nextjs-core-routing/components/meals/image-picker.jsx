"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickedImg] = useState();
  const inputImgRef = useRef();

  const onClickPicker = () => {
    inputImgRef.current.click();
  };
  const onChangeInput = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      // readAsDataURL가 완료 되면 onload가 실행됨!
      setPickedImg(fileReader.result); // 변경된 url을 확인할 수 있음!
    };
    fileReader.readAsDataURL(file); // url로 변경 해줌
  };

  return (
    <div className="picker">
      <label htmlFor={name} className="block mb-2 text-sm font-bold">
        {label}
      </label>
      <div className="flex items-start gap-6 mb-4">
        <input
          type="file"
          ref={inputImgRef}
          id={name}
          name={name} // 이미지 추출에 사용
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={onChangeInput}
          required
        />
        <button
          type="button"
          className="border-0 py-2 px-6 bg-[#a4abb9] rounded-md cursor-pointer font-inherit hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
          onClick={onClickPicker}
        >
          Choose File
        </button>
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {pickedImg ? (
            <Image src={pickedImg} fill alt="user picked image" />
          ) : (
            <p className="m-0 p-4">No Image</p>
          )}
        </div>
      </div>
    </div>
  );
}
