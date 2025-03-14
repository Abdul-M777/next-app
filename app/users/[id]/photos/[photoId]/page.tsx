import React from "react";

interface PhotosDetailsProps {
  params: { id: number; photoId: number };
}

const PhotosDetails = ({ params: { id, photoId } }: PhotosDetailsProps) => {
  return (
    <div className="text-black">
      PhotosDetails {id} / {photoId}
    </div>
  );
};

export default PhotosDetails;
