"use client";
import { FSelect } from "@/components/Fields";
import { getArtists } from "@/features/artist/api/getArtists";
import { useQuery } from "@tanstack/react-query";
import { Field } from "formik";
import React, { useEffect, useState } from "react";

export const ArtistsField = () => {
  const [options, setOptions] = useState([]);
  const [enable, setEnable] = useState(false);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists,
    enabled: enable,
  });

  useEffect(() => {
    if (options.length === 0) {
      setEnable(true);
    }
  }, []);

  if (isSuccess && enable && options.length === 0) {
    const artists = data.data.map((artist) => ({
      value: artist.username,
      label: artist.username,
    }));
    setOptions(artists as []);
  }

  return (
    <div className="my-4">
      {isSuccess && (
        <Field name="artist" component={FSelect} options={options} />
      )}
    </div>
  );
};
