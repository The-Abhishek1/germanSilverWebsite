"use client";
import React, { useState } from "react";
import { db, storage, auth } from "@app/(Firebase)/config";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { item } from "./Item";
import Image from "next/image";
//Main Function
function ItemsForm() {
  //State For Image
  const [imageUpload, setImageUpload] = useState(null);
  const [products, setProducts] = useState(false);
  const [newProducts, setNewProducts] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const actualValue = data.get("actualValue");
    const discountValue = data.get("discountValue");
    const type = data.get("type");

    if (imageUpload == null) return;
    const imageRef = ref(storage, `Items/${name}`);
    try {
      await uploadBytes(imageRef, imageUpload).then((res) => {
        console.log("Image uploaded successfully");
      }),
        await getDownloadURL(imageRef).then((url) => {
          globalThis.imgUrl = url;
        });
      const docRef = await addDoc(collection(db, "Items"), {
        Name: name,
        Type: type,
        ActualValue: actualValue,
        DiscountValue: discountValue,
        ImgURL: imgUrl,
      });
      console.log("Document Written with ID:", docRef.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-4 flex relative flex-col w-full items-center gap-6 font-serif">
      <div className="flex items-center gap-6">
        <button
          onClick={() => {
            setNewProducts(true);
            setProducts(false);
          }}
          className="bg-indigo-950 rounded-md p-1 text-white px-3"
        >
          Add Product
        </button>
        <button
          onClick={() => {
            setNewProducts(false);
            setProducts(true);
          }}
          className="bg-indigo-950 rounded-md p-1 text-white px-3"
        >
          List Products
        </button>
      </div>
      {newProducts ? (
        <form
          onSubmit={handleSubmit}
          className="flex w-full mss:w-[70%] flex-col gap-2 px-5"
        >
          <h1 className="text-center font-bold">
            Enter The Details of New Product
          </h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="p-2 bg-slate-50 border-orange-500 border-[1px] outline-none text-[14px] rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type">Item Type</label>
            <input
              type="text"
              className="p-2 bg-slate-50 border-orange-500 border-[1px] outline-none text-[14px] rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="actualValue">Actual Value</label>
            <input
              type="text"
              className="p-2 bg-slate-50 border-orange-500 border-[1px] outline-none text-[14px] rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="discountValue">Discount Value</label>
            <input
              type="text"
              className="p-2 bg-slate-50 border-orange-500 border-[1px] outline-none text-[14px] rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">Upload the Image</label>
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              className="p-2 bg-slate-50 border-orange-500 border-[1px] outline-none text-[14px] rounded-md w-full"
            />
          </div>
          <div className="flex items-center justify-center mt-5 w-full">
            <button
              className="bg-indigo-950 w-full rounded-md p-[6px] text-white px-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
      {products ? (
        <div className=" flex flex-row justify-center flex-wrap gap-5 items-center">
          {item.map((i) => {
            return (
              <div
                key={i.id}
                className="flex bg-slate-100 w-[170px] h-[250px] justify-center px-2 flex-col gap-1 items-center"
              >
                <Image
                  src={i.image}
                  alt={i.text}
                  className="w-[100px] h-[100px] "
                />
                <h3 className="text-[14px]">{i.text}</h3>
                <h5 className="text-[14px]">{i.typeOf}</h5>
                <h5 className="text-[14px]">{i.ActualPrice}</h5>

                <button className="bg-indigo-950 w-full rounded-md p-[6px] text-white px-3">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="bg-sky-100 z-[-2] top-0 blur-3xl h-full absolute w-full"></div>
    </div>
  );
}

export default ItemsForm;
