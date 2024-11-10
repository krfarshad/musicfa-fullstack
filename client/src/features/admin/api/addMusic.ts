import { ApiResponse } from "@/types";
import { BASE_API_URL } from "@/config";

type Props = {
  values: any;
};

export const addMusic = async (props: Props) => {
  const { values } = props;
  const url = `${BASE_API_URL}/musics`;

  const editValues = {
    ...values,
    music: values?.music && values.music[0],
    musicCover: values?.musicCover && values.musicCover[0],
  };

  const formData = new FormData();
  Object.entries(editValues).forEach(([key, value]) => {
    if (!value) return;
    if (Array.isArray(value) && value.every((item) => item instanceof File)) {
      value.forEach((file, index) => {
        formData.append(`${key}[${index}]`, file);
      });
    } else if (typeof value === "number") {
      formData.append(key, `${value}`);
    } else {
      formData.append(key, value as any);
    }
  });

  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);

  // Set up the progress event listener
  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      const percentCompleted = Math.round((event.loaded * 100) / event.total);
      console.log(`Upload Progress: ${percentCompleted}%`);
    }
  };

  // Handle the response
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("File uploaded successfully!");
    } else {
      console.error("Error uploading file:", xhr.responseText);
    }
  };

  // Handle errors
  xhr.onerror = () => {
    console.error("Upload failed.");
  };

  // Send the request with the FormData
  xhr.send(formData);
};
