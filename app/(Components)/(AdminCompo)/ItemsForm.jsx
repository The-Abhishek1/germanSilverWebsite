"use client";
import React, { useState } from "react";
import { db, storage, auth } from "@app/(Firebase)/config";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";

//Main Function
function ItemsForm() {
  //State For Image
  const [imageUpload, setImageUpload] = useState(null);
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-slate-200"
      >
        <h1>collections form</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="p-2.5 outline-none text-[14px] rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="type">Item Type</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="actualValue">Actual Value</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="discountValue">Discount Value</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="image">Upload the Image</label>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ItemsForm;
